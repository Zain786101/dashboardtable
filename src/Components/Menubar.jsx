import React from "react";
function Menubar() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="menu-list">
              <ul className="list">
                <li className="list-item">Accounts</li>
                <li className="list-item">Groups</li>
                <li className="list-item">Archive</li>
                <li className="list-item">Proxies</li>
                <li className="list-item">Referral</li>
                <li className="list-item">GPT - 4 Setup</li>
              </ul>
            </div>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}
export default Menubar;
