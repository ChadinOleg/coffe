import React from "react"

import { Link } from "react-router-dom"
import "./HomeCoffeeItem.scss"
const HomeCoffeeItem = ({ src, description, price, id }) => {
	console.log(id)
	return (
		<Link to={`/best-coffee/${id}`} className="best-link">
			<li className="our-best__item">
				<img src={src} alt="our-best__img" className="our-best__img" />
				<p className="our-best__description">{description}</p>
				<p className="our-best__price">{price}</p>
			</li>
		</Link>
	)
}

export default HomeCoffeeItem
