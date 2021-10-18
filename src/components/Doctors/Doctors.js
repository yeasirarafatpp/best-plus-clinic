import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <div className="text-center pt-2">
                <h2 className="text-danger">Our All Doctor</h2>
                <p>We Provide the Best Service</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-3 py-3 mx-auto container">
                {
                    doctors.map(doctor => (
                        <div key={doctor.key} className="col">
                            <div className="card">
                                <img src={doctor.doctorImg} className="card-img-top" alt="DoctorImage" />
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.name}</h5>
                                    <p className="card-text text-info">{doctor.post}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Doctors;