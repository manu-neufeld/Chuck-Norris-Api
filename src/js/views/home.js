import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let jokes;

	// useEffect(
	// 	() => {
	// 		console.log("Jokes to print2: ", store.chuckNorrisJokes);
	// 	},
	// 	[store.chuckNorrisJokes]
	// );

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			{store.chuckNorrisJokes.map((joke, index) => (
				<p key={index}>{joke}</p>
			))}
		</div>
	);
};
