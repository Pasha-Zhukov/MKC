import Logo from "../../assets/header/logo.svg";
import Ava from "../../assets/header/ava.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="d-flex justify-content-between p-1 ps-4 pe-4 header-shadow">
      <img src={Logo} alt="Main Logo" />
      <div className=" d-flex align-items-center gap-1">
        <div className="fs-6 main-color">Фамилия Имя</div>
        <img className="mt-2" src={Ava} alt="Ava" />
      </div>
    </div>
  );
}
