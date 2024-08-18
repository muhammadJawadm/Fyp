import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const Map2 = () => (
  <div className="row">
    <div className="col-md-6">
      <div className="card card-round">
        <div className="card-header">
          <div className="card-head-row">
            <h4 className="card-title">Active Users</h4>
          </div>
          <div className="card-tools">
            <a href="#" className="btn btn-icon btn-link btn-primary btn-xs">
              <FontAwesomeIcon icon={faSyncAlt} />
            </a>
            <a href="#" className="btn btn-icon btn-link btn-primary btn-xs">
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Joined</th>
                  <th className="text-end">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="avatar avatar-online">
                      <span className="avatar-title rounded-circle border border-white bg-info">J</span>
                    </div>
                    <span className="text-uppercase fw-bold">john_doe</span>
                  </td>
                  <td>25/02/2018</td>
                  <td className="text-end">
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="avatar avatar-offline">
                      <span className="avatar-title rounded-circle border border-white bg-secondary">P</span>
                    </div>
                    <span className="text-uppercase fw-bold">Peter_123</span>
                  </td>
                  <td>13/03/2018</td>
                  <td className="text-end">
                    <span className="badge badge-secondary">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="avatar avatar-offline">
                      <span className="avatar-title rounded-circle border border-white bg-danger">A</span>
                    </div>
                    <span className="text-uppercase fw-bold">Alice_123</span>
                  </td>
                  <td>23/09/2018</td>
                  <td className="text-end">
                    <span className="badge badge-secondary">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="avatar avatar-offline">
                      <span className="avatar-title rounded-circle border border-white bg-warning">D</span>
                    </div>
                    <span className="text-uppercase fw-bold">Daisy_321</span>
                  </td>
                  <td>14/11/2018</td>
                  <td className="text-end">
                    <span className="badge badge-secondary">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="avatar avatar-offline">
                      <span className="avatar-title rounded-circle border border-white bg-secondary">H</span>
                    </div>
                    <span className="text-uppercase fw-bold">Harry_123</span>
                  </td>
                  <td>14/11/2018</td>
                  <td className="text-end">
                    <span className="badge badge-secondary">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="avatar avatar-online">
                      <span className="avatar-title rounded-circle border border-white bg-success">T</span>
                    </div>
                    <span className="text-uppercase fw-bold">Tanya_456</span>
                  </td>
                  <td>14/11/2018</td>
                  <td className="text-end">
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <div className="avatar-group">
              <div className="avatar avatar-offline">
                <span className="avatar-title rounded-circle border border-white bg-secondary">J</span>
              </div>
              <div className="avatar avatar-online">
                <span className="avatar-title rounded-circle border border-white bg-info">P</span>
              </div>
              <div className="avatar avatar-offline">
                <span className="avatar-title rounded-circle border border-white bg-danger">A</span>
              </div>
              <div className="avatar avatar-offline">
                <span className="avatar-title rounded-circle border border-white bg-warning">D</span>
              </div>
              <div className="avatar avatar-offline">
                <span className="avatar-title rounded-circle border border-white bg-secondary">H</span>
              </div>
            </div>
            <button className="btn btn-label-info btn-round">View All</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card card-round">
        <div className="card-header">
          <div className="card-head-row">
            <h4 className="card-title">Messages</h4>
          </div>
          <div className="card-tools">
            <a href="#" className="btn btn-icon btn-link btn-primary btn-xs">
              <FontAwesomeIcon icon={faSyncAlt} />
            </a>
            <a href="#" className="btn btn-icon btn-link btn-primary btn-xs">
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>
        </div>
        <div className="card-body">
          <ol className="activity-feed">
            <li className="feed-item feed-item-secondary">
              <time className="date">Sep 25</time>
              <span className="text">
                Responded to need <a href="#">"Volunteer opportunity"</a>
              </span>
            </li>
            <li className="feed-item feed-item-success">
              <time className="date">Sep 24</time>
              <span className="text">
                Added an interest <a href="#">"Volunteer Activities"</a>
              </span>
            </li>
            <li className="feed-item feed-item-info">
              <time className="date">Sep 23</time>
              <span className="text">
                Joined the group <a href="#">"Boardsmanship Forum"</a>
              </span>
            </li>
            <li className="feed-item feed-item-warning">
              <time className="date">Sep 21</time>
              <span className="text">
                Responded to need <a href="#">"In-Kind Opportunity"</a>
              </span>
            </li>
            <li className="feed-item feed-item-danger">
              <time className="date">Sep 18</time>
              <span className="text">
                Created need <a href="#">"Volunteer Opportunity"</a>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Map2;
