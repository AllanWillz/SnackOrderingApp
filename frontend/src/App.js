// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { IoMdNotifications } from 'react-icons/io';
// import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import odysseyLogoImage from "../src/images/odyssey.png";
// import Login from '../src/Login';
// import OrdersPage from './Components/OrdersPage';
// import OrderHistory from './Components/OrderHistory';
// import ProductManagement from './Components/ProductManagement';
// import FinancialTracking from './Components/FinancialTracking';
// import Debt from './Components/Debts';
// import Status from './Components/Status';
// import AddSnackForm from './Components/AddSnackForm'; 
// import './App.css';

// import image1 from '../src/images/Samosa.jpg';
// import image2 from '../src/images/Cassava.jpg';
// import image3 from '../src/images/Chapati.jpg';
// import image4 from '../src/images/Samosa 2.jpg';

// const Home = ({ snacks, handleOrder, handleAddSnack, handleRemove, showMoreMembers, handleToggleMembers, members }) => (
//   <>
//     <SnacksList className="overflow-auto" snacks={snacks} handleOrder={handleOrder} handleAddSnack={handleAddSnack} handleRemove={handleRemove} />
//     <ProfileSection showMoreMembers={showMoreMembers} handleToggleMembers={handleToggleMembers} members={members} />
//     <AdditionalMembersOverlay showMoreMembers={showMoreMembers} handleToggleMembers={handleToggleMembers} additionalMembers={members} />
//   </>
// );

// const SnackCard = ({ snack, handleOrder, handleRemove }) => (
//   <div key={snack.id} className="card mb-3 shadow">
//     <img src={snack.image} alt={snack.name} className="card-img-top" />
//     <div className="card-body">
//       <h5 className="card-title">{snack.name}</h5>
//       <p className="card-text">Price: ${snack.price}</p>
//       <button className="btn btn-success mr-2" onClick={() => handleOrder(snack)}>
//         Order
//       </button>
//       <button className="btn btn-danger" onClick={() => handleRemove(snack.id)}>
//         Delete
//       </button>
//     </div>
//   </div>
// );

// const SnacksList = ({ snacks, handleOrder, handleAddSnack, handleRemove }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredSnacks = snacks.filter((snack) =>
//     snack && snack.name && snack.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="col-md-5 mt-3 scroll-container d-block justify-content-center">
//       <div className="d-flex justify-content-center mb-3" style={{ width: 350 }}>
//         <input
//           type="text"
//           placeholder="Search Snack"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <h3>Snack List</h3>
//       <div className="d-flex justify-content-end mb-3">
//         <button className="btn btn-primary" onClick={handleAddSnack}>
//           Add Snack
//         </button>
//       </div>
//       {filteredSnacks.map((snack) => (
//         <SnackCard key={snack.id} snack={snack} handleOrder={handleOrder} handleRemove={handleRemove} />
//       ))}
//     </div>
//   );
// };


// const ProfileSection = ({ showMoreMembers, handleToggleMembers, members }) => (
//   <div className="col-md-4 text-center align-items-center ">
//     <h3>PROFILE</h3>
//     <div className="profile-container shadow rounded text-center" style={{ marginLeft: '50px' }}>
//       <h4 className="mb-3">Person</h4>
//       <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-circle mb-3" />
//       <p>Name: Allan K</p>
//       <Link to="/edit-profile">
//         <button className="btn btn-primary mb-3">Edit Profile</button>
//       </Link>
//     </div>

//     <h4 className="mt-4">Members</h4>
//     {members.map((member) => (
//       <div key={member.id} className="d-flex justify-content-between align-items-center mb-2">
//         <div>
//           <img src="https://via.placeholder.com/40" alt={member.name} className="rounded-circle mr-2" />
//           {member.name}
//         </div>
//         <button className="btn btn-light">Remove</button>
//       </div>
//     ))}
//     <button className="btn btn-link" onClick={handleToggleMembers}>
//       {showMoreMembers ? <FaTimes /> : 'See More'}
//     </button>
//     <IoMdNotifications size={24} style={{ marginLeft: '10px', cursor: 'pointer' }} />
//   </div>
// );

// const AdditionalMembersOverlay = ({ showMoreMembers, handleToggleMembers, additionalMembers }) => (
//   showMoreMembers && (
//     <div className="overlay-container">
//       <div className="overlay-content">
//         <button className="btn btn-link float-end" onClick={handleToggleMembers}>
//           <FaTimes />
//         </button>
//         <h3>Additional Members</h3>
//         {additionalMembers.map((member) => (
//           <div key={member.id} className="d-flex justify-content-between align-items-center mb-2">
//             <div>
//               <img src="https://via.placeholder.com/40" alt={member.name} className="rounded-circle mr-2" />
//               {member.name}
//             </div>
//             <button className="btn  btn-light">Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// );

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [totalItemsInOrders, setTotalItemsInOrders] = useState(0);
//   const [showMoreMembers, setShowMoreMembers] = useState(false);
//   const [showAddSnackForm, setShowAddSnackForm] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('Orders');
//   // const [darkMode, setDarkMode] = useState(false);
//   const [snacks, setSnacks] = useState([
//     { id: 1, image: image1, name: 'Snack 1', price: 200 },
//     { id: 2, image: image2, name: 'Snack 2', price: 100 },
//     { id: 3, image: image3, name: 'Snack 3', price: 500 },
//     { id: 4, image: image4, name: 'Snack 3', price: 200 },
//   ]);

