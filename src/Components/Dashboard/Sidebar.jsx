import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState({});

  const handleToggleCollapse = (id) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        <a href="index.html" className="logo">
          <img src="" alt="navbar brand" className="navbar-brand" />
        </a>
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#base"
                className={collapsed['base'] ? '' : 'collapsed'}
                onClick={() => handleToggleCollapse('base')}
                aria-expanded={collapsed['base']}
              >
                <i className="fas fa-layer-group"></i>
                <p>Top Stocks</p>
                <span className="caret"></span>
              </a>
              <div
                className={`collapse ${collapsed['base'] ? 'show' : ''}`}
                id="base"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="/">
                      <span className="sub-item">Top stocks</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="sub-item">Trade Idea</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="sub-item">Top ETFs</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/panels.html">
                      <span className="sub-item">Sectors</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/notifications.html">
                      <span className="sub-item">Industries</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/sweetalert.html">
                      <span className="sub-item">Investment Themes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarLayouts"
                className={collapsed['sidebarLayouts'] ? '' : 'collapsed'}
                onClick={() => handleToggleCollapse('sidebarLayouts')}
                aria-expanded={collapsed['sidebarLayouts']}
              >
                <i className="fas fa-th-list"></i>
                <p>Trade Ideas</p>
                <span className="caret"></span>
              </a>
              <div
                className={`collapse ${
                  collapsed['sidebarLayouts'] ? 'show' : ''
                }`}
                id="sidebarLayouts"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="sidebar-style-2.html">
                      <span className="sub-item">Sidebar Style 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="icon-menu.html">
                      <span className="sub-item">Icon Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#forms"
                className={collapsed['forms'] ? '' : 'collapsed'}
                onClick={() => handleToggleCollapse('forms')}
                aria-expanded={collapsed['forms']}
              >
                <i className="fas fa-pen-square"></i>
                <p>Pricing</p>
                <span className="caret"></span>
              </a>
              <div
                className={`collapse ${collapsed['forms'] ? 'show' : ''}`}
                id="forms"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="forms/forms.html">
                      <span className="sub-item">Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#tables"
                className={collapsed['tables'] ? '' : 'collapsed'}
                onClick={() => handleToggleCollapse('tables')}
                aria-expanded={collapsed['tables']}
              >
                <i className="fas fa-table"></i>
                <p>Tables</p>
                <span className="caret"></span>
              </a>
              <div
                className={`collapse ${collapsed['tables'] ? 'show' : ''}`}
                id="tables"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="tables/tables.html">
                      <span className="sub-item">Basic Table</span>
                    </a>
                  </li>
                  <li>
                    <a href="tables/datatables.html">
                      <span className="sub-item">Datatables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
