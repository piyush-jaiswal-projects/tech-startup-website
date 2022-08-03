import React from "react";
import "../styles/events.css";

function Events(){
    return(
        <div><h1 className="events-section-title">Upcoming Events</h1>
        <div className="events-content-section">

        <div className="event-img-div">
        <img className="event-img" alt="EventsImage" src="media/7.png"></img>
        </div>

        <div className="event-para-div">
        <p className="event-para">We conduct lots of awareness workshops and events on recent developments in world of cyber security.</p>
        <br></br>
        <button className="event-btn">Register to get notified</button>
        </div>

        </div>
        </div>
    );
}

export default Events;