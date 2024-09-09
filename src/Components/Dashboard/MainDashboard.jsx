import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck, faLuggageCart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import OriginalChart from './Chart';
import CircularProgressBar from './CircularProgressBar';
import './MainDashboard.css';

const MainDashboard = () => {
  return (
    <div className="container-fluid px-4">
      <div className="page-inner">
        <div className="d-flex align-items-center justify-content-between flex-wrap py-4">
          <div>
            <h3 className="fw-bold mb-3">Dashboard</h3>
            <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
          </div>
          <div className="py-2">
            <a href="#" className="btn btn-info me-2">Manage</a>
            <a href="#" className="btn btn-primary">Add Customer</a>
          </div>
        </div>

        <div className="row">
          {/* Card 1 */}
          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <p className="card-category">Visitors</p>
                    <h4 className="card-title">1,294</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-info bubble-shadow-small">
                      <FontAwesomeIcon icon={faUserCheck} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <p className="card-category">Subscribers</p>
                    <h4 className="card-title">1,303</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-success bubble-shadow-small">
                      <FontAwesomeIcon icon={faLuggageCart} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <p className="card-category">Sales</p>
                    <h4 className="card-title">$1,345</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <p className="card-category">Orders</p>
                    <h4 className="card-title">576</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row with chart and circular progress bars */}
        <div className="row">
          <div className="col-xl-9 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h1>Apple Stock Price & Analysis</h1>
                    <h3 className="font-weight-bold">Apple Inc</h3>
                    <h5>$217.96 + <span className="text-success">$0.47 (0.22%)</span></h5>
                  </div>
                  <div className="d-flex">
                    <CircularProgressBar percentage={75} />
                  </div>
                </div>
                <p className="text-muted mt-2">Your sales monitoring dashboard template. <a href="#" className="text-muted"><u>Learn more</u></a></p>
                <OriginalChart fileName="mcb.csv" />
                <div className="d-flex justify-content-around mt-4">
                  <CircularProgressBar percentage={70} Name={'AI Score'} />
                  <CircularProgressBar percentage={70} Name={'Technical Score'} />
                  <CircularProgressBar percentage={70} Name={'Sentiment Score'} />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar section */}
          <div className="col-md-3">
            <div className="card card-primary card-round">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Daily Sales</h5>
                  <button className="btn btn-sm btn-light">Export</button>
                </div>
                <p className="card-category">March 25 - April 02</p>
              </div>
              <div className="card-body pb-0">
                <h1>$4,578.58</h1>
                <canvas id="dailySalesChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Log and Market Cap Card */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Latest Activity Log & Market Cap</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Market Cap</h6>
                    <p>Apple Inc - $1.2 Trillion</p>
                    <p>Microsoft - $1.6 Trillion</p>
                    <p>Amazon - $1.1 Trillion</p>
                  </div>
                  <div className="col-md-6">
                    <h6>Activity Log</h6>
                    <ul>
                      <li>Apple stock price increased by 0.22% today</li>
                      <li>Microsoft shares are steady</li>
                      <li>Amazon announced Q2 earnings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainDashboard;
