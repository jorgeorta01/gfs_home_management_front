import React, { useState } from "react";
import frame from "./frame.svg";
import group from "./GFS_LOGO.PNG";
import line1 from "./line-1.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


const DashboardContent = () => <h1 className="title">Dashboard</h1>;
const PropertiesContent = () => {
    // Simulated fake database call
    const properties = [
        {
            name: "Townhouse",
            appliances: 5,
            materials: 14,
            status: "Under Maintenance",
            dateStarted: "2023-01-01"
        },
        {
            name: "Condo",
            appliances: 7,
            materials: 23,
            status: "Active",
            dateStarted: "2023-01-01"
        }
    ];

    return (
        <div>
            <h1 className="title">Properties</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Appliances</th>
                        <th>Materials</th>
                        <th>Status</th>
                        <th>Date Started</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property, index) => (
                        <tr key={index}>
                            <td>{property.name}</td>
                            <td>{property.appliances}</td>
                            <td>{property.materials}</td>
                            <td>{property.status}</td>
                            <td>{property.dateStarted}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const TenantsContent = () => <h1 className="title">Tenants</h1>;
const AddPropertyContent = () => <h1 className="title">Add Property</h1>;
const MaintainerContent = () => <h1 className="title">Maintainer</h1>;
const ContactsContent = () => <h1 className="title">Contacts</h1>;

export const App = () => {
    const [activeButton, setActiveButton] = useState(null);

    function handleButtonClick(label) {
        setActiveButton(label);
        console.log(`${label} button clicked!`);
    }

    const renderContent = () => {
        switch (activeButton) {
            case 'Dashboard':
                return <DashboardContent/>;
            case 'Properties':
                return (
                    <>
                        <h1>Properties</h1>,
                        <PropertiesContent/> 
                    </>
                );
   
            case 'Tenants':
                return <TenantsContent/>;
            case 'Add Property':
                return <AddPropertyContent/>;
            case 'Maintainer':
                return <MaintainerContent/>;
            case 'Contacts':
                return (
                    <>
                        <h1>Contacts</h1>
                        <ContactsContent />
                    </>
                );
            default:
                return <DashboardContent/>; 
        }
    };

    return (
        <div className="container-fluid dashboard">
            <div className="row">
                {/* Left-side menu */}
                <div className="col-md-2 p-0 bg-white shadow-sm d-flex flex-column align-items-center justify-content-center">
                    <ul className="nav flex-column w-100 text-center">
                        <div className="logo mt-4 mb-4">
                            <img src={group} alt="Logo" className="img-fluid" />
                        </div>
                        {["Dashboard", "Properties", "Tenants", "Add Property", "Maintainer", "Contacts"].map(
                            (label) => (
                                <li className="nav-item " key={label}>
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
                            <span className="me-2 header-text">English</span>
                            <div>
                                <img src={line1} alt="Line" className="me-1" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={frame} alt="User" className="rounded-circle me-2" />
                            <div>
                                <div className="header-text">user_2020</div>
                                <div className="header-text">TID: 23545</div>
                            </div>
                        </div>
                    </header>
                    
                    {/* Conditional Rendering/ Content */}
                    <div className="p-3">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;
