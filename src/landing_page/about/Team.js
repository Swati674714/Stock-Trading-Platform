import React from 'react'

export default function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top ">
        <h1 className="text-center ">
        People
        </h1>
        </div>

        
          <div className="row p-5  text-muted"
          style={{ fontSize: "1.2em" , lineHeight: "1.8em"}}
          >
            <div className="col-6 p-5">
              <img src="media\images\photos\nithinKamath.jpg" 
            style={{borderRadius:"100%" , width:"50%"}}/>
            <h4 className='mt-5'>Nitin Kamath</h4>
            <h5>Founder, CEO</h5>
            </div>
            <div className="col-6 p-5">
              <p>Nitin bootstrapped and founded Zerodha in 2010 to overcome the
                 hurdles . he faced during his decade long stint as a trader. Today, 
                 Zerodha has changed the landscape of the Indian booking industry.
                 </p>
                 <p>
                  He is a meneber of the SEBI secondary market advisory committee
                   (SMAC) and the Market data advisory committee (MDAC).
                 </p>
                 <p>
                  Playing basketball is his zen
                 </p>
                 <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
            </div>
          </div>
        </div>
  )
}
