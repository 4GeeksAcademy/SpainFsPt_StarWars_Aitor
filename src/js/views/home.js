import React, { useContext } from "react";
import "../../styles/home.css";
import { PeopleCard } from "../component/peopleCard.jsx";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/planetCard.jsx";
import { VehiclesCard } from "../component/vehiclesCard.jsx";

export const Home = () => {

const {store, actions} = useContext(Context)

return(
    <div className="home-container">

        <video autoPlay muted loop id="backgroundVideo">
            <source src="https://cdn.pixabay.com/video/2021/09/10/87995-602894784_large.mp4" type="video/mp4" />
        </video>

        <div className="content">
            <h2 className="m-4">/ Characters /</h2>
            <div className="row">
                {store.people?.map(el => 
                    <PeopleCard
                        key={el.uid}
                        img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid}
                    />
                )}
            </div>

            <h2 className="m-4">/ Planets /</h2>
            <div className="row">
                {store.planets?.map(el => 
                    <PlanetCard
                        key={el.uid}
                        img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid}
                    />
                )}
            </div>

            <h2 className="m-3">/ Vehicles /</h2>
            <div className="row">
                {store.vehicles?.map(el => 
                    <VehiclesCard
                        key={el.uid}
                        img={`https://starwars-visualguide.com/assets/img/vehicles/${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid}
                    />
                )}
            </div>
        </div>
    </div>
);
}