//   const members = [
//     { id: 1, name: 'Member 1' },
//     { id: 2, name: 'Member 2' },
//     { id: 3, name: 'Member 3' },
//   ];

//   const isAdmin = user === 'admin';

//   const handleOrder = (snack) => {
//     const existingOrder = orders.find((order) => order.id === snack.id);

//     if (existingOrder) {
//       setOrders(
//         orders.map((order) =>
//           order.id === snack.id ? { ...order, quantity: order.quantity + 1 } : order
//         )
//       );
//     } else {
//       setOrders([...orders, { ...snack, quantity: 1 }]);
//     }

//     setTotalItemsInOrders((prevTotal) => prevTotal + 1);
//   };

//   const handleRemove = (snackId) => {
//     setSnacks((prevSnacks) => prevSnacks.filter((snack) => snack.id !== snackId));
//     setOrders(orders.filter((order) => order.id !== snackId));
//     setTotalItemsInOrders((prevTotal) => Math.max(prevTotal - 1, 0));
//   };

//   const handleToggleMembers = () => {
//     setShowMoreMembers(!showMoreMembers);
//   };

//   const handleLogin = (username) => {
//     setUser(username);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu);
//   };

//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   // };

//   const handleAddSnack = (newSnack) => {
//     setSnacks((prevSnacks) => [
//       ...prevSnacks,
//       { id: prevSnacks.length + 1, ...newSnack },
//     ]);
//     setShowAddSnackForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowAddSnackForm(false);
//   };

//   return (
//     <Router>
//       <div className='container-fluid '>
//         {user ? (
//           <>
//             <div className="row mt-0 nav position-sticky " style={{ height: 90, background: '#C6CBD0', top: 0, zIndex: 100 }}>
//               <div className="col-md-6">
//                 <div className="company-info d-flex align-items-center">
//                   <Link to="/" className="navbar-brand">
//                     <img src={odysseyLogoImage} alt="Company Logo" className="company-logo" style={{ width: 200 }} />
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-md-6 text-end">
//                 <IoMdNotifications size={24} style={{ marginRight: '40px', cursor: 'pointer', color: 'blue' }} />
//                 <button className="btn btn-danger" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//             </div>
            
//             <div className="row mt-0 " >
//               <div className="col-md-2 mt-0"  style={{ background: '#FF8C00', }}>
//                 <div className='mt-4' style={{ height: 70 }}></div>
//                 <h3>Dashboard</h3>
                
//                 <div style={{ background: '#FF8C00', }}></div>
//                 <ul className="list-group">
//                   <li key='Home' className={`list-group-item ${activeMenu === 'Home' ? 'active' : ''}`} onClick={() => handleMenuClick('Home')}>
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li key='Orders' className={`list-group-item ${activeMenu === 'Orders' ? 'active' : ''}`} onClick={() => handleMenuClick('Orders')}>
//                     <Link to="/orders">
//                       Orders {totalItemsInOrders > 0 && <span className="badge bg-secondary">{totalItemsInOrders}</span>}
//                     </Link>
//                   </li>
//                   <li key='Order History' className={`list-group-item ${activeMenu === 'Order History' ? 'active' : ''}`} onClick={() => handleMenuClick('Order History')}>
//                     <Link to="/order-history">Order History</Link>
//                   </li>
//                   <li key='Product Management' className={`list-group-item ${activeMenu === 'Product Management' ? 'active' : ''}`} onClick={() => handleMenuClick('Product Management')}>
//                     <Link to="/product-management">Product Management</Link>
//                   </li>
//                   {isAdmin && (
//                     <>
//                       <li key='Financial Tracking' className={`list-group-item ${activeMenu === 'Financial Tracking' ? 'active' : ''}`} onClick={() => handleMenuClick('Financial Tracking')}>
//                         <Link to="/financial-tracking">Financial Tracking</Link>
//                       </li>
//                       <li key='Status' className={`list-group-item ${activeMenu === 'Status' ? 'active' : ''}`} onClick={() => handleMenuClick('Status')}>
//                         <Link to="/status">Status</Link>
//                       </li>
//                     </>
//                   )}
//                   <li key='Debt' className={`list-group-item ${activeMenu === 'Debt' ? 'active' : ''}`} onClick={() => handleMenuClick('Debt')}>
//                     <Link to="/debt">Debt</Link>
//                   </li>
//                 </ul>
//                 {/* <button className="btn btn-primary mt-3" onClick={toggleDarkMode}>
//                   Toggle Theme
//                 </button> */}
//               </div>

