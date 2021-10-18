const Service = (props) => {
    const { name, desc, service } = props.service;
    return (

        <>
            <div className="col-sm-2 col-md-3 col-lg-4">
                <img className="w-75 h-50" src={service} alt="Service" />
                <h2>{name}</h2>
                <p>{desc}</p>
                <button className="btn btn-info">{name} Details</button>
            </div>
        </>

    );
};

export default Service;