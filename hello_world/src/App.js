import React from "react";
import frame from "./frame.svg";
import group from "./group.png";
import image from "./image.svg";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import line3 from "./line-3.svg";
import "./style.css";

export const App = () => {
    return (
        <div className="dashboard">
            <div className="overlap-wrapper">
                
                <div className="overlap">
                    <div className="overlap-group">
                        {/* Chosen Language and user */}
                        <div className="rectangle" />
                        {/* Title of current menu-tab */}
                        <div className="div" />
                        {/* Left-side column with different menu-tabs */}
                        <div className="rectangle-2">
                            <div className="property">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">Properties</div>
                                </div>
                            </div>

                            <div className="add-property">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">Add Property</div>
                                </div>
                            </div>

                            <div className="tenants">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">Tenants</div>
                                </div>
                            </div>

                            <div className="mainaiter">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">Maintainer</div>
                                </div>
                            </div>

                            <div className="contacs">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">Contacts</div>
                                </div>
                            </div>

                            <div className="overlap-group-wrapper">
                                <div className="overlap-2">
                                    <div className="text-wrapper-4">Dashboard</div>
                                </div>
                            </div>          
                        {/* Upper-left corner logo */}
                        <div className="logo">
                            <div className="group">
                                <div className="text-wrapper">TMS</div>

                                <img className="img" alt="Group" src={group} />
                            </div>
                        </div>
                  
                        </div>


                        <div className="ellipse" />

                        <div className="text-wrapper-5">English</div>

                        <div className="group-2">
                            <img className="line" alt="Line" src={line1} />

                            <img className="line-2" alt="Line" src={line2} />

                            <img className="line-3" alt="Line" src={line3} />
                        </div>

                        <div className="profile">
                            <div className="text-wrapper-6">user_2020</div>

                            <div className="text-wrapper-7">TID: 23545</div>

                            <img className="frame" alt="Frame" src={image} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default App;