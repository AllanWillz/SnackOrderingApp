import React, { useState } from 'react';

const Debt = () => {
  // Sample debts data
  const [searchQuery, setSearchQuery] = useState('');
  const debts = [
    { id: 1, name: 'Kunta Kinte', profile: 'https://ca.slack-edge.com/T011H66DJCE-U06H64LU6AH-44ccf79aa2d4-48', amount: 500, debtor: 'Spiderman', date: '2024-02-05', paid: false },
    { id: 2, name: 'Spiderman', profile: 'https://ca.slack-edge.com/T03CCPZ3W2K-U045TCX40HZ-e7ae468a5692-48', amount: 300, debtor: 'Ras-al-ghul', date: '2024-02-06', paid: true },
    { id: 3, name: 'Ras-al-ghul', profile: 'https://ca.slack-edge.com/T03CCPZ3W2K-U045CUCTW7R-e85bf76510ca-48', amount: 800, debtor: 'Engneer', date: '2024-02-04', paid: false },
    { id: 4, name: 'Engneer', profile: 'https://ca.slack-edge.com/T03CCPZ3W2K-U0456UNGDSP-2715f2646101-48', amount: 6000, debtor: 'Sharon O', date: '2024-02-05', paid: false },
    { id: 5, name: 'Sharon O', profile: 'https://ca.slack-edge.com/T03CCPZ3W2K-U045LSRG9DL-7124b8a7ab4e-48', amount: 900, debtor: 'Daniel C', date: '2024-02-06', paid: false },
    { id: 6, name: 'Daniel C', profile: 'https://ca.slack-edge.com/T03CCPZ3W2K-U04HMCZD6QK-5b8ec0d34583-48', amount: 900, debtor: 'Shabba Ranks', date: '2024-02-05', paid: true },
    { id: 7, name: 'Shabba Ranks', profile: 'https://ca.slack-edge.com/T011H66DJCE-U06509ZKBGX-c9579eae8c03-48', amount: 500, debtor: 'Peter', date: '2024-02-06', paid: true },
    { id: 8, name: 'Peter', profile: 'https://ca.slack-edge.com/T011H66DJCE-U01GQR9E9C6-d3642fb9ee49-48', amount: 3000, debtor: 'Paul', date: '2024-02-04', paid: false },
    { id: 9, name: 'Paul', profile: 'https://ca.slack-edge.com/T011H66DJCE-U065BTU0D8V-4e16670379f6-48', amount: 200, debtor: 'Boogie', date: '2024-02-05', paid: true },
    { id: 10, name: 'Boogie', profile: 'https://ca.slack-edge.com/T011H66DJCE-U014E7AF154-d5a63b7e923b-48', amount: 1000, debtor: 'Emma', date: '2024-02-06', paid: false },
    { id: 11, name: 'Emma', profile: 'https://ca.slack-edge.com/T011H66DJCE-U041C5Y90SF-a221dbdd7e45-48', amount: 100, debtor: 'Timo', date: '2024-02-04', paid: false },
    { id: 12, name: 'Timo', profile: 'https://ca.slack-edge.com/T011H66DJCE-U014Z3KV1LH-3b1c572234fa-48', amount: 400, debtor: 'Kunta Kinte', date: '2024-02-06', paid: true },
    { id: 13, name: 'Douglas', profile: 'https://ca.slack-edge.com/T011H66DJCE-U02CGRJJAAK-1988a54d2a1b-48', amount: 400, debtor: 'douglas', date: '2024-04-15', paid: true },
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
