import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import financeImage from '../image/finance.png'; // Add your finance-related image here

function FinanceUserInterface() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample notification for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification("New invoice created successfully!");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, message]);
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="flex flex-col h-screen font-poppins bg-gradient-to-br from-purple-100 via-white to-pink-50">
     
      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center bg-pink-100 rounded-3xl shadow-xl mx-16 my-8 border border-gray-200">
        <div className="max-w-lg text-left space-y-6 p-10">
          <h1 className="text-5xl font-extrabold text-purple-600 mb-4">
            Finance Management
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to the Finance Management interface of our soft toy management system!
            Easily manage transactions, invoices, and budgets with tools for effective oversight and decision-making.
          </p>

          {/* Navigation Buttons */}
          <div className="space-y-4">
            <Link to="orderbillinterface">
              <button className="w-full py-1 px-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-300 to-purple-300 rounded-full hover:from-pink-200 hover:to-purple-200 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Order Bill Calculate
              </button>
            </Link>
            <br></br>
            <br></br>
            <Link to="salarycalculateinterface">
              <button className="w-full py-1 px-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-300 to-purple-300 rounded-full hover:from-pink-200 hover:to-purple-200 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Calculate Salary
              </button>
            </Link>
            <br></br>
            <br></br>
            <Link to="ftable">
              <button className="w-full py-1 px-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-300 to-purple-300 rounded-full hover:from-pink-200 hover:to-purple-200 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Finance Table
              </button>
            </Link>
            <br></br>
            <br></br>
            <Link to="freport">
              <button className="w-full py-1 px-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-300 to-purple-300 rounded-full hover:from-pink-200 hover:to-purple-200 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Report Analyze
              </button>
            </Link>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="hidden lg:block w-1/3 max-w-xl">
          <img
            src={financeImage}
            alt="Finance Management Illustration"
            className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            style={{ maxHeight: '300px' }} // Set a max height for the image
          />
        </div>
      </div>

     
      
    </div>
  );
}

export default FinanceUserInterface;