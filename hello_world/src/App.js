import React, { useState } from "react";
import frame from "./frame.svg";
import group from "./GFS_LOGO.PNG";
import line1 from "./line-1.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const paintColors = [
  {
    id: 1,
    brand: "Sherwin-Williams",
    colorName: "Naval",
    colorCode: "SW 6244",
    finish: "Matte"
  },
  {
    id: 2,
    brand: "Benjamin Moore",
    colorName: "Hale Navy",
    colorCode: "HC-154",
    finish: "Eggshell"
  },
  {
    id: 3,
    brand: "Behr",
    colorName: "Midnight Blue",
    colorCode: "PPU14-20",
    finish: "Satin"
  },
  {
    id: 4,
    brand: "Farrow & Ball",
    colorName: "Hague Blue",
    colorCode: "No.30",
    finish: "Semi-Gloss"
  }
];

export const appliances = [
  {
    id: 1,
    category: "Refrigerator",
    brand: "Samsung",
    modelNumber: "RF28R7551SR",
    price: 2799.99,
    color: "Stainless Steel"
  },
  {
    id: 2,
    category: "Dishwasher",
    brand: "Bosch",
    modelNumber: "SHPM88Z75N",
    price: 1299.99,
    color: "Black Stainless"
  },
  {
    id: 3,
    category: "Range",
    brand: "LG",
    modelNumber: "LSE4616ST",
    price: 1899.99,
    color: "Stainless Steel"
  },
  {
    id: 4,
    category: "Microwave",
    brand: "Whirlpool",
    modelNumber: "WMH31017HS",
    price: 399.99,
    color: "Stainless Steel"
  }
];



export const App = () => {
    const [activeButton, setActiveButton] = useState(null); // State to track the active button

    function handleButtonClick(label) {
        setActiveButton(label); // Set the clicked button as active
        console.log(`${label} button clicked!`);
    }

    return (
        <div className="container-fluid dashboard">
            <div className="row">
                {/* Left-side menu */}
                <div className="col-md-2 p-0 bg-white shadow-sm d-flex flex-column align-items-center justify-content-center">
                    <ul className="nav flex-column w-100 text-center">
                        <div className="logo mb-4">
                            <img src={group} alt="Logo" className="img-fluid" />
                        </div>
                        {["Dashboard", "Properties", "Tenants", "Add Property", "Maintainer", "Contacts"].map(
                            (label) => (
                                <li className="nav-item" key={label}>
                                    <button
                                        className={`btn btn-link nav-link ${
                                            activeButton === label ? "active" : ""
                                        }`}
                                        onClick={() => handleButtonClick(label)}
                                    >
                                        {label}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Main content */}
                <div className="col-md-10">
                    <header className="d-flex align-items-center justify-content-between bg-white shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <span className="me-2">English</span>
                            <div>
                                <img src={line1} alt="Line" className="me-1" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={frame} alt="User" className="rounded-circle me-2" />
                            <div>
                                <div>user_2020</div>
                                <div>TID: 23545</div>
                            </div>
                        </div>
                    </header>

                    {/* Example Dashboard Content */}
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-primary text-white text-center shadow">
                                <div className="card-body">
                                    <h5>Total Properties</h5>
                                    <h3>5</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-white text-dark text-center shadow">
                                <div className="card-body">
                                    <h5>Total Appliances</h5>
                                    <h3>450</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-white text-dark text-center shadow">
                                <div className="card-body">
                                    <h5>Total Income</h5>
                                    <h3>$15,000</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-white text-dark text-center shadow">
                                <div className="card-body">
                                    <h5>Total Expense</h5>
                                    <h3>25</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
