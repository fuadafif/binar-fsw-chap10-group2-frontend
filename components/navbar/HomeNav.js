import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import style from "../../styles/Navbar.module.css";
import DropdownButton from "../dropdown/Dropdown";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function HomeNav() {
  const { email } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = document.getElementById("user");
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const loginUser = document.getElementById("loginUser");
    if (email !== true) {
      loginUser.innerHTML = `Welcome, ${email}`;
      user.hidden = false;
      register.hidden = true;
      login.hidden = true;
    } else {
      register.hidden = false;
      login.hidden = false;
      user.hidden = true;
    }
  });

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar} color="dark" dark>
        {/* NavBrand */}
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/img/gaming.jpg"
            style={{
              height: 50,
              width: 50,
              padding: 6,
              marginRight: 6,
            }}
          />
          Team T2
        </NavbarBrand>
        {/* Nav */}
        <Nav>
          <NavItem>
            <NavLink
              className={style.link}
              href="/home"
              activeStyle
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={style.link}
              href="/game-list"
              activeStyle
            >
              Game List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={style.link}
              href="/players"
              activeStyle
            >
              Players
            </NavLink>
          </NavItem>
        </Nav>

        <Nav>
          <NavItem hidden id="login">
            <NavLink
              className={style.link}
              href="/login"
              activeStyle
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem hidden id="register">
            <NavLink
              className={(style.link, style.signup)}
              href="/register"
              activeStyle
            >
              Sign Up
            </NavLink>
          </NavItem>

          <NavItem hidden id="user" className="navbar navbar-expand-sm">
            <NavLink
              className={(style.link, style.signup)}
              id="loginUser"
              href="/profile"
              activeStyle
            ></NavLink>
            <DropdownButton />
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default HomeNav;
