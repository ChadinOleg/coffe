import React from "react"

import { Link } from "react-router-dom"

import "./CoffeeListItem.scss"
const CoffeeListitem = ({ src, description, country, price, id }) => {
	return (
		<Link className="coffee-list-item__link" to={`/our-coffee/${id}`}>
			<li className="coffee-filters__item">
				<img
					src={src}
					alt="coffee-filters__img"
					className="coffee-filters__img"
				/>
				<p className="coffee-filters__description">{description}</p>
				<p className="coffee-filters__country">{country}</p>
				<p className="coffee-filters__price">{price}</p>
			</li>
		</Link>
	)
}

export default CoffeeListitem
