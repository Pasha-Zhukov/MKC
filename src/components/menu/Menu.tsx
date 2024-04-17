import Accordion from "react-bootstrap/Accordion";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import Assignment from "../../assets/menu/Assignment.svg";
import Correspondence from "../../assets/menu/Correspondence.svg";
import Credit from "../../assets/menu/Credit.svg";
import Organizations from "../../assets/menu/Organizations.svg";
import Settings from "../../assets/menu/Settings.svg";
import Staff from "../../assets/menu/Staff.svg";
import "./Menu.css";

export default function Menu() {
  const location = useLocation();

  return (
    <>
      <Nav vertical className="p-3">
        <NavItem>
          <NavLink
            className="d-flex align-items-center main-color p-3"
            tag={Link}
            to="/"
          >
            <img
              className="me-2 ms-1"
              src={Organizations}
              alt="Organizations"
            />
            Организации
          </NavLink>
        </NavItem>
        <NavItem>
          <Accordion defaultActiveKey={["3"]} alwaysOpen>
            <Accordion.Item className="border-0" eventKey="0">
              <Accordion.Header>
                <img className="me-2" src={Staff} alt="Staff" />
                Персонал
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="border-0" eventKey="1">
              <Accordion.Header>
                <img className="me-2" src={Credit} alt="Credit" />
                Кредиты
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="border-0" eventKey="2">
              <Accordion.Header>
                <img
                  className="me-2"
                  src={Correspondence}
                  alt="Correspondence"
                />
                Корреспонденция
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="border-0" eventKey="3">
              <Accordion.Header>
                <img className="me-2" src={Assignment} alt="Staff" />
                Цессия
              </Accordion.Header>
              <Accordion.Body>
                <NavLink
                  className={
                    location.pathname === "/Analytics"
                      ? "activeLinkStyle main-color"
                      : "main-color"
                  }
                  tag={Link}
                  to="/Analytics"
                >
                  Аналитика
                </NavLink>
                <NavLink
                  className={
                    location.pathname === "/Contracts"
                      ? "activeLinkStyle main-color"
                      : "main-color"
                  }
                  tag={Link}
                  to="/Contracts"
                >
                  Договоры
                </NavLink>
                <NavLink
                  className={
                    location.pathname === "/import-files"
                      ? "activeLinkStyle main-color"
                      : "main-color"
                  }
                  tag={Link}
                  to="/import-files"
                >
                  Импорт
                </NavLink>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </NavItem>
        <NavItem>
          <NavLink
            className="d-flex align-items-center main-color p-3"
            tag={Link}
            to="/settings"
          >
            <img className="me-2 ms-1" src={Settings} alt="Settings" />
            Настройки
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}
