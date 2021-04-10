import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ user }) {
	return (
		<div class="c-card magic-shadow-sm">
			<div>
				<div class="product-image flex items-center justify-center">
					<div class="photo-card">{user.name[0]}</div>
				</div>
				<h2 class="text-center">{user.name}</h2>
				<div class="stars flex justify-center items-center">
					<h6 class="text-center">@{user.username}</h6>
				</div>
				<div class="price text-center">{user.website}</div>
				<div class="flex button justify-center">
					<Link to={`/${user.id}`}>
						<button>MORE DETAILS</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

const Cards = () => {
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://jsonplaceholder.typicode.com/users`);

			console.log(result.data);
			setUsers(result.data);
		};

		fetchItems();
	}, []);

	return (
		<div>
			<section class="top-products ">
				<div class="container">
					<div class="slider">
						<div class="card-slider grid-container">
							{users.map((user, i) => <Card key={i} user={user} />)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cards;
