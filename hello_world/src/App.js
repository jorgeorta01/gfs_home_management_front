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
                        <div className="rectangle" />

                        <div className="div" />

                        <div className="rectangle-2" />

                        <div className="logo">
                            <div className="group">
                                <div className="text-wrapper">TMS</div>

                                <img className="img" alt="Group" src={group} />
                            </div>
                        </div>

                        <div className="text-wrapper-2">DASHBOARD</div>
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

                    <div className="total-property">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-8">Total Property</div>

                            <div className="text-wrapper-9">45</div>
                        </div>
                    </div>

                    <div className="total-unit">
                        <div className="overlap-3">
                            <div className="text-wrapper-10">Total Unit</div>

                            <div className="text-wrapper-11">142</div>
                        </div>
                    </div>

                    <div className="income">
                        <div className="overlap-3">
                            <div className="text-wrapper-10">Total Income</div>

                            <div className="text-wrapper-11">$56456.00</div>
                        </div>
                    </div>

                    <div className="group-3">
                        <div className="overlap-3">
                            <div className="text-wrapper-10">Total Expense</div>

                            <div className="text-wrapper-12">$26456.00</div>
                        </div>
                    </div>

                    <div className="overlap-4">
                        <div className="text-wrapper-13">Payment History</div>

                        <div className="text-wrapper-14">Payment Date</div>

                        <div className="text-wrapper-15">Amount</div>

                        <div className="text-wrapper-16">Status</div>

                        <div className="text-wrapper-17">September 2023</div>

                        <div className="text-wrapper-18">$4568.00</div>

                        <div className="text-wrapper-19">Paid</div>

                        <div className="text-wrapper-20">October 2023</div>

                        <div className="text-wrapper-21">$4568.00</div>

                        <div className="text-wrapper-22">Paid</div>

                        <div className="text-wrapper-23">November 2023</div>

                        <div className="text-wrapper-24">$4568.00</div>

                        <div className="text-wrapper-25">Paid</div>

                        <div className="frame-2">
                            <div className="text-wrapper-26">See Invoices</div>
                        </div>
                    </div>

                    <div className="overlap-5">
                        <div className="text-wrapper-27">Maintenance Status</div>

                        <div className="group-4">
                            <div className="text-wrapper-28">Request #001</div>

                            <div className="text-wrapper-29">In Progress</div>
                        </div>

                        <div className="group-5">
                            <div className="text-wrapper-28">Request #002</div>

                            <div className="text-wrapper-30">Completed</div>
                        </div>

                        <div className="group-6">
                            <div className="text-wrapper-28">Request #002</div>

                            <div className="text-wrapper-29">Pending</div>
                        </div>

                        <img className="frame-3" alt="Frame" src={frame} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;