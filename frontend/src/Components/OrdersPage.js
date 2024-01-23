
import React from 'react';
import { FaTrash } from 'react-icons/fa';



const OrdersPage = ({ orders, handleRemove }) => (
  <div className="col-md-9">
    <h3>ORDERS</h3>
    {orders.map((order) => (
      <div key={order.id} className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <img src={`.${order.name}`} alt={order.name} className="rounded-circle mr-2" />
          {order.name} (Qty: {order.quantity})
        </div>
        <button className="btn btn-danger" onClick={() => handleRemove(order.id)}>
          <FaTrash />
        </button>
      </div>
    ))}
  </div>
);

export default OrdersPage;
