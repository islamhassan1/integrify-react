import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CardDetails = () => {
	const [ user, setUser ] = useState({});
	const [ isLoading, setIsLoading ] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

			console.log(result.data);
			setUser(result.data);
			setIsLoading(false);
		};

		fetchItems();
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<section>
			<div key={user.users_id} className="showcard">
				<p>- name:{user.name}</p>
				<p>- username:{user.username}</p>
				<p>- email:{user.email}</p>
				<p>- phone:{user.phone}</p>
				<p>- company:{user.company.name}</p>
				<p>- website:{user.website}</p>
				<p>- address:</p>
				<ul>
					<li>street:{user.address.street}</li>
					<li>suite:{user.address.suite}</li>
					<li>city:{user.address.city}</li>
					<li>zipcode:{user.address.zipcode}</li>
				</ul>
			</div>
		</section>
	);
};

export default CardDetails;
