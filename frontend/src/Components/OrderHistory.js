import React, { useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Kunta Kinte', email: 'kunta@gmail.com', gender: 'Male', date: '2022-01-22', debt: 500 },
    { id: 2, name: 'Spiderman', email: 'spiderma@gmail.com', gender: 'Male', date: '2022-01-23', debt: 300 },
    { id: 3, name: 'Ras-al-ghul', email: 'Ras@gmail.com', gender: 'Male', date: '2022-01-22', debt: 800 },
    { id: 4, name: 'Engneer', email: 'Engneer@gmail.com', gender: 'Female', date: '2022-01-23', debt: 6000 },
    { id: 5, name: 'Sharon O', email: 'sharon@gmail.com', gender: 'Female', date: '2022-01-22', debt: 900 },
    { id: 6, name: 'Daniel C', email: 'dan@gmail.com', gender: 'Male', date: '2022-01-23', debt: 900 },
    { id: 7, name: 'Shabba Ranks ', email: 'shaban@gmail.com', gender: 'Male', date: '2022-01-22', debt: 500 },
    { id: 8, name: 'Peter', email: 'peter@gmail.com', gender: 'Female', date: '2022-01-23', debt: 3000 },
    { id: 9, name: 'Paul', email: 'paul@gmail.com', gender: 'Male', date: '2022-01-22', debt: 200 },
    { id: 10, name: 'Boogie', email: 'boogie@gmail.com', gender: 'Male', date: '2022-01-23', debt: 1000 },
    { id: 11, name: 'Emma', email: 'emma@gmail.com', gender: 'Male', date: '2022-01-22', debt: 100 },
    { id: 12, name: 'Timo', email: 'timo@gmail.com', gender: 'Female', date: '2022-01-23', debt: 400 },
  ]);

  const handleDeleteOrder = (orderId) => {
    const orderIndex = orders.findIndex((order) => order.id === orderId);

    if (orderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders.splice(orderIndex, 1);
      setOrders(updatedOrders);
      console.log(`Order with ID ${orderId} deleted`);
    }
  };

  return (
    <div className="col-md-9">
      <h1>Order History Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Order</th>
            <th>Debt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <img
                  src={`https://via.placeholder.com/40?text=${order.name.charAt(0)}`}
                  alt={order.name}
                  className="rounded-circle"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
              </td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.gender}</td>
              <td>{order.date}</td>
              <td>Shs.{order.debt}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;