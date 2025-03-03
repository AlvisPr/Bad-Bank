function NavBar() {
    return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Badbank</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/deposit">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw">Withdraw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/balance">Balance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/alldata">AllData</a>
        </li>
      </ul>
    </div>
  </nav>
  </>
    )
}