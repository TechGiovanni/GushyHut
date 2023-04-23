import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const handleSubmit = async (e) => {
		console.log('submitting')
		e.preventDefault()
		const url =
			'https://api.beehiiv.com/v2/publications/pub_ef6a608a-e3a4-4cd1-be9a-32c4aa95c1d9/subscriptions'

		const config = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization:
					'Bearer ' +
					'xRaSvAhf4Uhhloks9PJSTJBzCRAE9hfRhWaOqrwnBZgYUeqI0KSTzhfrqM0OEAUx',
			},
		}

		const rawJson = {
			email: 'bruce.wayne@wayneenterprise.com',
			reactivate_existing: false,
			send_welcome_email: false,
			utm_source: 'WayneEnterprise',
			utm_campaign: 'fall_2022_promotion',
			utm_medium: 'organic',
			referring_site: 'www.wayneenterprise.com/blog',
			custom_fields: [
				{
					name: 'First Name',
					value: 'Bruce',
				},
				{
					name: 'Last Name',
					value: 'Wayne',
				},
			],
		}
		console.log(rawJson)

		axios
			.post(url, rawJson, config)
			.then(function (response) {
				console.log('Response I Got Back:', response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<iframe
					id='SubscriptionForm'
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

				<div></div>
				<form onSubmit={handleSubmit}>
					<input type='text' />
					<button>Submit</button>
				</form>
			</header>
		</div>
	)
}

export default App
