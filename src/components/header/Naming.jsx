import React from "react";

const Naming = (classNameHeader) => {
     const renderContent = () => {
        if (classNameHeader === 'booking') {
            return (
                <div className="booking-naming content-wrapper">
                    <span className="headtext house">APARTMENT HOUSE</span>
                    <span className="headtext casanostra">CASA NOSTRA</span>
                </div>
            );
        } else {
            return (
                <div className="content-wrapper">
                    <span>APARTMENT HOUSE</span>
                    <span className="casanostra">CASA</span>
                    <span className="casanostra">NOSTRA</span>
                </div>
            );
        }
    }
    return (
        <div className="content-wrapper">{renderContent()}</div>
    );
}
export default Naming;