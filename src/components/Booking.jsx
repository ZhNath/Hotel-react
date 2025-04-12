import React from "react";

const Booking = () => {
    return (
        <div>
            <h1>Booking</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" name="date" required />
                </label>
                <br />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}
export default Booking;