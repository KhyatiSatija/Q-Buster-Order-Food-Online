import React, { useState } from 'react';
import './App.css';
import AddNewItemForm from './screens/Add_New_Item';

import choleImage from './screens/Food_Images/chole.png';
import eggRollImage from './screens/Food_Images/egg roll.jpg';
import prImage from './screens/Food_Images/PR.jpeg';
import paneerRollImage from './screens/Food_Images/PaneerRoll.jpg';
import periFriesImage from './screens/Food_Images/peri peri fries.jpeg';
import chowmeinImage from './screens/Food_Images/maggie.jpeg';
import mangoShakeImage from './screens/Food_Images/mango shake.jpeg';




function App() {
  // State to keep track of which section is currently active
  const [activeSection, setActiveSection] = useState('');
  const [showAddNewItemForm, setShowAddNewItemForm] = useState(false); 

  // Hardcoded data for each section
  const usersListData = [
    { id: '123qwer', name: 'Khyati Satija', email: 'khyatiSatija@google.com' },
    { id: '345tyuio', name: 'Mittal Soni', email: 'mittalSoni@yahoo.com' },
    { id: '456asdfg', name: 'Sanchit Mishra', email: 'mishraSanchit@google.com' },
    { id: '567xcvbn', name: 'Harsh Vardhan', email: 'HarshVardhan@google.com' },
    { id: '678tyuio', name: 'Naina Bajaj', email: 'nainaBajaj@google.com' }
  ];

  
const menuData = [
  { id: 1, item: 'Chole Bhature', price: 'Rs80', deliveryTime: '25 mins', foodDisplay: choleImage },
  { id: 2, item: 'Egg Roll', price: 'Rs55', deliveryTime: '20 mins', foodDisplay: eggRollImage },
  { id: 3, item: 'Paneer Shwarma', price: 'Rs95', deliveryTime: '30 mins', foodDisplay: prImage },
  { id: 4, item: 'Paneer Tikka Roll', price: 'Rs100', deliveryTime: '35 mins', foodDisplay: paneerRollImage },
  { id: 5, item: 'Peri Peri Fries', price: 'Rs70', deliveryTime: '15 mins', foodDisplay: periFriesImage },
  { id: 6, item: 'Chowmein', price: 'Rs75', deliveryTime: '25 mins', foodDisplay: chowmeinImage },
  { id: 7, item: 'Mango Shake', price: 'Rs20', deliveryTime: '10 mins', foodDisplay: mangoShakeImage }
];

  const ordersData = [
    { id: 1, userID: '123qwer', orderNumber: 'ORD001', date: '2024-04-05', totalPrice: 'Rs150', status: 'Delivered' },
    { id: 2, userID: '345tyuio', orderNumber: 'ORD002', date: '2024-04-10', totalPrice: 'Rs300', status: 'Deliver' },
    { id: 3, userID: '456asdfg', orderNumber: 'ORD003', date: '2024-04-15', totalPrice: 'Rs40', status: 'Delivered' },
    { id: 4, userID: '567xcvbn', orderNumber: 'ORD004', date: '2024-04-20', totalPrice: 'Rs95', status: 'Deliver' },
    { id: 5, userID: '678tyuio', orderNumber: 'ORD005', date: '2024-04-25', totalPrice: 'Rs500', status: 'Delivered' }
  ];

  // Function to handle clicking on a column name
  const handleColumnClick = (section) => {
    setActiveSection(section);
    setShowAddNewItemForm(false);
  };
  const handleAddNewItemButtonClick = () => {
    setShowAddNewItemForm(true); // Set form visibility to true when "Add New Item" button is clicked
  };

  

  // Function to handle clicking on the Deliver button
  // Function to handle clicking on the Deliver button
// Function to handle clicking on the Deliver button
const handleDeliverClick = (orderId) => {
  const updatedOrdersData = ordersData.map(order => {
    if (order.id === orderId) {
      return { ...order, status: order.status === 'Deliver' ? 'Delivered' : 'Deliver' };
    }
    return order;
  });
  // Update ordersData state
  // setOrdersData(updatedOrdersData);
};



  // Render data based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'usersList':
        return (
          <div className="section-container">
            <h2>Users List</h2>
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {usersListData.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        case 'menu':
          return (
            <div className="section-container">
              <h2>Menu</h2>
              <table>
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Delivery Time</th>
                    <th>Food Display</th>
                  </tr>
                </thead>
                <tbody>
                  {menuData.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.item}</td>
                      <td>{item.price}</td>
                      <td>{item.deliveryTime}</td>
                      <td><img src={item.foodDisplay} alt={item.item} className="food-image" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        
      case 'editMenuOption':
        return (
          <div className="section-container">
            <h2>Edit Menu Option</h2>
            <button className="add-new-item-button" onClick={handleAddNewItemButtonClick}>Add New Item</button> {/* Button to add new item */}
            {showAddNewItemForm && <AddNewItemForm />} {/* Render AddNewItemForm component when showAddNewItemForm is true */}
          </div>
        );
      case 'orders':
        return (
          <div className="section-container">
            <h2>Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Date</th>
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.userID}</td>
                    <td>{order.date}</td>
                    <td>{order.totalPrice}</td>
                    <td>
                      {order.status === 'Deliver' ? (
                        <button className="deliver-button" onClick={() => handleDeliverClick(order.id)}>Deliver</button>
                      ) : (
                        <span className="delivered">Delivered</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <div className="column-names">
        <div onClick={() => handleColumnClick('usersList')}>Users List</div>
        <div onClick={() => handleColumnClick('menu')}>Menu</div>
        <div onClick={() => handleColumnClick('editMenuOption')}>Edit Menu Option</div>
        <div onClick={() => handleColumnClick('orders')}>Orders</div>
      </div>
      {renderSection()}
    </div>
  );
}

export default App;
