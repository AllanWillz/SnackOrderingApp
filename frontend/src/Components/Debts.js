import React, { useState } from 'react';

const Debt = () => {
  // Sample debts data
  const [searchQuery, setSearchQuery] = useState('');
  const debts = [
    { id: 1, name: 'Kunta Kinte', profile: 'https://via.placeholder.com/75', amount: 500, debtor: 'Spiderman', date: '2024-02-05', paid: false },
    { id: 2, name: 'Spiderman', profile: 'https://via.placeholder.com/75', amount: 300, debtor: 'Ras-al-ghul', date: '2024-02-06', paid: true },
    { id: 3, name: 'Ras-al-ghul', profile: 'https://via.placeholder.com/75', amount: 800, debtor: 'Engneer', date: '2024-02-04', paid: false },
    { id: 4, name: 'Engneer', profile: 'https://via.placeholder.com/75', amount: 6000, debtor: 'Sharon O', date: '2024-02-05', paid: false },
    { id: 5, name: 'Sharon O', profile: 'https://via.placeholder.com/75', amount: 900, debtor: 'Daniel C', date: '2024-02-06', paid: false },
    { id: 6, name: 'Daniel C', profile: 'https://via.placeholder.com/75', amount: 900, debtor: 'Shabba Ranks', date: '2024-02-05', paid: true },
    { id: 7, name: 'Shabba Ranks', profile: 'https://via.placeholder.com/75', amount: 500, debtor: 'Peter', date: '2024-02-06', paid: true },
    { id: 8, name: 'Peter', profile: 'https://via.placeholder.com/75', amount: 3000, debtor: 'Paul', date: '2024-02-04', paid: false },
    { id: 9, name: 'Paul', profile: 'https://via.placeholder.com/75', amount: 200, debtor: 'Boogie', date: '2024-02-05', paid: true },
    { id: 10, name: 'Boogie', profile: 'https://via.placeholder.com/75', amount: 1000, debtor: 'Emma', date: '2024-02-06', paid: false },
    { id: 11, name: 'Emma', profile: 'https://via.placeholder.com/75', amount: 100, debtor: 'Timo', date: '2024-02-04', paid: false },
    { id: 12, name: 'Timo', profile: 'https://via.placeholder.com/75', amount: 400, debtor: 'Kunta Kinte', date: '2024-02-06', paid: true },
  ];

  const yesterdayDebts = debts.filter(debt => debt.date === getYesterday() && !debt.paid);
  const todayDebts = debts.filter(debt => debt.date === getCurrentDate() && !debt.paid);
  const paidDebts = debts.filter(debt => debt.paid);
  const notPaidDebts = debts.filter(debt => !debt.paid);

  const filteredDebts = debts.filter(debt =>
    debt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    debt.debtor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    
    console.log('Search query:', searchQuery);
  };

  return (
    <div className='col-md-9' style={{ minHeight: '100vh' }}>
      <h1 className="text-center mb-4">Debt Page</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or debtor..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div>
        <h2>Yesterday Debts</h2>
        <div className="row">
          {yesterdayDebts.map(debt => (
            <div key={debt.id} className="col-md-3 mb-3">
              <div className="card debt-card shadow">
                <img src={debt.profile} alt={debt.name} className="card-img-top rounded-circle" style={{ width: '75px', height: '75px' }} />
                <div className="card-body">
                  <h5 className="card-title">{debt.name}</h5>
                  <p className="card-text">Debt: ${debt.amount}</p>
                  <p className="card-text">Debtor: {debt.debtor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Today Debts</h2>
        <div className="row">
          {todayDebts.map(debt => (
            <div key={debt.id} className="col-md-3 mb-3">
              <div className="card debt-card shadow">
                <img src={debt.profile} alt={debt.name} className="card-img-top rounded-circle" style={{ width: '75px', height: '75px' }} />
                <div className="card-body">
                  <h5 className="card-title">{debt.name}</h5>
                  <p className="card-text">Debt: ${debt.amount}</p>
                  <p className="card-text">Debtor: {debt.debtor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Paid Debts</h2>
        <div className="row">
          {paidDebts.map(debt => (
            <div key={debt.id} className="col-md-3 mb-3">
              <div className="card debt-card shadow">
                <img src={debt.profile} alt={debt.name} className="card-img-top rounded-circle" style={{ width: '75px', height: '75px' }} />
                <div className="card-body">
                  <h5 className="card-title">{debt.name}</h5>
                  <p className="card-text">Debt: ${debt.amount}</p>
                  <p className="card-text">Debtor: {debt.debtor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Not Paid Debts</h2>
        <div className="row">
          {notPaidDebts.map(debt => (
            <div key={debt.id} className="col-md-3 mb-3">
              <div className="card debt-card shadow">
                <img src={debt.profile} alt={debt.name} className="card-img-top rounded-circle" style={{ width: '75px', height: '75px' }} />
                <div className="card-body">
                  <h5 className="card-title">{debt.name}</h5>
                  <p className="card-text">Debt: ${debt.amount}</p>
                  <p className="card-text">Debtor: {debt.debtor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getYesterday = () => {
  const yesterday = new Date(Date.now() - 86400000);
  return yesterday.toISOString().split('T')[0];
};

const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export default Debt;
