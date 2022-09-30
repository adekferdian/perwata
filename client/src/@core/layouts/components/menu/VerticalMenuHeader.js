// ** React Imports
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Perwata from "../../../../../public/images/icons/perwataa.jpeg";

const VerticalMenuHeader = (props) => {
  // ** Props
  const {
    menuCollapsed,
    setMenuCollapsed,
    menuVisibility,
    setMenuVisibility,
    setGroupOpen,
  } = props;

  // ** Reset open group
  useEffect(() => {
    if (!menuVisibility && menuCollapsed) setGroupOpen([]);
  }, [menuVisibility, menuCollapsed]);

  return (
    <div className="navbar-header mb-2">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto" style={{ marginLeft: "6px" }}>
          <Link href="/dashboard">
            <a className="navbar-brand active">
              <span className="brand-logo">
                {/* <img src="/images/logo/logo.svg" alt="logo" /> */}
                <Image src={Perwata} width={30} height={30} alt="" />
              </span>
              <h2
                className="brand-text text-black mb-0"
                style={{ color: "black" }}
              >
                PERWATA{" "}
              </h2>
            </a>
          </Link>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer"></div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
