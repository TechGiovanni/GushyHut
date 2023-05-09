import React from 'react';
import '@pages/home/home.scss';
import NewsletterForm from '@components/NewsletterForm/NewsletterForm';
import logo from '@assets/images/Cream-Simple-Character-Phone.png';

const Home = () => {
  return (
    <>
      <header className="header-wrapper">
        <div className="home-content">
          <div className="content__text">
            <h1>Get smarter about Business and Entrepreneurship</h1>
            {/* eslint-disable-next-line prettier/prettier */}
            <h2>
              {/* eslint-disable-next-line prettier/prettier */}
              Join 250,000+ subscribers and get our 5 min daily newsletter
              keeping innovators in the loop. Hello
              <strong>Hello</strong>
            </h2>
            <NewsletterForm></NewsletterForm>
            Read by top personels
          </div>
          <div className="content__image">
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
