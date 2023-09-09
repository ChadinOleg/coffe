const initialState = {
	coffeeStatus: "idle",
	coffeeList: [],
	best: [],
	filterCountry: "all",
	filteredCoffeeList: [],
	filterInput: "",
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCHING__COFFEE":
			return {
				...state,
				coffeeStatus: "loading",
			}
		case "FETCHED__COFFEE":
			return {
				...state,
				coffeeStatus: "idle",
				coffeeList: action.payload,
				filteredCoffeeList: state.coffeeList,
			}

		case "FETCHED__BEST":
			return {
				...state,
				coffeeStatus: "idle",
				best: action.payload,
			}

		case "FILTER__COUNTRY":
			return {
				...state,
				filterCountry: action.payload,
				filteredCoffeeList:
					action.payload === "all"
						? state.coffeeList
						: state.coffeeList.filter(item => item.country === action.payload),
			}

		case "FIlTER__INPUT":
			return {
				...state,
				filterInput: action.payload,
			}
		default:
			return state
	}
}

export default reducer