//               <div className="col-md-1 border-end mt-0" style={{ background: '#FF8C00', }}></div>

//               <Routes>
//                 <Route path="/" element={<Home snacks={snacks} handleOrder={handleOrder} handleAddSnack={handleAddSnack} showMoreMembers={showMoreMembers} handleToggleMembers={handleToggleMembers} members={members} />} />
//                 <Route path="/orders" element={<OrdersPage orders={orders} handleRemove={handleRemove} />} />
//                 <Route path="/order-history" element={<OrderHistory />} />
//                 <Route path="/product-management" element={<ProductManagement />} />
//                 {isAdmin && (
//                   <>
//                     <Route path="/financial-tracking" element={<FinancialTracking />} />
//                     <Route path="/status" element={<Status />} />
//                   </>
//                 )}
//                 <Route path="/debt" element={<Debt />} />
//                 <Route path="/add-snack" element={<AddSnackForm handleAddSnack={handleAddSnack} handleCloseForm={handleCloseForm} />} />
//               </Routes>
//             </div>

//             {showAddSnackForm && (
//               <div className="overlay-container">
//                 <div className="overlay-content">
//                   <button className="btn btn-link float-end" onClick={handleCloseForm}>
//                     <FaTimes />
//                   </button>
//                   <h3>Add Snack</h3>
//                   <AddSnackForm handleAddSnack={handleAddSnack} handleCloseForm={handleCloseForm} />
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//           <Login onLogin={handleLogin} />
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;



import React, { useState } from 'react';
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



import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import odysseyLogoImage from "../src/images/odyssey.png";
import Login from '../src/Login';
import OrdersPage from './Components/OrdersPage';
import OrderHistory from './Components/OrderHistory';
import ProductManagement from './Components/ProductManagement';
import FinancialTracking from './Components/FinancialTracking';
import Debt from './Components/Debts';
import Status from './Components/Status';
import AddSnackForm from './Components/AddSnackForm';
import './App.css';

import image1 from '../src/images/Samosa.jpg';
import image2 from '../src/images/Cassava.jpg';
import image3 from '../src/images/Chapati.jpg';
import image4 from '../src/images/Samosa 2.jpg';


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
    <div className="col-md-4 mt-4 scroll-container ">
      <div className="d-flex justify-content-center mb-3">
  <div className="input-group">
    {/* <div className="input-group-propend"> */}
      <span className="input-group-text">
        <FcSearch style={{ height: 30, width: 20 }} />
      </span>
    {/* </div> */}
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

const ProfileSection = ({ showMoreMembers, handleToggleMembers, members }) => (
  <div className="col-md-4 big-profile-container text-center mt-5 pt-4 align-items-center " style={{ background: "#FFF" }}>
    <h3>PROFILE</h3>
    <div className="profile-container shadow rounded text-center" style={{ marginLeft: '50px' }}>
      <h4 className="mb-3">Person</h4>
      <img src='https://images.pexels.com/photos/19056307/pexels-photo-19056307/free-photo-of-portrait-of-a-girl.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Profile" className="rounded-circle mb-3 " style={{height: 200, width: 200}}  />
      <p>Name: Susan N</p>
      <Link to="/edit-profile">
        <button className="btn btn-primary mb-3">Edit Profile</button>
      </Link>
    </div>

    <h4 className="mt-4">Members</h4>
    {members.map((member) => (
      <div key={member.id} className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <img src="https://via.placeholder.com/40" alt={member.name} className="rounded-circle mr-2" />
          {member.name}
        </div>
        <button className="btn btn-light">Remove</button>
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
  const [orders, setOrders] = useState([]);
  const [totalItemsInOrders, setTotalItemsInOrders] = useState(0);
  const [showMoreMembers, setShowMoreMembers] = useState(false);
  const [showAddSnackForm, setShowAddSnackForm] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Orders');
  const [snacks, setSnacks] = useState([
    { id: 1, image: image1, name: 'Samosa', price: 200 },
    { id: 2, image: image2, name: 'Cassava', price: 100 },
    { id: 3, image: image3, name: 'Chapati', price: 500 },
    { id: 4, image: image4, name: 'Samosas', price: 200 },
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
    setSnacks((prevSnacks) => prevSnacks.filter((snack) => snack.id !== snackId));
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

            <div className="row mt-0 " >
              <div className="col-md-1 mt-0"  style={{ background: '#FF8C00',  paddingLeft: '40px', width: 350 }}>
                <div className='mt-4' style={{ height: 70, }}></div>
                <h3>Dashboard</h3>

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
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;

