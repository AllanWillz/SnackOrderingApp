import React, { useState } from 'react';

const AddSnackForm = ({ handleAddSnack, handleCloseForm }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleAddSnackClick = () => {
    if (!name || !price || !imageURL) {
      alert('Please fill in all fields.');
      return;
    }

    handleAddSnack({ name, price: parseFloat(price), imageURL });
    handleCloseForm();
  };

  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <button className="btn btn-link float-end" onClick={handleCloseForm}>
          Close
        </button>
        <h3>Add Snack</h3>
        <div className="mb-3">
          <label htmlFor="snackName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="snackName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="snackPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="snackPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="snackImageURL" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="snackImageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddSnackClick}>
          Add Snack
        </button>
      </div>
    </div>
  );
};

export default AddSnackForm;
