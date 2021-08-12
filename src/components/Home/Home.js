import React from 'react';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div>
        <div className="custom-header">
            <div className="container">
                <div className="m-5 header">
                    <h2 className="text-center"><b>I grow by helping people in need</b></h2>
                </div>
            </div>
        </div>
        <div className="container">
            <Events/>
        </div>
    </div>
    );
};

export default Home;