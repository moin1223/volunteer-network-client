import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleRegistration from '../SingleRegistration/SingleRegistration';

const AllRegistration = () => {

    const [registration, setRegistration] = useState([]);

    useEffect(() => {
        fetch(`https://afternoon-ridge-02582.herokuapp.com/registrations`)
            .then(res => res.json())
            .then(data => setRegistration(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-12">
                    <h3 className="m-5 text-center">All Registration</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Event Name</th>
                                <th>Registration Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registration.map(reg => <SingleRegistration reg={reg}></SingleRegistration>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllRegistration;