import React from "react"

import { Link } from "react-router-dom"
import "./ErrorPage.scss"
const ErrorPage = () => {
	return (
		<div class="section">
			<h1 class="error">404</h1>
			<div class="page">Ooops!!! Страница, которую вы ищете, не найдена</div>
			<Link class="back-home" to="/">
				Вернуться домой
			</Link>
		</div>
	)
}

export default ErrorPage
