import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('href');
    console.log(target)
    console.log(document.querySelector(target))
    const location = document.querySelector(target).offsetTop
    console.log(location)

    window.scrollTo({
      left:0,
      top:location - 82
    })
  }

  return (
    <>
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top">
        <div className="container-fluid  navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">
                <a href="#about" className="logo-ref" onClick={handleClick}>
                  <img
                    src= {logo}
                    alt=""
                  />
                </a>
              </h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li>
                    <a href="#about" onClick={handleClick}>About</a>
                  </li>
                  <li>
                    <a href="#projects" onClick={handleClick}>Projects</a>
                  </li>
                  <li>
                    <a href="#contact" onClick={handleClick}>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
