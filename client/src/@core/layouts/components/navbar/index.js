// ** React Imports
import { Fragment } from "react";

// ** Next Imports
import Link from "next/link";

// ** Dropdowns Imports
import UserDropdown from "./UserDropdown";
import NotificationDropdown from "./NotificationDropdown";

// ** Third Party Components
import { NavItem, NavLink } from "reactstrap";
import { Menu, Settings } from "react-feather";
import { useSelector } from "react-redux";
import React from "react";

const NavbarComponent = (props) => {
  // ** Props
  const { setMenuVisibility } = props;

  

  const SettingsItem = ({ href }) => (
    <NavItem tag="li" className="nav-link nav-item mr-25">
      <NavLink tag={Link} href={href} className="nav-link">
        <a>
          <Settings className="ficon" />
        </a>
      </NavLink>
    </NavItem>
  );

  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        <ul className="nav navbar-nav d-xl-none">
          <NavItem className="mobile-menu mr-auto">
            <NavLink
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={() => setMenuVisibility(true)}
            >
              <Menu className="ficon" />
            </NavLink>
          </NavItem>
        </ul>
      </div>
      <ul className="nav navbar-nav align-items-center">
        {/* <h1>PERWATA</h1> */}
      </ul>
    </Fragment>
  );
};
export default NavbarComponent;
