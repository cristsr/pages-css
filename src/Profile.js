import React from "react";
import "./styles.css";
import {
  MdModeEdit,
  MdApps,
  MdPayment,
  MdCallMissedOutgoing,
  MdPowerSettingsNew
} from "react-icons/md";

export const Profile = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Profile</h1>
        <div className="card">
          <div className="edit">
            <MdModeEdit />
          </div>
          <img
            src="https://picsum.photos/200/200"
            className="profile"
            alt="profile"
          />
          <h2>Jhon Doe</h2>
          <span>@jhondoe</span>
        </div>
      </div>
      <div className="body">
        <ul>
          <li>
            <div className="icon">
              <MdApps />
            </div>
            <span>dashboard</span>
          </li>
          <li>
            <div className="icon">
              <MdPayment />
            </div>
            <span>payment history</span>
          </li>
          <li>
            <div className="icon">
              <MdCallMissedOutgoing />
            </div>
            <span>statics</span>
          </li>
          <li>
            <div className="icon">
              <MdPowerSettingsNew />
            </div>
            <span>logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
