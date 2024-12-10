import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Context } from "../store/appContext"; 

export const DetailsPlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.loadPlanet(params.uid);
    }, [actions, params.uid]); 

    return (

        <div className="container">

            <video className="opacity-50" autoPlay muted loop id="backgroundVideo">
                <source src="https://cdn.pixabay.com/video/2021/09/10/87995-602894784_large.mp4" type="video/mp4" />
            </video>

            {store.planet?.properties ? (
                <div className="d-flex justify-content-center align-items-center pt-5">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} alt={store.planet.properties.name} className="img-fluid me-3" />
                    <div className="text-start">
                        <h2 className="text-black">{store.planet.properties.name}</h2>
                        <p><strong>Diámetro:</strong> {store.planet.properties.diameter}</p>
                        <p><strong>Periodo de Rotación:</strong> {store.planet.properties.rotation_period}</p>
                        <p><strong>Periodo Orbital:</strong> {store.planet.properties.orbital_period}</p>
                        <p><strong>Gravedad:</strong> {store.planet.properties.gravity}</p>
                        <p><strong>Población:</strong> {store.planet.properties.population}</p>
                        <p><strong>Clima:</strong> {store.planet.properties.climate}</p>
                        <p><strong>Terreno:</strong> {store.planet.properties.terrain}</p>
                        <p><strong>Superficie de agua:</strong> {store.planet.properties.surface_water}</p>
                        <p><strong>Creación:</strong> {store.planet.properties.created}</p>
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
}