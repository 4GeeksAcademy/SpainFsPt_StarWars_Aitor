import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="position-relative">
                <div className="dropdown position-absolute top-0 start-0 dropstart m-0 p-5">
                <button type="button" class="btn btn-warning dropdown-toggle guardar" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="fa-solid fa-bookmark"></span>
                    </button>
                    <ul className="dropdown-menu">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((favorite, index) => (
                                <li key={index} className="d-flex align-items-center justify-content-between px-3">
                                    <Link className="dropdown-item" to={favorite.url}>
                                        {favorite.name}
                                    </Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => actions.deleteFavorite(favorite.uid)}>
                                        &times;
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li><a className="dropdown-item" href="#">No favorites</a></li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="container mt-5 mb-3 d-flex justify-content-center">
                <Link to="/">
                    <img src="https://pngimg.com/d/star_wars_logo_PNG23.png" alt="logo_starwars" width={"300px"} />
                </Link>
            </div>
        </>
    );
};