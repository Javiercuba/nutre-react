import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  }
}
  return (
    <div>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Nossos alimentos
        </a>
        <a href="#news">Sobre</a>
        <a href="#contact">Contato</a>
        <a href="#about"></a>
        <a href="" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
