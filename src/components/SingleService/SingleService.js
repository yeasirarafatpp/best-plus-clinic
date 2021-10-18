import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceID } = useParams();
    useEffect(() => {
        // const url = `./service.json/${serviceID}`;
        fetch('./service.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    console.log('coming');
    return (
        <div className="container">
            <h2>This is details page {serviceID}</h2>
            <p>Local api theke dynamic route hocchena</p>
        </div>
    );
};

export default SingleService;