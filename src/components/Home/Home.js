import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Banner from './Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div className="container py-5">
                <div className="text-center">
                    <h2>Our Service</h2>
                    <p>We Provide the best service</p>
                </div>
                <div className="row">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;