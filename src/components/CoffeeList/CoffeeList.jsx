import React from "react"

import { useSelector } from "react-redux"
import CoffeeListitem from "../CoffeeListitem/CoffeeListitem"
const CoffeeList = () => {
	const inputs = useSelector(state => state.filterInput)

	const filteredCoffeeList = useSelector(state => state.filteredCoffeeList)

	const endCoffeeList = filteredCoffeeList.filter(
		item =>
			item.country.toLowerCase().includes(inputs.toLowerCase()) ||
			item.price.toLowerCase().includes(inputs.toLowerCase())
	)

	return (
		<ul className="coffee-filters__menu">
			{endCoffeeList.map(coffee => {
				return <CoffeeListitem key={coffee.id} {...coffee} />
			})}
		</ul>
	)
}

export default CoffeeList
