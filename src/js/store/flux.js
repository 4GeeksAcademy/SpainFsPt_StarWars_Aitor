const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api/',
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {

//Carga de Personajes ----------------------------------

			loadPeople: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					if (!resp.ok) throw new Error ('Error in the loading character')
					const data = await resp.json();
					console.log (data)
					setStore({people: data.results})
				} catch (error) {
					console.log(error);
				}
			},

//Carga de info Personajes-------------------------------------------------------

			loadPerson: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/people/'+uid);
					if (!resp.ok) throw new Error ('Error in the loading character')
					const data = await resp.json();
					console.log (data)
					setStore({person: data.result})
				} catch (error) {
					console.log(error);
				}
			},

//Carga de Planetas-------------------------------------------------------

			loadPlanets: async () => {
				try {
					const resp = await fetch(getStore().url + '/planets');
					if (!resp.ok) throw new Error ('Error in the loading planets')
					const data = await resp.json();
					console.log (data)
					setStore({planets: data.results})
				} catch (error) {
					console.log(error);
				}
			},

//Carga de info planeta-------------------------------------------------------

			loadPlanet: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/planets/'+uid);
					if (!resp.ok) throw new Error ('Error in the loading planet')
					const data = await resp.json();
					console.log (data)
					setStore({planet: data.result})
				} catch (error) {
					console.log(error);
				}
			},

//Carga de vehículos -------------------------------------------------------
			
			loadVehicles: async () => {
				try {
					const resp = await fetch(getStore().url + '/vehicles');
					if (!resp.ok) throw new Error ('Error in the loading vehicles')
					const data = await resp.json();
					console.log (data)
					setStore({vehicles: data.results})
				} catch (error) {
					console.log(error);
				}
			},

//Carga de vehículo -------------------------------------------------------

			loadVehicle: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/vehicles/'+uid);
					if (!resp.ok) throw new Error ('Error in the loading vehicle')
					const data = await resp.json();
					console.log (data)
					setStore({vehicle: data.result})
				} catch (error) {
					console.log(error);
				}
			},

//Favoritos -------------------------------------------------------

			
				toggleFavorite: (item) => {
					const store = getStore();
					const exists = store.favorites.find(fav => fav.uid === item.uid);
					if (exists) {
						setStore({ favorites: store.favorites.filter(fav => fav.uid !== item.uid) });
					} else {
						setStore({ favorites: [...store.favorites, item] });
							}
					},
        
//Eliminar favorito -------------------------------------------------------

				
				deleteFavorite: (uid) => {
					const store = getStore();
					setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
				}


		}
	};
};

export default getState;
