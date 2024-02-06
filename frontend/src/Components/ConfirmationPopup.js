import React from 'react';

const ConfirmationPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="overlay-confirmation">
      <div className="confirmation-popup">
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className="buttons">
          <button className="btn btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn btn-confirm" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
