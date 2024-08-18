import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck, faLuggageCart, faCheckCircle, faPencilAlt, faPrint, faAngleDown, faSyncAlt, faTimes, faEnvelope, faBan, faEllipsisH, faCheck } from '@fortawesome/free-solid-svg-icons';
import OriginalChart from './Chart';
import CircularProgressBar from './CircularProgressBar';
import './MainDashboard.css'

const InlineStyle= {
overflow:'Visible',
}

const MainDashboard = () => {
  return (
    <div className="container" style={InlineStyle} >
      <div className="page-inner">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-6 pb-4">
          <div>
            <h3 className="fw-bold mb-3">Dashboard</h3>
            <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
          </div>
          <div className="ms-md-auto py-2 py-md-0">
            <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
            <a href="#" className="btn btn-primary btn-round">Add Customer</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Visitors</p>
                      <h4 className="card-title">1,294</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-info bubble-shadow-small">
                      <FontAwesomeIcon icon={faUserCheck} />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Subscribers</p>
                      <h4 className="card-title">1303</h4>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-success bubble-shadow-small">
                      <FontAwesomeIcon icon={faLuggageCart} />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Sales</p>
                      <h4 className="card-title">$ 1,345</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Order</p>
                      <h4 className="card-title">576</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-8">
            <div className="card card-round">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">User Statistics</div>
                  <div className="card-tools">
                    <a href="#" className="btn btn-label-success btn-round btn-sm me-2">
                      <span className="btn-label"><FontAwesomeIcon icon={faPencilAlt} /></span>
                      Export
                    </a>
                    <a href="#" className="btn btn-label-info btn-round btn-sm">
                      <span className="btn-label"><FontAwesomeIcon icon={faPrint} /></span>
                      Print
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container" style={{ minHeight: '375px' }}>
                  <canvas id="statisticsChart"></canvas>
                </div>
                <div id="myChartLegend"></div>
              </div>
            </div>
          </div>
           */}
           <div className="col-xl-9 stretch-card grid-margin">
                <div className="card">
                  <div className="">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <div className="card-title mb-0 "><h1> Apple Stock price & Analysis</h1></div>
                        <h3 className="font-weight-bold mb-0">Apple Inc</h3>
                        <h5>$217.96 + <h6 className='text-success'  >$0.47(0.22%) </h6> </h5>                       
                        </div>
                      <div>
                        <div className="d-flex flex-wrap pt-2 justify-content-between sales-header-right">
                          <div className="d-flex mr-5">
                            <button type="button" className="btn btn-social-icon btn-outline-sales">
                              <i className="mdi mdi-inbox-arrow-down"></i>
                            </button>
                            <div className="pl-2">
                              <h4 className="mb-0 font-weight-semibold head-count"> $8,217 </h4>
                              <span className="font-10 font-weight-semibold text-muted">TOTAL SALES</span>
                            </div>
                          </div>
                          <div className="d-flex mr-3 mt-2 mt-sm-0">
                            <button type="button" className="btn btn-social-icon btn-outline-sales profit">
                              <i className="mdi mdi-cash text-info">Hello</i>
                            </button>
                            <div className="pl-2">
                              <h4 className="mb-0 font-weight-semibold head-count"> 2,804 </h4>
                              <span className="font-10 font-weight-semibold text-muted">TOTAL PROFIT</span>
                            </div>
                          </div>
                          
                        </div>
                        <div><CircularProgressBar percentage={75} /></div>
                      </div>
                    </div>
                    <p className="text-muted font-13 mt-2 mt-sm-0"> Your sales monitoring dashboard template. <a className="text-muted font-13" href="#"><u>Learn more</u></a>
                    </p>
                    <OriginalChart fileName="mcb.csv"/>
                    <div className='d-flex ml-4'>
                    <div className='ml-4'><CircularProgressBar percentage={70} Name={'Ai Score '}/> </div>
                    <div className='ml-4'><CircularProgressBar percentage={70} Name={'Technical Score '}/> </div>
                    <div className='ml-4'><CircularProgressBar percentage={70} Name={'Sentiment Score '}/> </div>
                    </div>
                  </div>

                </div>
              </div>  
          <div className="col-md-3">
            <div className="card card-primary card-round">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">Daily Sales</div>
                  <div className="card-tools">
                    <div className="dropdown">
                      <button className="btn btn-sm btn-label-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Export
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-category">March 25 - April 02</div>
              </div>
              <div className="card-body pb-0">
                <div className="mb-4 mt-2">
                  <h1>$4,578.58</h1>
                </div>
                <div className="pull-in">
                  <canvas id="dailySalesChart"></canvas>
                </div>
              </div>
            </div>
            <div className="card card-round">
    <div className="card-body pb-0">
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png" alt="Logo" className="logo"/>
      <div className="h1 fw-bold float-end text-primary">+5%</div>
      <h2 className="">17</h2>
      <p className="text-muted">Users online</p>
      <div className="properties">
        <div className="properties-left">
          <p>AAPL</p>
          <p>Market Cap</p>
          <p>Short Interest</p>
          <p>Volume</p>
          <p>Dividend%</p>
          <h1>Performance</h1>
          <p>Pref Week</p>
          <p>Volume</p>
          <p>Dividend%</p>
          <p>Property 3:</p>
        </div>
        <div className="properties-right">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
      <div className="pull-in sparkline-fix">
        <div id="lineChart"></div>
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
