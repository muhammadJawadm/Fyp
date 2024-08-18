import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSyncAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import idFlag from '../../assets/img/flags/id.png';
import usFlag from '../../assets/img/flags/us.png';
import auFlag from '../../assets/img/flags/au.png';
import ruFlag from '../../assets/img/flags/ru.png';
import cnFlag from '../../assets/img/flags/cn.png';
import brFlag from '../../assets/img/flags/br.png';
import './Map.css'


const Map = () => (
  <div className="row">
    <div className="col-md-12 mt-4">
      <div className="card card-round MarginSetting">
        <div className="card-header">
          <div className="card-head-row card-tools-still-right">
            <h4 className="card-title">Users Geolocation</h4>
            <div className="card-tools">
              <button className="btn btn-icon btn-link btn-primary btn-xs">
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                <FontAwesomeIcon icon={faSyncAlt} />
              </button>
              <button className="btn btn-icon btn-link btn-primary btn-xs">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
          <p className="card-category">Map of the distribution of users around the world</p>
        </div>
        <div className="card-body">
           
              <div className="table-responsive table-hover table-sales">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th className="text-end">Users</th>
                      <th className="text-end">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flag">
                          <img src={idFlag} alt="Indonesia" />
                          Indonesia
                        </div>
                      </td>
                      <td className="text-end">2.320</td>
                      <td className="text-end">42.18%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flag">
                          <img src={usFlag} alt="United States" />
                          USA
                        </div>
                      </td>
                      <td className="text-end">240</td>
                      <td className="text-end">4.36%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flag">
                          <img src={auFlag} alt="Australia" />
                          Australia
                        </div>
                      </td>
                      <td className="text-end">119</td>
                      <td className="text-end">2.16%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flag">
                          <img src={ruFlag} alt="Russia" />
                          Russia
                        </div>
                      </td>
                      <td className="text-end">1.081</td>
                      <td className="text-end">19.65%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flag">
                          <img src={cnFlag} alt="China" />
                          China
                        </div>
                      </td>
                      <td className="text-end">1.100</td>
                      <td className="text-end">20%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flag">
                          <img src={brFlag} alt="Brazil" />
                          Brazil
                        </div>
                      </td>
                      <td className="text-end">640</td>
                      <td className="text-end">11.63%</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          
      </div>
    </div>
  </div>
);

export default Map;
