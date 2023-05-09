import axios from '@services/utils/axios'

class NewsletterService {
	// define all the functions you need
	async subscribe(body) {
		const response = axios.post('/user/register', body)
		return response
	}
}

export const authService = new NewsletterService()
