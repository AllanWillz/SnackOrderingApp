import React from 'react';
import { FaTrash } from 'react-icons/fa';

const OrdersPage = ({ orders, handleRemove }) => {
  const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  return (
    <div className="col-md-9" style={{ minHeight: '100vh'}}>
      <h3>ORDERS</h3>
      {orders.map((order) => (
        <div key={order.id} className="card mb-3 shadow">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={`.${order.image}`}
                alt={order.name}
                className="rounded-circle me-3 order-image"
                style={{ width: '90px', height: '90px' }}
              />
              <div>
                <p className="mb-0">Name: {order.name}</p>
                <p className="mb-0">Price: Shs. {order.price}</p>
                <p className="mb-0">Quantity: {order.quantity}</p>
              </div>
            </div>
            <button className="btn btn-danger" onClick={() => handleRemove(order.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      
      {orders.length > 0 && (
        <div className="card mb-3 shadow">
          <div className="card-body d-flex justify-content-between align-items-center">
            <p className="mb-0 font-weight-bold">Total Amount:</p>
            <p className="mb-0">Shs. {totalAmount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
