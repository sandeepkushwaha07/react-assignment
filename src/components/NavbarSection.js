// NavbarSection.js
import React from 'react';
// import Dashboard from './Dashboard';

const NavbarSection = () => {
  return (
    <>
   {/* <Dashboard></Dashboard> */}
    <div className="row">
    <div className="gr1"></div>
      <div className="gr2"></div>
      <div className="gr3"></div>
      <div className="col-md-6">
        <div className="flex-row">
          <div className="card">
            {/* <!-- Market Opportunities Section --> */}
            <div className="market-opportunities">
              <div className="headingDiv">
                <img src='./image/hammer.png' alt=""/>
                <h3 className="gradientText">Market Opportunities</h3>
              </div>
              <div className="marqueeText">
                <marquee behavior="" direction="left">
                  <div className="currencyMarquee">
                    <div className="currencyDiv">
                      <div className="currencyItemDiv">
                        <div className="currencyItem">
                          <img src="image/dollar_11266963.png" width="50px"/>
                          <p>USDC.e</p>
                        </div>
                        <img src="image/arrow_5179955.png" width="30px" style={{ width: "20px", objectFit: "contain" }} />
                        <div className="currencyItem">
                          <img src="image/adjust_8805063.png" width="50px"/>
                          <p>DAI</p>
                        </div>
                      </div>
                      
                      <div className="currencyDivPrice">
                        <p>Profit</p>
                        <h5>1.1145%</h5>
                      </div>
                    </div>
                    {/* Similar code for other currencyDiv elements */}
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card flash-loan-section">
              <div className="headingDiv">
                <img src='./image/hammer.png' alt="" />
                <h3 className="gradientText">Flash Loan</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="flash_loan">
                    <span>Network : <strong>Bnbt</strong></span><br/>
                    <span>Token name : </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="flash_loan">
                    <span>Loan Amount: : <strong>0</strong></span><br/>
                    <span>Gas fee: <strong>0 MATIC </strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card user-stats-section1">
              <div className="arbitrage_details">
                <div className="headingDiv">
                  <img src='./image/hammer.png' alt="" />
                  <h3 className="gradientText">Flash Loan</h3>
                </div>
                <span>DEX:</span>
                <span>Profit Percent(%):<strong>0%</strong></span>
                <span>Profit Amount:<strong>0%</strong></span>
                <span>Payout Token:</span> <strong></strong>
                <span>Profit Amount(USD):<strong>0%</strong></span>
                <span>Boomerang Fee:<strong>0%</strong></span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card user-stats-section2">
              <div className="arbitrage_details">
                <div className="headingDiv">
                  <img src='./image/hammer.png' alt="" />
                  <h3 className="gradientText">USER STATS</h3>
                </div>
                <span>Total Trades:<strong>0</strong></span>
                <span>Total Profit:<strong>$0</strong></span>
                <span>Total Volume:<strong>$0</strong></span>
                <span>Total Trade limit:<strong>0</strong></span>
                <span>Limit left:<strong>$ 0.0000</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card ai-section3">
          <div className="headingDiv">
            <img src='./image/hammer.png' alt="" />
            <h3 className="gradientText">Best AI Suggestion</h3>
          </div>
          <div className="buy">BUY
            <br/><br/><br/>
            <p>-- ← --</p>
            <br/><br/><br/>
          </div>
          <div className="Sale">Sale 
            <br/><br/><br/>
            <p>-- ← --</p>
            <br/>
          </div>
        </div>
        <div className="card ai-section4">
          <div className="headingDiv">
            <img src='./image/hammer.png' alt="" />
            <h3 className="gradientText">BOOMERANG AI</h3>
          </div>
          <br/><br/><br/>
          <div className="arrowLast">
            <p>-- ← --</p>
            <br/><br/>
          </div>
        </div>
        </div>
        <div className="col-md-3">
          <div className="card ai-section5">
            <div className="headingDiv">
              <img src='./image/hammer.png' alt=""/>
              <h3 className="gradientText">Borrow</h3>
            </div>
            <span style={{ fontSize: "14px", marginBottom: "10px" }}>Balance: $ 0.0000</span>
            <div className="select_button">
              <div className="custom-select">
                <select>
                  <option value="0">Select :</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                </select>
              </div>
            </div>
            <div className="usdPrice">
              <h6>USD Price : 0 USD</h6>
            </div>
            <div className="BorrowData">
              <span>Slippage:<strong>2.5%</strong></span>
              <span>Borrowed Asset:<strong></strong></span>
              <span>Amount<strong>0</strong></span>
              <span>Lender Fee (0.05):<strong>0</strong></span>
              <span>Payback Amount:<strong>$ 0.0000</strong></span>
            </div>
            <div className="btnbutton">
              <button type="button" className="btnPrimary">Confirm</button>
            </div>
          </div>
          <div className="card ai-section6">
            <div className="headingDiv">
              <img src='./image/hammer.png' alt=""/>
              <h3 className="gradientText">AI AGGREGATOR</h3>
            </div>
            <span style={{ fontSize: "14px", marginBottom: "10px" }}>Balance: $ 0.0000</span>
            <div className="select_button">
              <div className="custom-select">
                <select>
                  <option value="0">Select :</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                </select>
              </div>
            </div>
            <div className="arrowImag">
              <img src="image/arrow_5179955.png" style={{ width: "20px", objectFit: "contain" }} />
            </div>
            <div className="select_button">
              <div className="custom-select">
                <select>
                  <option value="0">Select :</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                </select>
              </div>
            </div>
            <div className="BorrowData">
              <span>Amount:<strong>0</strong></span>
            </div>
          </div>
        </div>
      </div>
      </>
   
  );
};

export default NavbarSection;
