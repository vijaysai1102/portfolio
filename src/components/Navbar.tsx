import HoverLink from "./HoverLink";
import "./styles/Navbar.css";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar-logo" data-cursor="disable">
          VSC
        </a>
        <div className="navbar-links">
          <a
            href="https://www.linkedin.com/in/vijay-sai-chigullapally-63558521b/"
            target="_blank"
            rel="noreferrer"
            className="navbar-logo"
            data-cursor="disable"
          >
            LinkedIn
          </a>
          <button className="nav-btn" onClick={() => scrollTo("aboutDiv")} data-cursor="disable">
            <div className="hover-in">About<div>About</div></div>
          </button>
          <button className="nav-btn" onClick={() => scrollTo("workDiv")} data-cursor="disable">
            <div className="hover-in">Work<div>Work</div></div>
          </button>
          <button className="nav-btn" onClick={() => scrollTo("contactDiv")} data-cursor="disable">
            <div className="hover-in">Contact<div>Contact</div></div>
          </button>
        </div>
      </nav>
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
