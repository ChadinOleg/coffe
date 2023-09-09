import React from "react"

import { useSelector } from "react-redux/es/hooks/useSelector"
import HomeCoffeeItem from "../HomeCoffeeItem/HomeCoffeeItem"
const HomeCoffeeList = () => {
	const bestCoffee = useSelector(state => state.best)
	return (
		<ul className="our-best__menu">
			{bestCoffee.map(bestCoffee => {
				return (
					<HomeCoffeeItem key={bestCoffee.id} {...bestCoffee}></HomeCoffeeItem>
				)
			})}
		</ul>
	)
}

export default HomeCoffeeList
