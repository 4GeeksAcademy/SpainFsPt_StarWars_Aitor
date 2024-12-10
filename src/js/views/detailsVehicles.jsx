import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Context } from "../store/appContext"; 

export const DetailsVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.loadVehicle(params.uid);
    }, [actions, params.uid]); 

    return (
        <div className="container">
            <video className="opacity-50" autoPlay muted loop id="backgroundVideo">
                <source src="https://cdn.pixabay.com/video/2021/09/10/87995-602894784_large.mp4" type="video/mp4" />
            </video>
            {store.vehicle?.properties ? (
                <div className="d-flex justify-content-center align-items-center pt-5">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} alt={store.vehicle.properties.name} className="img-fluid me-3" />
                    <div className="text-start">
                        <h2 className="text-black">{store.vehicle.properties.name}</h2>
                        <p><strong>Modelo:</strong> {store.vehicle.properties.model}</p>
                        <p><strong>Fabricante:</strong> {store.vehicle.properties.manufacturer}</p>
                        <p><strong>Creación:</strong> {store.vehicle.properties.created}</p>
                        <p><strong>Coste en créditos:</strong> {store.vehicle.properties.cost_in_credits}</p>
                        <p><strong>Capacidad de Carga:</strong> {store.vehicle.properties.cargo_capacity}</p>
                        <p><strong>Tripulación:</strong> {store.vehicle.properties.crew}</p>
                        <p><strong>Pasajeros:</strong> {store.vehicle.properties.passengers}</p>
                        <p><strong>Velocidad máxima de atmósfera:</strong> {store.vehicle.properties.max_atmosphering_speed}</p>
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