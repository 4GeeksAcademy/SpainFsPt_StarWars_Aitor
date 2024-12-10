import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const PeopleCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Moverse de una página a otra
    const [isFavorite, setIsFavorite] = useState(false); 

    const handleClick = () => {
        navigate('/details/' + props.uid); 
    };

    const handleFavorite = () => {
        actions.toggleFavorite({ ...props, url: '/details/' + props.uid });
        setIsFavorite(!isFavorite); 
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card m-3 border bg-dark border-warning glow-border">
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption className="nameCards mt-3 text-center">/ {props.name} /</figcaption>
                </figure>
                <div className="d-flex justify-content-center pb-3">
                    <button className="btn btn-warning learnMore" onClick={handleClick}>Learn More</button>
                    <button className="btn btn-light text-center bg-transparent border-0 text-white" onClick={handleFavorite}>
                        <span className={`fa-solid fa-heart ${isFavorite ? 'text-danger' : ''}`}></span> 
                    </button>
                </div>
            </div>
        </div>
    );
};

