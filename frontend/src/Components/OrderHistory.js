import React, { useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Kunta Kinte', order: 'Cassava', email: 'kunta@gmail.com', gender: 'Male', date: '2022-01-22', debt: 500, img: 'https://ca.slack-edge.com/T011H66DJCE-U06H64LU6AH-44ccf79aa2d4-48' },
    { id: 2, name: 'Spiderman', order: 'Samosa', email: 'spiderma@gmail.com', gender: 'Male', date: '2022-01-23', debt: 300, img: 'https://ca.slack-edge.com/T03CCPZ3W2K-U045TCX40HZ-e7ae468a5692-48' },
    { id: 3, name: 'Ras-al-ghul', order: 'Sausage', email: 'Ras@gmail.com', gender: 'Male', date: '2022-01-22', debt: 800, img: 'https://ca.slack-edge.com/T03CCPZ3W2K-U045CUCTW7R-e85bf76510ca-48' },
    { id: 4, name: 'Engneer', order: 'Milk', email: 'Engneer@gmail.com', gender: 'Female', date: '2022-01-23', debt: 6000, img: 'https://ca.slack-edge.com/T03CCPZ3W2K-U0456UNGDSP-2715f2646101-48' },
    { id: 5, name: 'Sharon O', order: 'Banana', email: 'sharon@gmail.com', gender: 'Female', date: '2022-01-22', debt: 900, img: 'https://ca.slack-edge.com/T03CCPZ3W2K-U045LSRG9DL-7124b8a7ab4e-48' },
    { id: 6, name: 'Daniel C', order: 'Half Cakes', email: 'dan@gmail.com', gender: 'Male', date: '2022-01-23', debt: 900, img: 'https://ca.slack-edge.com/T03CCPZ3W2K-U04HMCZD6QK-5b8ec0d34583-48' },
    { id: 7, name: 'Shabba Ranks ', order: 'Eggs', email: 'shaban@gmail.com', gender: 'Male', date: '2022-01-22', debt: 500, img: 'https://ca.slack-edge.com/T011H66DJCE-U06509ZKBGX-c9579eae8c03-48' },
    { id: 8, name: 'Peter', order: 'Samosa', email: 'peter@gmail.com', gender: 'Female', date: '2022-01-23', debt: 3000, img: 'https://ca.slack-edge.com/T011H66DJCE-U01GQR9E9C6-d3642fb9ee49-48' },
    { id: 9, name: 'Paul', order: 'Rolex', email: 'paul@gmail.com', gender: 'Male', date: '2022-01-22', debt: 200, img: 'https://ca.slack-edge.com/T011H66DJCE-U065BTU0D8V-4e16670379f6-48' },
    { id: 10, name: 'Boogie', order: 'Chapati', email: 'boogie@gmail.com', gender: 'Male', date: '2022-01-23', debt: 1000, img: 'https://ca.slack-edge.com/T011H66DJCE-U014E7AF154-d5a63b7e923b-48' },
    { id: 11, name: 'Emma', order: 'PanCakes', email: 'emma@gmail.com', gender: 'Male', date: '2022-01-22', debt: 100, img: 'https://ca.slack-edge.com/T011H66DJCE-U041C5Y90SF-a221dbdd7e45-48' },
    { id: 12, name: 'Timo', order: 'Mandazi', email: 'timo@gmail.com', gender: 'Female', date: '2022-01-23', debt: 400, img: 'https://ca.slack-edge.com/T011H66DJCE-U014Z3KV1LH-3b1c572234fa-48' },
    { id: 12, name: 'Douglas', order: 'Milk', email: 'douglas@gmail.com', gender: 'Male', date: '2022-01-23', debt: 700, img: 'https://ca.slack-edge.com/T011H66DJCE-U02CGRJJAAK-1988a54d2a1b-48' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeleteOrder = (orderId) => {
    const orderIndex = orders.findIndex((order) => order.id === orderId);

    if (orderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders.splice(orderIndex, 1);
      setOrders(updatedOrders);
      console.log(`Order with ID ${orderId} deleted`);
    }
  };

  const filteredOrders = orders.filter(order => 
    order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="col-md-9" style={{ minHeight: '100vh'}}>
      <h1>Order History Page</h1>
      <div className="d-flex justify-content-end mb-3">
        <input 
          type="text" 
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control mr-2"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Photo</th>
            <th>Name</th>
            <th>Order</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Order</th>
            <th>Debt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <img
                  src={order.img}
                  alt={order.name}
                  className="rounded-circle"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
              </td>
              <td>{order.name}</td>
              <td>{order.order}</td>
              <td>{order.email}</td>
              <td>{order.gender}</td>
              <td>{order.date}</td>
              <td>Shs.{order.debt}</td>
              <td>
                <button
                  className="btn historyDeleteBtn btn-danger"
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
