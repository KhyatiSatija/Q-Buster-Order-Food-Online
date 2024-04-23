// EditMenuOption.js

import React, { useState } from 'react';

function EditMenuOption({ menuData, setMenuData }) {
  const [formData, setFormData] = useState({
    itemId: '',
    itemName: '',
    price: '',
    deliveryTime: '',
    foodImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      foodImage: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.itemId && formData.itemName && formData.price && formData.deliveryTime && formData.foodImage) {
      // Create a new item object
      const newItem = {
        id: menuData.length + 1, // Generate a unique ID (you might want to use a more robust method)
        item: formData.itemName,
        price: formData.price,
        deliveryTime: formData.deliveryTime,
        foodDisplay: URL.createObjectURL(formData.foodImage) // Use a URL for the image display
      };
      // Update the menuData state with the new item
      setMenuData([...menuData, newItem]);
      // Reset the form data
      setFormData({
        itemId: '',
        itemName: '',
        price: '',
        deliveryTime: '',
        foodImage: null
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="edit-menu-option">
      <h2>Add a New Item</h2>
      <form className="edit-menu-option-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemId">Item ID:</label>
          <input type="text" id="itemId" name="itemId" value={formData.itemId} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryTime">Delivery Time:</label>
          <input type="text" id="deliveryTime" name="deliveryTime" value={formData.deliveryTime} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="foodImage">Food Image:</label>
          <input type="file" id="foodImage" name="foodImage" onChange={handleFileChange} />
        </div>
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
    </div>
  );
}

export default EditMenuOption;
