import React from "react";
import "./menubar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUsers,
  faBoxArchive,
  faLink,
  faWindowRestore,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

function Menubar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-8">
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
  );
}

export default Menubar;
