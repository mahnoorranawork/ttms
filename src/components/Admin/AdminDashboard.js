// src/components/Admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [clothOrders, setClothOrders] = useState([]);

  useEffect(() => {
    // Fetch and display cloth orders awaiting approval
    // You may need to implement a backend and use a service like Axios for this.
  }, []);

  const approveOrder = (orderId) => {
    // Implement logic to approve a cloth order
    // Update the 'clothOrders' state accordingly
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {clothOrders.map((order) => (
          <li key={order.id}>
            {order.userName} - {order.productName} - ${order.price}
            <button onClick={() => approveOrder(order.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
