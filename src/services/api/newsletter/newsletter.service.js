import axios from '@services/utils/axios';

const LocalToken = () => {
  const config = {
    headers: {
      // Authorization: `Auth 059eb68d346a653d13c6548051688269-us21`,
    },
  };
  return config;
};

class NewsletterService {
  // define all the functions you need
  async subscribe(body) {
    const response = axios.post('/subscribe', body, LocalToken());
    return response;
  }
}

export const newsletterService = new NewsletterService();
