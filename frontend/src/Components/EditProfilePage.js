import React, { useState } from 'react';

const EditProfile = ({ user, handleUpdateProfile }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [photo, setPhoto] = useState(user ? user.photo : null);

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPhoto(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // Handle save profile logic
    const updatedUser = { ...user, name, photo };
    handleUpdateProfile(updatedUser);
  };

  return (
    <div className="edit-profile-container">
      <h3>Edit Profile</h3>
      <div className="profile-form">
        <div className="mb-3">
          <label htmlFor="profileName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="profileName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profilePhoto" className="form-label">
            Profile Photo
          </label>
          <input
            type="file"
            className="form-control"
            id="profilePhoto"
            accept="image/*"
            onChange={handleUploadPhoto}
          />
        </div>
        {photo && (
          <div className="mb-3">
            <img src={photo} alt="Profile Preview" className="img-thumbnail" />
          </div>
        )}
        <button className="btn btn-primary" onClick={handleSaveProfile}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
