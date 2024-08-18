import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#243447', color: '#fff', padding: '20px 0', fontSize: '14px' }}>
      <div style={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '2' }}>
          <img src="logo-url.png" alt="Danelfin Logo" style={{ width: '150px', marginBottom: '20px' }} />
          <p>Danelfin is a stock analytics platform powered by AI. It helps investors to pick the best stocks, optimize their portfolios, and make smart data-driven investment decisions.</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <p style={{ marginBottom: '5px' }}><b>BCN</b></p>
              <p style={{ marginBottom: '5px' }}>Danelfin Technologies, S.L.</p>
              <p style={{ marginBottom: '5px' }}>Carrer Balmes 129, 2-1. 08008</p>
              <p style={{ marginBottom: '5px' }}>Barcelona, Spain</p>
            </div>
            <div style={{ marginTop: '10px' }}>
              <p style={{ marginBottom: '5px' }}><b>NYC</b></p>
              <p style={{ marginBottom: '5px' }}>Danelfin Technologies, LLC</p>
              <p style={{ marginBottom: '5px' }}>655 3rd Avenue Suite 1830</p>
              <p style={{ marginBottom: '5px' }}>New York, USA</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '3', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>How it Works</p>
            <p>Pricing</p>
            <p>Help Center</p>
            <p>Affiliate Program</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
            <p>Contact Us</p>
            <p>Log in</p>
            <button style={{ backgroundColor: '#ff8c00', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>Start Trial</button>
          </div>
          <div>
            <h4>Stock Rankings</h4>
            <p>Top US Stocks</p>
            <p>Top European Stocks</p>
            <p>Top UK Stocks</p>
            <p>Top German Stocks</p>
            <p>Top French Stocks</p>
            <p>Top Italian Stocks</p>
            <p>Top Swiss Stocks</p>
            <p>Top Spanish Stocks</p>
            <p>Top Dutch Stocks</p>
            <p>Top Canadian Stocks</p>
            <p>Top Chinese Stocks</p>
            <p>Top Brazilian Stocks</p>
          </div>
          <div>
            <h4>Popular Searches</h4>
            <p>Is Tesla a Buy?</p>
            <p>Is Amazon a Buy?</p>
            <p>Is Apple a Buy?</p>
            <p>View all</p>
            <h4>Popular Comparisons</h4>
            <p>AMD vs Intel</p>
            <p>Visa vs Mastercard</p>
            <p>Fedex vs UPS</p>
            <p>View all</p>
            <h4>Popular Investment Themes</h4>
            <p>AI Stocks</p>
            <p>Copper Stocks</p>
            <p>Travel Stocks</p>
            <p>View all</p>
          </div>
        </div>
      </div>
      <div style={{ width: '80%', margin: '20px auto', borderTop: '1px solid #444', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <p>All Stocks: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0-9</p>
        <p>Danelfin's Artificial Intelligence calculates stocks' probabilities of beating the market based on past market behavior and stocks performance. It does not calculate or predict actual results. The performance of illustrative portfolios on this site is based on backtested results. Backtested performance is not an indicator of future results. Danelfin's AI Scores and ratings cannot substitute professional investment advice or independent research and verification. Using our site, you are accepting our Terms of use, Privacy and Disclaimer policies.</p>
      </div>
    </footer>
  );
};

export default Footer;
