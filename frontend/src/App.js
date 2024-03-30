import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Login from './Login';
import OrdersPage from './Components/OrdersPage';
import OrderHistory from './Components/OrderHistory';
import ProductManagement from './Components/ProductManagement';
import FinancialTracking from './Components/FinancialTracking';
import Debt from './Components/Debts';
import Status from './Components/Status';
import AddSnackForm from './Components/AddSnackForm';
import ConfirmationPopup from './Components/ConfirmationPopup';
import './App.css';

import odysseyLogoImage from "../src/images/odyssey.png";
import image1 from '../src/images/Samosa.jpg';
import image2 from '../src/images/Cassava.jpg';
// import image3 from '../src/images/Chapati.jpg';
// import image4 from '../src/images/Samosa 2.jpg';
// import image5 from '../src/images/Samosa 2.jpg';
// import image6 from '../src/images/Samosa 2.jpg';
// import image7 from '../src/images/Samosa 2.jpg';
// import image8 from '../src/images/Samosa 2.jpg';

import { FaTimes } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { CgMenuGridR } from "react-icons/cg";
import { MdWorkHistory } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FcDebt } from "react-icons/fc";
import { GrStatusUnknown } from "react-icons/gr";
import { FcSearch } from "react-icons/fc";

const Home = ({ snacks, handleOrder, handleAddSnack, handleRemove, handleRemoveSnack, showMoreMembers, handleToggleMembers, members }) => (
  <>
    <SnacksList className="overflow-auto" snacks={snacks} handleOrder={handleOrder} handleAddSnack={handleAddSnack} handleRemoveSnack={handleRemoveSnack} />
    <ProfileSection showMoreMembers={showMoreMembers} handleToggleMembers={handleToggleMembers} members={members} />
    <AdditionalMembersOverlay showMoreMembers={showMoreMembers} handleToggleMembers={handleToggleMembers} additionalMembers={members} />
  </>
);

