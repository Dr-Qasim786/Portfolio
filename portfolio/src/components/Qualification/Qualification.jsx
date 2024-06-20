import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Educational Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Ph.D. Economics</h3>
                            <span className="qualification__subtitle">University of the Punjab, Lahore</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}July 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">M.Phil. Applied Economics</h3>
                            <span className="qualification__subtitle">Forman Christian College University (FCCU) Lahore</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}November 2015
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">M.Sc. Economics</h3>
                            <span className="qualification__subtitle">Department of Economics, University of Punjab, Lahore</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}June 2012
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">PGD in Applied Economics</h3>
                            <span className="qualification__subtitle">Department of Economics, University of Punjab, Lahore</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}August 2010
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Assistant Professor</h3>
                            <span className="qualification__subtitle">Department of Economics, Akhuwat University</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}2024-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Assistant Professor</h3>
                            <span className="qualification__subtitle">Department of Economics, Lahore Leads University</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}2021-2023
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Director QEC</h3>
                            <span className="qualification__subtitle">Quality Enhancement Cell, Lahore Leads University</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}2022-2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Lecturer of Economics</h3>
                            <span className="qualification__subtitle">Department of Economics, Lahore Leads University</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                {" "}2017-2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;