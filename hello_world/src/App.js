import React from "react";
import frame from "./frame.svg";
import group from "./GFS_LOGO.PNG";
import image from "./image.svg";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import line3 from "./line-3.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const App = () => {
    function handleButtonClick() {
        console.log("Button clicked!");
    }

    return (
        <div className="container-fluid dashboard">
            <div className="row">
                {/* Left-side menu */}
                <div className="col-md-2 p-0 bg-white shadow-sm">
                    <div className="logo text-center py-3">
                        <img src={group} alt="Logo" className="img-fluid" />
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <div className="nav-link text-center">Dashboard</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-center">Properties</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-center">Tenants</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-center">Add Property</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-center">Maintainer</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-center">Contacts</div>
                        </li>
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
                                    <h3>125</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-white text-dark text-center shadow">
                                <div className="card-body">
                                    <h5>Total Units</h5>
                                    <h3>450</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-white text-dark text-center shadow">
                                <div className="card-body">
                                    <h5>Income</h5>
                                    <h3>$15,000</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card bg-white text-dark text-center shadow">
                                <div className="card-body">
                                    <h5>Maintainers</h5>
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
