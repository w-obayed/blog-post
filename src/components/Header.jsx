import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header shadow py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/">
                <img
                  src="https://i.pinimg.com/1200x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                  alt=""
                  style={{ width: 120, height: 40 }}
                />
              </Link>
            </div>
            <div className="col-md-9">
              <div className="menu">
                <ul className="nav p-0 d-flex justify-content-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
