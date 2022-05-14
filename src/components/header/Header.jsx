import "./header.css"
import { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faCar, faPeopleGroup, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { format } from "date-fns"
import { Children } from "react";

export default function Header() {



    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [Options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            roomNo: 1
        }
    );

    const handleOptions = (item, operation) => {
        setOptions(prev => {
            return {
                ...prev, [item]: operation === "i" ? Options[item] + 1 : (Options[item] <= 0 ? 0 : Options[item] - 1),
            }
        })
    }


    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxis</span>
                    </div>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcons" />
                        <input type="text" placeholder="Enter Your Destination" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcons" />
                        <span className="headerSearchText" onClick={() => { setOpenDate(!openDate); setOpenOptions(false) }}>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}

                            className="dateRange"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPeopleGroup} className="headerIcons" />
                        <span className="headerSearchText" onClick={() => { setOpenDate(false); setOpenOptions(!openOptions) }}>
                            {`Adult-${Options.adult} Children-${Options.children} Room No-${Options.roomNo} `}
                        </span>
                        {openOptions && <div className="options">
                            <div className="optionsItem">
                                <span className="optionText"> Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterBtn" onClick={() => { handleOptions("adult", "d") }}>-</button>
                                    <span className="optionCounterNumber">{Options.adult}</span>
                                    <button className="optionCounterBtn" onClick={() => { handleOptions("adult", "i") }}>+</button>
                                </div>
                            </div>
                            <div className="optionsItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterBtn" onClick={() => { handleOptions("children", "d") }}>-</button>
                                    <span className="optionCounterNumber">{Options.children}</span>
                                    <button className="optionCounterBtn" onClick={() => { handleOptions("children", "i") }}>+</button>
                                </div>
                            </div>
                            <div className="optionsItem">
                                <span className="optionText">RoomNo</span>
                                <div className="optionCounter">
                                    <button className="optionCounterBtn" onClick={() => { handleOptions("roomNo", "d") }}>-</button>
                                    <span className="optionCounterNumber">{Options.roomNo}</span>
                                    <button className="optionCounterBtn" onClick={() => { handleOptions("roomNo", "i") }}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={() => {
                            setOpenDate(false);
                            setOpenOptions(false);
                        }}>Search</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
