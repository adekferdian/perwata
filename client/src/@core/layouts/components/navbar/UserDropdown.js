import React from "react";
// ** Next Imports
import Link from "next/link";

// ** Custom Components

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

const UserDropdown = () => {
  const [name, setName] = React.useState(null);
  const [pic, setPic] = React.useState(null);
  const [role, setRole] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.name);
      setPic(localStorage.pic);
      setRole(localStorage.role);
    }
  }, [])
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">{name}</span>
          <span className="user-status">{role}</span>
        </div>
        {/* <Avatar
          img="/images/portrait/small/avatar-s-11.jpg"
          imgHeight="40"
          imgWidth="40"
          status="online"
        /> */}
      </DropdownToggle>
      <DropdownMenu right>
        {/* <DropdownItem tag={Link} href="/pages/profile">
          <a className="dropdown-item">
            <User size={14} className="mr-75" />
            <span className="align-middle">Profile</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/apps/email">
          <a className="dropdown-item">
            <Mail size={14} className="mr-75" />
            <span className="align-middle">Inbox</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/apps/todo">
          <a className="dropdown-item">
            <CheckSquare size={14} className="mr-75" />
            <span className="align-middle">Tasks</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/apps/chat">
          <a className="dropdown-item">
            <MessageSquare size={14} className="mr-75" />
            <span className="align-middle">Chats</span>
          </a>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} href="/pages/account-settings">
          <a className="dropdown-item">
            <Settings size={14} className="mr-75" />
            <span className="align-middle">Settings</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/pages/pricing">
          <a className="dropdown-item">
            <CreditCard size={14} className="mr-75" />
            <span className="align-middle">Pricing</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/pages/faq">
          <a className="dropdown-item">
            <HelpCircle size={14} className="mr-75" />
            <span className="align-middle">FAQ</span>
          </a>
        </DropdownItem> */}
        <DropdownItem tag={Link} href="/">
          <a className="dropdown-item">
            <Power size={14} className="mr-75" />
            <span onClick={() => localStorage.clear()} className="align-middle">Logout</span>
          </a>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
