import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className="m-5 p-5">
           


            <Link to="/addEvent">
            <button className="btn btn-primary mt-5">
                <h3>Add Event</h3>
                </button>
                </Link>
        </div>

    );
};

export default Sidebar;