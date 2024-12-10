import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Context } from "../store/appContext"; 

export const DetailsPeople = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.loadPerson(params.uid);
    }, [actions, params.uid]); 

    return (
        <div className="container">

        <video className="opacity-50" autoPlay muted loop id="backgroundVideo">
            <source src="https://cdn.pixabay.com/video/2021/09/10/87995-602894784_large.mp4" type="video/mp4" />
        </video>

            {store.person?.properties ? (
                <div className="d-flex justify-content-center align-items-center pt-5">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} alt={store.person.properties.name} className="img-fluid me-3" />
                    <div className="text-start">
                        <h2 className="text-black">{store.person.properties.name}</h2>
                        <p className="m-0"><strong>Height:</strong> {store.person.properties.height}cm</p>
                        <p className="m-0"><strong>Weight:</strong> {store.person.properties.mass}kg</p>
                        <p className="m-0"><strong>Skin color:</strong> {store.person.properties.skin_color}</p>
                        <p className="m-0"><strong>Hair color:</strong> {store.person.properties.hair_color}</p>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                </div>

            )}
        </div>
    );
};