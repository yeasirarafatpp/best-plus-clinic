import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Service = (props) => {
    const { key, name, desc, service } = props.service;
    const history = useHistory();
    const handleDetails = () => {
        history.push(`service/${key}`)
    };
    return (
        <>
            <div className="col-sm-2 col-md-3 col-lg-4">
                <img className="w-75 h-50" src={service} alt="Service" />
                <h2>{name}</h2>
                <p>{desc}</p>
                <button onClick={handleDetails} className="btn btn-info">{name} Details</button>
            </div>
        </>

    );
};

export default Service;