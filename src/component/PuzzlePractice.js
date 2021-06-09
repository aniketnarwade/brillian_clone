import React from 'react';
import {Link} from "react-router-dom";
import drag1 from "../img/brilliant_org/p (3).png";
import drag2 from "../img/brilliant_org/p (1).png";
import drag3 from "../img/brilliant_org/p (2).png";

let PuzzlePractice = () => {
    return(
        <React.Fragment>
            <div className="">
                <div className="row">
                    <div className="col-md-2  bg-dark text-white fixed2 ">
                        <div className="text-center mt-5 sticky-top">
                            <Link to='/' className="nav-link text-dark t-left mb-2"> <i className="fas fa-chevron-left text-muted"/> <span className="text-muted font-small"> Back</span></Link>
                            <h6 className="text-muted">Logic</h6>
                        </div>

                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="  ">Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
                                    <ul className="p-1">
                                        <li>Joseph is not the youngest.</li>
                                        <li>Kevin is the oldest.</li>
                                        <li>Nicholas is not the oldest.</li>

                                    </ul>
                                    <p className="lead font-weight-bold font-small">Drag the characters into the dotted boxes.</p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="box1">
                                                    <p className="text-muted text-center mt-5">Youngest</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="box1">

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="box1">
                                                    <p className="text-muted text-center mt-5">Oldest</p>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <h3>Joseph</h3>
                                            <img src={drag1} className="drag1" alt=""/>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <h3>Kevin</h3>
                                            <img src={drag2} className="drag1" alt=""/>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <h3>Nicholas</h3>
                                            <img src={drag3} className="drag1" alt=""/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button className="btn btn-outline-dark btnround">Show explanation</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-dark btnround trans1">Cheak answer</button>

                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 text-center">
                        <p className="text-muted">Lession 1 <i className="fas fa-sort-down"/></p>
                        <h6>WARMUP PUZZLES</h6>
                        <div className="progress height1 mt-4">
                            <div
                                className="progress-bar w-25 "
                                role="progressbar"

                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"/>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default PuzzlePractice;