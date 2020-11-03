const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chuckNorrisJokes: ["Manuelita"]
		},
		actions: {
			getChuckNorrisJoke: () => {
				fetch("https://api.chucknorris.io/jokes/random")
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json.value);
						let jokes = getStore().chuckNorrisJokes;
						jokes.push(json.value);

						setStore({ chuckNorrisJokes: jokes });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
