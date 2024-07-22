import React, { useState } from "react";
import Logo from "../logo.svg";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Header(props) {
  const { address, isConnected, connect } = props;
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected
            ? address.slice(0, 4) + "..." + address.slice(38)
            : "Connect"}
        </div>
      </div>
      <div className="selene_header_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="selene_header_menu_container scale-up-center">
            <div className="selene_header_menu_container_links">
              <Link to="/" className="link">
                <div className="headerItem">Bridge</div>
              </Link>
              <Link to="/tokens" className="link">
                <div className="headerItem">Tokens</div>
              </Link>

              <div className="connectButton" onClick={connect}>
                {isConnected
                  ? address.slice(0, 4) + "..." + address.slice(38)
                  : "Connect"}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
