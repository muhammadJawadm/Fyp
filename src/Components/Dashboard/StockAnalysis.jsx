import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import CircularProgressBar from './CircularProgressBar';
import './StockAnalysis.css';

const StockAnalysis = () => {
  const [activeTab, setActiveTab] = useState('aiScore');

  const renderContent = () => {
    switch (activeTab) {
      case 'aiScore':
        return (
          <div>
            <div className="row mt-4">
              <div className="col-md-11">
                <div className='d-flex'>
                  <p>
                    Apple (AAPL) has an <strong>AI Score of 9/10 (Buy)</strong> because, according to an <strong>overall analysis</strong>, it has a <strong>probability advantage of +6.13% of beating the market (S&P500) in the next 3 months</strong>. This advantage is calculated as the <strong>difference between the average probability of all US-listed stocks (33.81%)</strong> and the <strong>probability of AAPL (39.94%)</strong> of outperforming the market in the next 3 months, as determined by Danelfin AI's comprehensive analysis.
                  </p>
                  <div className="col-md-1">
                    <CircularProgressBar percentage={90} Name="AI Score" />
                  </div>
                </div>
              </div>
            </div>
            <p><FontAwesomeIcon icon={faInfoCircle} /> <strong>Average probability of all US-listed stocks of beating the market (3M)</strong> <span className="float-end">33.81%</span></p>
            <p><FontAwesomeIcon icon={faInfoCircle} /> <strong>AAPL probability advantage of beating the market (3M)</strong> <span className="float-end text-success">+6.13%</span></p>
            <p><FontAwesomeIcon icon={faInfoCircle} /> <strong>AAPL probability of beating the market (3M)</strong> <span className="float-end">39.94%</span></p>
          </div>
        );
      case 'fundamental':
        return (
          <div>
            <h5>Fundamental Analysis of AAPL</h5>
            <p>
              The fundamental analysis of Apple (AAPL) considers various financial metrics like revenue growth, profit margins, and return on equity.
            </p>
            <p>
              AAPL has shown consistent revenue growth over the past 5 years, with strong profit margins. The company's return on equity is above the industry average, indicating effective management.
            </p>
          </div>
        );
      case 'technical':
        return (
          <div>
            <h5>Technical Analysis of AAPL</h5>
            <p>
              The technical analysis of Apple (AAPL) focuses on price trends, volume, and momentum indicators.
            </p>
            <p>
              AAPL's moving averages indicate a bullish trend, with strong support levels at $120 and resistance at $150. The RSI suggests the stock is neither overbought nor oversold.
            </p>
          </div>
        );
      case 'sentiment':
        return (
          <div>
            <h5>Sentiment Analysis of AAPL</h5>
            <p>
              The sentiment analysis of Apple (AAPL) is based on news and social media mentions, with a focus on the overall tone of the coverage.
            </p>
            <p>
              Recent news about AAPL has been positive, with analysts predicting strong earnings in the next quarter. Social media sentiment is also favorable, with many users expressing confidence in the company's future growth.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="col-xl-9 stretch-card grid-margin"style={{margin:'15px',}}>
      <div className='card'>
      <div className="d-flex flex-wrap justify-content-between" style={{padding:'20px'}}>
          <div className="row" >
            <div className="col-12" >
              <h2>AAPL AI-Powered Stock Analysis</h2>
              <ul className="nav nav-tabs mt-3">
                <li className={`ml-4 btn-primary btn-round btn-border ${activeTab === 'aiScore' ? 'active' : ''}`}>
                  <button className="nav-link" onClick={() => setActiveTab('aiScore')}>AI Score</button>
                </li>
                <li className={`ml-4 btn-primary btn-round btn-border ${activeTab === 'fundamental' ? 'active' : ''}`}>
                  <button className="nav-link" onClick={() => setActiveTab('fundamental')}>Fundamental</button>
                </li>
                <li className={`ml-4 btn-primary btn-round btn-border ${activeTab === 'technical' ? 'active' : ''}`}>
                  <button className="nav-link" onClick={() => setActiveTab('technical')}>Technical</button>
                </li>
                <li className={`ml-4 btn-primary btn-round btn-border ${activeTab === 'sentiment' ? 'active' : ''}`}>
                  <button className="nav-link" onClick={() => setActiveTab('sentiment')}>Sentiment</button>
                </li>
              </ul>
            </div>
          </div>

          {renderContent()}

          <div className="row mt-4 ml-4">
            <div className="col-10">
              <h5>AAPL probability advantage of beating the market (3M): <span className="text-success">+6.13%</span></h5>
              <p>
                The AI-powered overall analysis of Apple (AAPL) is based on the <strong>35 fundamental, technical, and sentiment features</strong> 
                <br/>
                that had the greatest impact on stock performance during the last 12 months (alpha signals). 
              </p>
              <p> These <strong>alpha signals</strong> explain the probability advantage of AAPL.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

  );
};

export default StockAnalysis;
