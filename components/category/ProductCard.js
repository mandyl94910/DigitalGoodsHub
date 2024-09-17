// Import Next.js Link component and React's useEffect hook
import Link from 'next/link';
import React, { useEffect } from 'react';

// Define the ProductCard component that takes a product object as a prop
export default function ProductCard({ product }) {
    // Log product information when the component mounts or the product data changes
    useEffect(() => {
        console.log('Product Data:', product);
        console.log('Image Path:', `/images/${product.image}`);
    }, [product]);

    // Render the product card with an image and details
    return (
        <div className="w-56 h-auto border rounded-lg shadow-md p-4">
            {/* Link to the product detail page using product ID */}
            <Link href={`/product/${product.product_id}`}>
                <img
                    src={`/images/${product.image}`}  // Construct the path to the image in the public directory
                    alt={product.product_name}  // Use the product name as alt text for the image
                    className="w-48 h-48 object-cover mb-4"
                    onError={(e) => {
                        console.log('Image failed to load:', `/images/${product.image}`);
                        e.target.style.display = 'none';  // Hide the image if it fails to load
                    }}
                />
                <h3 className="text-lg font-bold mb-2">{product.product_name}</h3>  
                <p className="text-gray-700">${product.price}</p>  
            </Link>
        </div>
    );
};