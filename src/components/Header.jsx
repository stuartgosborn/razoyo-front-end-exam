export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h1 className="homeHdr">Selleck Motors</h1>
            <p className="tagLine ">We&apos;ve Got the Goods</p>
          </div>
          <a
            className="navbar-toggler home-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            to= '/'
          >
            <span className="navbar-toggler-icon"></span>
          </a>
          <div className="collapse navbar-collapse home-link" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
