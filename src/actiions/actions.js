import { createAction } from "@reduxjs/toolkit"

export const fetchCoffee = createAction("FETCHING__COFFEE")

export const fetchedCoffee = createAction("FETCHED__COFFEE")
export const fetchedBest = createAction("FETCHED__BEST")

export const filterCountry = createAction("FILTER__COUNTRY")

export const filterAll = createAction("FILTER__ALL")
export const filterInput = createAction("FIlTER__INPUT")
// export const fetchCoffee = () => {
// 	return {
// 		type: "FETCHING__COFFEE",
// 	}
// }
// export const fetchedCoffee = coffee => {
// 	return {
// 		type: "FETCHED__COFFEE",
// 		payload: coffee,
// 	}
// }

// export const fetchedBest = best => {
// 	return {
// 		type: "FETCHED__BEST",
// 		payload: best,
// 	}
// }

// export const filterBrazil = brazil => {
// 	return {
// 		type: "FILTER__BRAZIL",
// 		payload: brazil,
// 	}
// }

// export const filterKenya = kenya => {
// 	return {
// 		type: "FILTER__KENYA",
// 		payload: kenya,
// 	}
// }

// export const filterColumbia = columbia => {
// 	return {
// 		type: "FILTER__COLUMBIA",
// 		payload: columbia,
// 	}
// }

// export const filterAll = all => {
// 	return {
// 		type: "FILTER__ALL",
// 		payload: all,
// 	}
// }

// export const filterInput = input => {
// 	return {
// 		type: "FIlTER__INPUT",
// 		payload: input,
// 	}
// }
