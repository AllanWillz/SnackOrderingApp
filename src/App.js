// src/App.js
import React, { useState } from 'react';
import { FaTrash, FaTimes } from 'react-icons/fa'; // Import the FaTimes cancel icon
import './App.css'; 
import odysseyLogoImage from "../src/images/Odyssey-b-logo.png";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [showMoreMembers, setShowMoreMembers] = useState(false);

  const snacks = [
    { id: 1, name: 'Snack 1', price: 200 },
    { id: 2, name: 'Snack 2', price: 100 },
    { id: 3, name: 'Snack 3', price: 500 },
  ];

  const members = [
    { id: 1, name: 'Member 1' },
    { id: 2, name: 'Member 2' },
    { id: 3, name: 'Member 3' },
  ];

  const additionalMembers = [
    { id: 4, name: 'Additional Member 1' },
    { id: 5, name: 'Additional Member 2' },
  ];

  const handleOrder = (snack) => {
    const existingOrder = orders.find((order) => order.id === snack.id);

    if (existingOrder) {
      setOrders(
        orders.map((order) =>
          order.id === snack.id ? { ...order, quantity: order.quantity + 1 } : order
        )
      );
    } else {
      setOrders([...orders, { ...snack, quantity: 1 }]);
    }
  };

  const handleRemove = (snackId) => {
    setOrders(orders.filter((order) => order.id !== snackId));
  };

  const handleToggleMembers = () => {
    setShowMoreMembers(!showMoreMembers);
  };

  return (
    <div className="container">
      {/* ODYSSEY LOGO */}
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="company-info d-flex align-items-center">
            <img src={odysseyLogoImage} alt="Company Logo" className="company-logo" />
          </div>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-danger">Logout</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-2">
          <h3>Orders</h3>
          {orders.map((order) => (
            <div key={order.id} className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <img src={`path/to/${order.name}.jpg`} alt={order.name} className="rounded-circle mr-2" />
                {order.name} (Qty: {order.quantity})
              </div>
              <button className="btn btn-danger" onClick={() => handleRemove(order.id)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className="col-md-1 border-end"></div>

        <div className="col-md-5">
          <h3 className='text-center'>Snacks List</h3>
          {snacks.map((snack) => (
            <div key={snack.id} className="card mb-3 shadow">
              <img src={`path/to/${snack.name}.jpg`} alt={snack.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{snack.name}</h5>
                <p className="card-text">Price: ${snack.price}</p>
                <button className="btn btn-success mr-2" onClick={() => handleOrder(snack)}>
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4 text-center align-items-center">
          <h3>PROFILE</h3>
          <div className="profile-container shadow rounded text-center" style={{ marginLeft: '50px' }}>
            <h4 className="mb-3">Person</h4>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-circle mb-3"
            />
            <p>Name: Allan K</p>
            <button className="btn btn-primary mb-3">Edit Profile</button>
          </div>
          <h4 className="mt-4">Members</h4>
          {members.map((member) => (
            <div key={member.id} className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <img
                  src="https://via.placeholder.com/40"
                  alt={member.name}
                  className="rounded-circle mr-2"
                />
                {member.name}
              </div>
              <button className="btn btn-danger">Remove</button>
            </div>
          ))}
          <button className="btn btn-link" onClick={handleToggleMembers}>
            {showMoreMembers ? <FaTimes /> : 'See More'}
          </button>
        </div>
      </div>

      {showMoreMembers && (
        <div className="overlay-container">
          <div className="overlay-content">
            <button className="btn btn-link float-end" onClick={handleToggleMembers}>
              <FaTimes />
            </button>
            <h3>Additional Members</h3>
            {additionalMembers.map((member) => (
              <div
                key={member.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <img
                    src="https://via.placeholder.com/40"
                    alt={member.name}
                    className="rounded-circle mr-2"
                  />
                  {member.name}
                </div>
                <button className="btn btn-danger">Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
