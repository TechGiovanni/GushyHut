import logo from './logo.svg'
import './App.css'

import axios from 'axios'

function App() {
	const handleSubmit = async (e) => {
		console.log('submitted')
		e.preventDefault()

		const url =
			'https://api.beehiiv.com/v2/publications/pub_ef6a608a-e3a4-4cd1-be9a-32c4aa95c1d9/subscriptions'

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer xRaSvAhf4Uhhloks9PJSTJBzCRAE9hfRhWaOqrwnBZgYUeqI0KSTzhfrqM0OEAUx',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
				'Access-Control-Allow-Credentials': 'true',
			},
			withCredentials: true,
		}

		const rawJson = {
			email: 'Peru.wayne@wayneenterprise.com',
			reactivate_existing: false,
			send_welcome_email: false,
			utm_source: 'WayneEnterprise',
			utm_campaign: 'fall_2022_promotion',
			utm_medium: 'organic',
			referring_site: 'www.wayneenterprise.com/blog',
			custom_fields: [],
		}
		console.log(rawJson)

		axios
			.post(url, rawJson, config)
			.then(function (response) {
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<iframe
					title='This is a unique title'
					src='https://embeds.beehiiv.com/0890e8d8-e651-43a8-8a83-c25835c05402?slim=true'
					data-test-id='beehiiv-embed'
					height='52'
					frameBorder='0'
					scrolling='no'
					style={{
						margin: 0,
						borderRadius: 0,
						backgroundColor: 'transparent',
					}}
				></iframe>

				<form onSubmit={handleSubmit}>
					<input type='text' />
					<button>Submit</button>
				</form>
			</header>
		</div>
	)
}

export default App
