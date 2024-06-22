import React, { useState } from "react";
import "./menubar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUsers,
  faBoxArchive,
  faLink,
  faWindowRestore,
  faWindowMaximize,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function Menubar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="sidebar">
      <div className="container-fluid side-bar">
        <div className="row">
          {/* Start Toggle Button for small screen */}
          <div className="col-6 d-block d-sm-none mb-3">
            <button className="btn btn-outline-secondary" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faSliders} />
            </button>
          </div>
          {/* End Toggle Button for small screen */}

          {/* Menu list, hidden on small screens, shown on medium and larger screens */}
          <div
            className={`col-12 ${
              showMenu ? "d-block" : "d-none"
            } d-sm-block side-bar`}
          >
            <div className="menu-list text-center text-sm-start listItem">
              <ul className="list">
                <li className="list-item">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                  <span className="menu-text">Accounts</span>
                </li>
                <li className="list-item">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <span className="menu-text">Groups</span>
                </li>
                <li className="list-item">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faBoxArchive} />
                  </div>
                  <span className="menu-text">Archive</span>
                </li>
                <li className="list-item">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                  <span className="menu-text">Proxies</span>
                </li>
                <li className="list-item">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faWindowRestore} />
                  </div>
                  <span className="menu-text">Referral</span>
                </li>
                <li className="list-item">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faWindowMaximize} />
                  </div>
                  <span className="menu-text">GPT4-Setup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menubar;
