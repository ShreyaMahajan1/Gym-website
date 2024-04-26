import { Link } from "react-router-dom";

export default function Header(){

 return(
    <>
 
{/* ======= Header ======= */}


<header id="header" className="fixed-top">
<div className="container d-flex align-items-center">
  <h1 className="logo me-auto">
  <img src="assets/img/logo192.png" alt="" />
    <a href="/Home">Fitness</a>
  </h1>
  
  <nav id="navbar" className="navbar order-last order-lg-0">
    <ul>
      <li>
        <Link className="active" to={"/Home"}>
          Home
        </Link>
      </li>
      <li>
        <Link to ={"/About"}>About</Link>
      </li>
      <li>
        <Link to={"/Course"}>Courses</Link>
      </li>
      <li>
        <Link to={"/Trainer"}>Trainers</Link>
      </li>

      <li>
        <Link to={"/"}>Login</Link>
      </li>
      <li>
        <Link to={"/Events"}>Events</Link>
      </li>
      <li>
        <Link to={"/Price"}>Pricing</Link>
      </li>
      <li className="dropdown">
        <a href="#">
          <span>Drop Down</span> <i className="bi bi-chevron-down" />
        </a>
        <ul>
          <li>
            <a href="#">Drop Down 1</a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Deep Drop Down</span>{" "}
              <i className="bi bi-chevron-right" />
            </a>
            <ul>
              <li>
                <a href="#">Deep Drop Down 1</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 2</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 3</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 4</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Drop Down 2</a>
          </li>
          <li>
            <a href="#">Drop Down 3</a>
          </li>
          <li>
            <a href="#">Drop Down 4</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to={"/Contact"}>Contact</Link>
      </li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle" />
  </nav>
  {/* .navbar */}
  <Link to={"/Course"} className="get-started-btn">
    Get Started
  </Link>
</div>
</header>
{/* End Header */}
</>
 )
}