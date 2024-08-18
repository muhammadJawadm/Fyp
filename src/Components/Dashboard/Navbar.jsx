import React, { useState, useEffect } from 'react';
import jmDenis from '../../assets/img/jm_denis.jpg';
import chadEngle from '../../assets/img/chadengle.jpg';
import mLane from '../../assets/img/mlane.jpg';
import talha from '../../assets/img/talha.jpg';
import profile from '../../assets/img/profile.jpg';
import profile2 from '../../assets/img/profile2.jpg';
import axios from 'axios';
import './Navbar.css';

const handleLogout = async () => {
  try {
    const response = await axios.get('http://localhost:3002/logout', { withCredentials: true });
    console.log(response.data.message); // Should log "Logout successful"
    localStorage.removeItem('authToken'); // Clear token if used
    window.location.href = '/login'; // Redirect after logout
  } catch (error) {
    console.error("Logout error:", error.response ? error.response.data : error.message);
    alert("Logout failed. Please try again.");
  }
};

const Navbar = () => {
  const [collapsed, setCollapsed] = useState({
    messageDropdown: false,
    notifDropdown: false,
    quickActions: false,
    profilePic: false,
  });

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Get the token from localStorage
        
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }
  
        const response = await axios.get('http://localhost:3002/profile', {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
          },
          withCredentials: true
        });
  
        console.log('User details response:', response.data);
        if (response.data && response.data.username) {
          setUsername(response.data.username);
        } else {
          console.warn('Username not found in response:', response.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error.response ? error.response.data : error.message);
      }
    };
  
    fetchUserDetails();
  }, []);
  

  const handleToggleCollapse = (section) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="main-header">
      <div className="main-header-logo">
        <div className="logo-header" data-background-color="dark">
          <a href="index.html" className="logo">
            <img
              src=""
              alt="navbar brand"
              className="navbar-brand"
              height="20"
            />
          </a>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon"></i>
                </button>
              </div>
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
              />
            </div>
          </nav>

          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <i className="fa fa-search"></i>
              </a>
              <ul className="dropdown-menu dropdown-search animated fadeIn">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="form-control"
                    />
                  </div>
                </form>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={collapsed.messageDropdown.toString()}
                onClick={() => handleToggleCollapse('messageDropdown')}
              >
                <i className="fa fa-envelope"></i>
              </a>
              <ul
                className={`dropdown-menu messages-notif-box animated fadeIn ${collapsed.messageDropdown ? 'show' : ''}`}
                aria-labelledby="messageDropdown"
              >
                <li>
                  <div className="dropdown-title d-flex justify-content-between align-items-center">
                    Messages
                    <a href="#" className="small">Mark all as read</a>
                  </div>
                </li>
                <li>
                  <div className="message-notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      <a href="#">
                        <div className="notif-img">
                          <img src={jmDenis} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Jimmy Denis</span>
                          <span className="block"> How are you ? </span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src={chadEngle} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Chad</span>
                          <span className="block"> Ok, Thanks ! </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src={mLane} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Jhon Doe</span>
                          <span className="block">
                            Ready for the meeting today...
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src={talha} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Talha</span>
                          <span className="block"> Hi, Apa Kabar ? </span>
                          <span className="time">17 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">
                    See all messages<i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="notifDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={collapsed.notifDropdown.toString()}
                onClick={() => handleToggleCollapse('notifDropdown')}
              >
                <i className="fa fa-bell"></i>
                <span className="notification">4</span>
              </a>
              <ul
                className={`dropdown-menu notif-box animated fadeIn ${collapsed.notifDropdown ? 'show' : ''}`}
                aria-labelledby="notifDropdown"
              >
                <li>
                  <div className="dropdown-title">
                    You have 4 new notifications
                  </div>
                </li>
                <li>
                  <div className="notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      <a href="#">
                        <div className="notif-icon notif-primary">
                          <i className="fa fa-user-plus"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block"> New user registered </span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-icon notif-success">
                          <i className="fa fa-comment"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block">
                            Rahmad commented on Admin
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src={profile} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Reza</span>
                          <span className="block"> Send messages to you </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src={profile2} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Farrah</span>
                          <span className="block">
                            Well, it's cool, isn't it?
                          </span>
                          <span className="time">17 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">
                    See all notifications<i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item topbar-icon hidden-caret">
              <a
                className="nav-link"
                href="#"
                id="quickActionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={collapsed.quickActions.toString()}
                onClick={() => handleToggleCollapse('quickActions')}
              >
                <i className="fa fa-layer-group"></i>
              </a>
              <ul
                className={`dropdown-menu quick-actions quick-actions-info animated fadeIn ${collapsed.quickActions ? 'show' : ''}`}
                aria-labelledby="quickActionsDropdown"
              >
                <li>
                  <div className="quick-actions-header">
                    <span className="title mb-1">Quick Actions</span>
                    <span className="subtitle op-8">Shortcuts</span>
                  </div>
                </li>
                <li>
                  <div className="quick-actions-scroll scrollbar-outer">
                    <div className="quick-actions-items">
                      <div className="row m-0">
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-calendar"></i>
                            <span className="text">Calendar</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-file-excel"></i>
                            <span className="text">Reports</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-envelope"></i>
                            <span className="text">Emails</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-file-invoice-dollar"></i>
                            <span className="text">Invoice</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-credit-card"></i>
                            <span className="text">Payments</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-map"></i>
                            <span className="text">Maps</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-chart-bar"></i>
                            <span className="text">Charts</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-tasks"></i>
                            <span className="text">Tasks</span>
                          </div>
                        </a>
                        <a className="col-6 col-md-4 p-0" href="#">
                          <div className="quick-actions-item">
                            <i className="fa fa-file-word"></i>
                            <span className="text">Docs</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown hidden-caret">
              <a
                className="dropdown-toggle profile-pic"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded={collapsed.profilePic.toString()}
                onClick={() => handleToggleCollapse('profilePic')}
              >
                <div className="avatar-sm">
                  <img
                    src={profile}
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
              </a>
              <ul
                className={`dropdown-menu dropdown-user animated fadeIn ${collapsed.profilePic ? 'show' : ''}`}
              >
                <li>
                  <div className="user-box">
                    <div className="avatar-lg">
                      <img src={profile} alt="image profile" className="avatar-img rounded" />
                    </div>
                    <div className="u-text">
                      <h4>{username}</h4>
                      <p className="text-muted">hello@example.com</p>
                      <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    My Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    My Balance
                  </a>
                  <a className="dropdown-item" href="#">
                    Inbox
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Account Setting
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
