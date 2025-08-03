import React from 'react';
import './App.css';
import img1 from './images/office1.jpg'; // Use any image path

function App() {
  const heading = "Office Space";

  // List of Office Objects
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", img: img1 },
    { Name: "Regus", Rent: 65000, Address: "Bangalore", img: img1 },
    { Name: "WeWork", Rent: 45000, Address: "Hyderabad", img: img1 },
    { Name: "SmartWorks", Rent: 70000, Address: "Mumbai", img: img1 }
  ];

  return (
    <div>
      <h1>{heading} , at Affordable Range</h1>
      {officeList.map((item, index) => {
        const colorClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index}>
            <img src={item.img} width="25%" height="25%" alt="Office Space" />
            <h1>Name: {item.Name}</h1>
            <h3 className={colorClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;