import React from 'react';
<img src="image/arrow_5179955.png" style={{ width: "20px", objectFit: "contain" }} />


const Dashboard = () => {
  return (
    <>
      <div className="mainBG" />
      <div className="gr1"></div>
      <div className="gr2"></div>
      <div className="gr3"></div>
      <div className="container-fluid" style={{ zIndex: 99 }}>
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <a className="navbar-brand" href="#">SPKBLOCK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggler" style={{ border: 'none' }}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-auto" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#"> </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">MApp </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Old-Movie</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Opportunities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            {/* <button className="btnPrimary">Connect Wallet</button> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