const SnackCard = ({ snack, handleOrder, handleRemoveSnack }) => (
  <div key={snack.id} className="card mb-3 shadow" style={{ maxWidth: '300px' }}>
    <img src={snack.image} alt={snack.name} className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
    <div className="card-body">
      <h5 className="card-title">{snack.name}</h5>
      <p className="card-text">Price:  each Shs.{snack.price}</p>
      <div className="d-flex justify-content-between">
        <button className="btn orderBtn" onClick={() => handleOrder(snack)}>
          Order
        </button>
        <button className="btn  deleteBtn" onClick={() => handleRemoveSnack(snack.id)}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

const SnacksList = ({ snacks, handleOrder, handleAddSnack, handleRemoveSnack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSnacks = snacks.filter(
    (snack) =>
      snack &&
      snack.name &&
      snack.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
// SNACK LIST COLUMN

    <div className="col-md-4 mt-4 snack-list-positioning scroll-container ">
      <div className="d-flex justify-content-center mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <FcSearch style={{ height: 30, width: 20 }} />
          </span>
          <input
            type="text"
            placeholder="Search Snack"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <h3>Snack List</h3>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={handleAddSnack}>
          Add Snack
        </button>
      </div>

      <div className="row">
        {filteredSnacks.map((snack) => (
          <div key={snack.id} className="col-md-6 mb-3">
            <SnackCard
              snack={snack}
              handleOrder={handleOrder}
              handleRemoveSnack={handleRemoveSnack}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

 //PROFILE COLUMN

const ProfileSection = ({ showMoreMembers, handleToggleMembers, members }) => (
  <div className="col-md-4 big-profile-container profile-positioning text-center mt-0 pt-4 align-items-center ">
    <h3 style={{color: '#fff'}}>PROFILE</h3>
    <div className="profile-container shadow rounded text-center" style={{ marginLeft: '50px',  }}>
      <h4 className="mb-3">Person</h4>
      <img src='https://images.pexels.com/photos/19056307/pexels-photo-19056307/free-photo-of-portrait-of-a-girl.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Profile" className="rounded-circle mb-3 " style={{height: 200, width: 200}}  />
      <p>Name: Susan N</p>
      <Link to="/edit-profile">
        <button className="btn btn-primary mb-3">Edit Profile</button>
      </Link>
    </div>

    <h4 className="mt-5" style={{color: '#fff'}}>Members</h4>
    {members.map((member) => (
      <div key={member.id} className="d-flex justify-content-between align-items-center container mb-2 members-container">
        <div>
          <img src="https://via.placeholder.com/40" alt={member.name} className="rounded-circle mr-2" />
          {member.name}
        </div>
        <button className="btn btnRemove">Remove</button>
      </div>
    ))}
    <button className="btn btn-link" onClick={handleToggleMembers}>
      {showMoreMembers ? <FaTimes /> : 'See More'}
    </button>
    <IoMdNotifications size={24} style={{ marginLeft: '10px', cursor: 'pointer' }} />
  </div>
);

const AdditionalMembersOverlay = ({ showMoreMembers, handleToggleMembers, additionalMembers }) => (
  showMoreMembers && (
    <div className="overlay-container">
      <div className="overlay-content">
        <button className="btn btn-link float-end" onClick={handleToggleMembers}>
          <FaTimes />
        </button>
        <h3>Additional Members</h3>
        {additionalMembers.map((member) => (
          <div key={member.id} className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <img src="https://via.placeholder.com/40" alt={member.name} className="rounded-circle mr-2" />
              {member.name}
            </div>
            <button className="btn  btn-light">Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
);

const App = () => {
  const [user, setUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orders, setOrders] = useState([]);
  const [totalItemsInOrders, setTotalItemsInOrders] = useState(0);
  const [showMoreMembers, setShowMoreMembers] = useState(false);
  const [showAddSnackForm, setShowAddSnackForm] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Orders');

  const [snacks, setSnacks] = useState([
    { id: 1, image: image1, name: 'Samosa', price: 200 },
    { id: 2, image: image2, name: 'Cassava', price: 100 }, 
    { id: 5, image: 'https://media.istockphoto.com/id/496700274/photo/grilled-sausage-with-garlic-and-onions.jpg?s=612x612&w=0&k=20&c=j9lzghTPbD0WiMNgWEmw0-oFj-2E7JxgHGvkIioLSg8=', name: 'Sausage', price: 500 },
    { id: 6, image: 'https://i.ytimg.com/vi/jdOIK7HDS8U/hqdefault.jpg', name: 'Halfcakes', price: 200 },
    { id: 7, image: 'https://media.istockphoto.com/id/518643735/photo/yellow-ripe-bananas-sliced.jpg?s=612x612&w=0&k=20&c=J_uttY0d9sJohrTKhax-PjEoqePWliPo3hHUvPd7FTA=', name: 'Bananas', price: 1000 },
    { id: 8, image: 'https://th.bing.com/th/id/R.bd173464572972fe6bce85a636528730?rik=b39vMvae31ROmA&pid=ImgRaw&r=0', name: 'Rolex', price: 1000 },
    { id: 9, image: 'https://cdn.pixabay.com/photo/2016/07/01/19/43/pretzels-1491789_640.jpg', name: 'Bread', price: 500 },
    { id: 3, image: 'https://th.bing.com/th/id/OIP.mab-brQLKqD08BKV7y5FigHaG9?pid=ImgDet&w=191&h=179&c=7', name: 'Chapati', price: 500 },
    { id: 4, image: 'https://media.istockphoto.com/id/1223592731/photo/hard-boiled-chicken-eggs-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=QKNMsiLvHi5hjN-wkKhbZIRvUb-RNgppEki8WF8dgyI=', name: 'Eggs', price: 200 },
    { id: 10, image: 'https://www.judykats.com/wp-content/uploads/2021/10/kabalagala-in-2-lines-768x960.jpg', name: 'Pancakes', price: 100 },
    { id: 11, image: 'https://i.ytimg.com/vi/wd_76InSOaQ/hqdefault.jpg', name: 'Mandazi', price: 500 },
    { id: 12, image: 'https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/58174/2.jpg?8652', name: 'Packed Milk', price: 500 },

  ]);

  const members = [
    { id: 1, name: 'Member 1' },
    { id: 2, name: 'Member 2' },
    { id: 3, name: 'Member 3' },
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

    setTotalItemsInOrders((prevTotal) => prevTotal + 1);
  };

  const handleRemove = (snackId) => {
    setOrders(orders.filter((order) => order.id !== snackId));
    setTotalItemsInOrders((prevTotal) => Math.max(prevTotal - 1, 0));
  };

  const handleRemoveSnack = (snackId) => {
    setShowConfirmation(true);  
  };

  const handleToggleMembers = () => {
    setShowMoreMembers(!showMoreMembers);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleAddSnack = (newSnack) => {
    setSnacks((prevSnacks) => [
      ...prevSnacks,
      { id: prevSnacks.length + 1, ...newSnack },
    ]);
    setShowAddSnackForm(true);
  };

  const handleCloseForm = () => {
    setShowAddSnackForm(false);
  };

  return (
    <Router>
      <div className='container-fluid '>
        {user ? (
          <>
            <div className="row mt-0 nav position-sticky " style={{ height: 90, background: '#C6CBD0', top: 0, zIndex: 100, paddingTop: 10 }}>
              <div className="col-md-6">
                <div className="company-info d-flex align-items-center">
                  <Link to="/" className="navbar-brand">
                    <img src={odysseyLogoImage} alt="Company Logo" className="company-logo" style={{ width: 200 }} />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-end" style={{ paddingTop: 10 }}>
                <IoMdNotifications size={24} style={{ marginRight: '40px', cursor: 'pointer', color: 'blue' }} />
                <button className="btn logoutBtn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>

            {/* MY SIDE BAR / DASHBOARD COLUMN */}

            <div className="row mt-0 dashboard-positioning" >
              <div className="col-md-1 mt-0"  style={{ background: '#FF8C00',  paddingLeft: '40px', width: 350 }}>
                <div className='mt-4' style={{ height: 70, }}></div>
                <h3 style={{color: '#fff'}}>Dashboard</h3>

                <ul className="list-group" >
                  <li key='Home' style={{ background: '#FF8C00', fontSize: 17 }} className={`list-group-item ${activeMenu === 'Home' ? 'active' : ''}`} onClick={() => handleMenuClick('Home')}>
                    <CgMenuGridR style={{ fontSize: 25 }} />
                    <Link className='lists' to="/" ><span >Menu</span></Link>
                  </li>
                  <li key='Orders' style={{ background: '#FF8C00', fontSize: 17 }} className={`list-group-item ${activeMenu === 'Orders' ? 'active' : ''}`} onClick={() => handleMenuClick('Orders')}>
                    <FaCartArrowDown style={{ fontSize: 25 }}/>
                     <Link className='lists'  to="/orders">
                      {totalItemsInOrders > 0 && <span className="badge bg-auto ">{totalItemsInOrders}</span>} Orders 
                    </Link>
                  </li>
                  <li key='Order History' style={{ background: '#FF8C00', fontSize: 17, padding: 15 }} className={`list-group-item ${activeMenu === 'Order History' ? 'active' : ''}`} onClick={() => handleMenuClick('Order History')}>
                    <MdWorkHistory style={{ fontSize: 25 }} />
                    <Link className='lists' to="/order-history">Order History</Link>
                  </li>
                  <li  key='Product Management' style={{ background: '#FF8C00', fontSize: 17, padding: 15 }} className={`list-group-item ${activeMenu === 'Product Management' ? 'active' : ''}`} onClick={() => handleMenuClick('Product Management')}>
                    <MdOutlineProductionQuantityLimits style={{ fontSize: 25 }}/>
                    <Link className='lists' to="/product-management" >Product Management</Link>
                  </li>
                  <>
                    <li key='Financial Tracking' style={{ background: '#FF8C00', fontSize: 17, padding: 15 }} className={`list-group-item ${activeMenu === 'Financial Tracking' ? 'active' : ''}`} onClick={() => handleMenuClick('Financial Tracking')}>
                      <FaMoneyBillAlt style={{ fontSize: 25 }}/>
                      <Link className='lists' to="/financial-tracking">Financial Tracking</Link>
                    </li>
                    <li key='Status' style={{ background: '#FF8C00', fontSize: 17, padding: 15 }} className={`list-group-item ${activeMenu === 'Status' ? 'active' : ''}`} onClick={() => handleMenuClick('Status')}>
                      <GrStatusUnknown style={{ fontSize: 25 }}/>
                      <Link className='lists' to="/status">Status</Link>
                    </li>
                  </>
                  <li key='Debt' style={{ background: '#FF8C00', fontSize:17, padding: 15 }} className={`list-group-item ${activeMenu === 'Debt' ? 'active' : ''}`} onClick={() => handleMenuClick('Debt')}>
                    <FcDebt style={{ fontSize: 30 }}/>
                    <Link className='lists' to="/debt">Debt</Link>
                  </li>
                </ul>
              </div>
              
              <Routes>
                <Route path="/" element={<Home
                  snacks={snacks}

                  handleOrder={handleOrder}
                  handleAddSnack={handleAddSnack}
                  handleRemove={handleRemove}
                  handleRemoveSnack={handleRemoveSnack}
                  showMoreMembers={showMoreMembers}
                  handleToggleMembers={handleToggleMembers}
                  members={members}
                />} />
                <Route path="/orders"  element={<OrdersPage orders={orders} handleRemove={handleRemove} />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/product-management" element={<ProductManagement />} />
                <>
                  <Route path="/financial-tracking" element={<FinancialTracking />} />
                  <Route path="/status" element={<Status />} />
                </>
                <Route path="/debt" element={<Debt />} />
                <Route path="/add-snack" element={<AddSnackForm handleAddSnack={handleAddSnack} handleCloseForm={handleCloseForm} />} />
              </Routes>
            </div>

            {showAddSnackForm && (
              <div className="overlay-container">
                <div className="overlay-content">
                  <button className="btn btn-link float-end" onClick={handleCloseForm}>
                    <FaTimes />
                  </button>
                  <h3>Add Snack</h3>
                  <AddSnackForm handleAddSnack={handleAddSnack} handleCloseForm={handleCloseForm} />
                </div>
              </div>
            )}

            {showConfirmation && (
              <ConfirmationPopup
                message="Are you sure you want to delete this snack?"
                onCancel={() => setShowConfirmation(false)}
                onConfirm={() => {
                  setShowConfirmation(false);
                }}
              />
            )}
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
