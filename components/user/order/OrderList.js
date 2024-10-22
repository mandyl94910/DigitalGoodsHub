import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';
import axios from 'axios';
  
/**
 * Helped with chatGPT
 * Filter orders according to the activeTab value
 * If there are orders under a specific tab it will pass the orders to OrderCard to display
 * Otherwise it will inform users that "No orders found."
 */
const OrderList = ( {activeTab, orders, customerId } ) => {

  const filteredOrders = orders.filter(order => {
      if (activeTab === 'allOrders') return true;
      if (activeTab === 'shipped') return order.status === 'shipped';
      if (activeTab === 'completed') return order.status === 'completed';
      if (activeTab === 'cancelled') return order.status === 'cancelled';
  });

  return (
    <div className="container ml-4 py-4 px-6">
      {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
                <OrderCard key={index} order={order} customerId={customerId}/>
              ))
      ) : (
        <p>No orders found.</p>
      )}
    
    </div>
  );
};

export default OrderList;
