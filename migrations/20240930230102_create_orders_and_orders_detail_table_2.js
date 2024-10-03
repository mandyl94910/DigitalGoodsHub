/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .raw(`
        -- Drop tables if they exist, cascade foreign key dependencies
        DROP TABLE IF EXISTS orders_detail CASCADE;
        DROP TABLE IF EXISTS review CASCADE;
        DROP TABLE IF EXISTS address CASCADE;
        DROP TABLE IF EXISTS orders CASCADE;
        DROP TABLE IF EXISTS product CASCADE;
        DROP TABLE IF EXISTS category CASCADE;
        DROP TABLE IF EXISTS admin CASCADE;
        DROP TABLE IF EXISTS customer CASCADE;
  
        -- Create customer table
        CREATE TABLE customer (
            customer_id SERIAL PRIMARY KEY,
            customer_name VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            phone VARCHAR(10) NOT NULL,
            birthday DATE,
            register_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
  
        -- Create category table
        CREATE TABLE category (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            sub_for INT NOT NULL,
            image VARCHAR(255)
        );
  
        -- Create product table
        CREATE TABLE product (
            product_id SERIAL PRIMARY KEY,
            product_name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            product_description TEXT,
            category_id INT NOT NULL,
            quantity INT DEFAULT 0 NOT NULL,
            folder INT,
            image VARCHAR(255),
            visibility BOOLEAN DEFAULT TRUE NOT NULL
        );
  
        -- Create admin table
        CREATE TABLE admin (
            id SERIAL PRIMARY KEY,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            pin VARCHAR(4) NOT NULL,
            title VARCHAR(255) NOT NULL,
            status BOOLEAN NOT NULL DEFAULT TRUE,
            image VARCHAR(255),
            register_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            last_login TIMESTAMPTZ
        );
  
        -- Create review table
        CREATE TABLE review (
            id SERIAL PRIMARY KEY,
            customer_id INT NOT NULL,
            product_id INT NOT NULL,
            content TEXT NOT NULL,
            rating INT DEFAULT 5 NOT NULL,
            review_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            visibility BOOLEAN DEFAULT TRUE NOT NULL,
            pin_top BOOLEAN DEFAULT FALSE NOT NULL
        );
  
        -- Create address table
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            customer_id INT NOT NULL,
            street VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            province VARCHAR(255) NOT NULL,
            postal VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL,
            is_default BOOLEAN NOT NULL DEFAULT FALSE
        );
  
        -- Create orders table
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            customer_id INT NOT NULL,
            address_id INT NOT NULL,
            total NUMERIC(10, 2) NOT NULL,
            total_tax NUMERIC(10, 2),
            status VARCHAR(255) NOT NULL,
            order_date TIMESTAMPTZ NOT NULL,
            ship_date TIMESTAMPTZ,
            shipping_method VARCHAR(255),
            tracking_number VARCHAR(255),
            complete_date TIMESTAMPTZ
        );
  
        -- Create orders_detail table
        CREATE TABLE orders_detail (
            id SERIAL PRIMARY KEY,
            order_id INT NOT NULL,
            product_id INT NOT NULL,
            quantity INT NOT NULL DEFAULT 1
        );
  
        -- Add foreign key constraints
        -- Add self-referencing foreign key to category table
        ALTER TABLE category
        ADD CONSTRAINT fk_subcategory FOREIGN KEY (sub_for) REFERENCES category (id);
  
        -- Add foreign key to product table referencing category
        ALTER TABLE product
        ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category (id);
  
        -- Add constraints to customer table
        ALTER TABLE customer 
        ADD CONSTRAINT customer_name_check 
        CHECK (LENGTH(customer_name) >= 2 AND customer_name ~ '^[A-Za-z0-9]+$' AND customer_name ~ '[A-Za-z]');
  
        ALTER TABLE customer 
        ADD CONSTRAINT email_format_check 
        CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$');
  
        ALTER TABLE customer 
        ADD CONSTRAINT phone_check 
        CHECK (phone ~ '^[0-9]{10}$');
  
        ALTER TABLE admin 
        ADD CONSTRAINT check_title CHECK (title IN ('Admin', 'Super Admin'));
  
        -- Add foreign key constraints to review table
        ALTER TABLE review
        ADD CONSTRAINT fk_review_customer FOREIGN KEY (customer_id) REFERENCES customer (customer_id) ON DELETE CASCADE;
  
        ALTER TABLE review
        ADD CONSTRAINT fk_review_product FOREIGN KEY (product_id) REFERENCES product (product_id) ON DELETE CASCADE;
  
        -- Add CHECK constraint for review.rating to ensure it's between 1 and 5
        ALTER TABLE review
        ADD CONSTRAINT check_review_rating CHECK (rating >= 1 AND rating <= 5);
  
        -- Add foreign key constraint to address table
        ALTER TABLE address
        ADD CONSTRAINT fk_customer_address FOREIGN KEY (customer_id) REFERENCES customer (customer_id) ON DELETE CASCADE;
  
        -- Add foreign key constraints to orders table
        ALTER TABLE orders
        ADD CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id) REFERENCES customer (customer_id);
  
        ALTER TABLE orders
        ADD CONSTRAINT fk_orders_address FOREIGN KEY (address_id) REFERENCES address (id);
  
        -- Add foreign key constraints to orders_detail table
        ALTER TABLE orders_detail
        ADD CONSTRAINT fk_orders_detail_order FOREIGN KEY (order_id) REFERENCES orders (id);
  
        ALTER TABLE orders_detail
        ADD CONSTRAINT fk_orders_detail_product FOREIGN KEY (product_id) REFERENCES product (product_id);
  
        -- Add unique constraint to ensure only one default address per customer
        CREATE UNIQUE INDEX unique_default_address ON address (customer_id) WHERE is_default = TRUE;
      `);
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .raw(`
        DROP TRIGGER IF EXISTS set_total_tax_based_on_province ON orders;
        DROP FUNCTION IF EXISTS calculate_tax_based_on_province;
  
        DROP TABLE IF EXISTS orders_detail CASCADE;
        DROP TABLE IF EXISTS review CASCADE;
        DROP TABLE IF EXISTS address CASCADE;
        DROP TABLE IF EXISTS orders CASCADE;
        DROP TABLE IF EXISTS product CASCADE;
        DROP TABLE IF EXISTS category CASCADE;
        DROP TABLE IF EXISTS admin CASCADE;
        DROP TABLE IF EXISTS customer CASCADE;
  
        DROP INDEX IF EXISTS unique_default_address;
      `);
  };