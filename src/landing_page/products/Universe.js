import React from 'react';

 function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
          <h1>Zerodha Universe</h1>
          <p>
            Extend your trading experience even further with our
             partner platforms
          </p>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\photos\smallcaseLogo.png" />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\photos\streakLogo.png" style={{width:"50%"}}/>
          <p className='text-small text-muted'>Alogo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\photos\sensibullLogo.svg" />
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
         <div className="col-4 p-3 ">
          <img src="media\images\photos\zerodhaFundhouse.png" style={{ transform: "rotate(270deg)", marginTop: "-9px" ,width:"20%"}} />
          <p className='text-small text-muted'>Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\photos\goldenpiLogo.png"style={{width:"50%"}} />
          <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media\images\photos\dittoLogo.png" style={{width:"50%"}} />
          <p className='text-small text-muted'>Insurance</p>
        </div>
        <button 
        className='p-2 btn btn-primary fs-5 mb-5'
         style={{width:"25%", margin:"0 auto"}}
         >
          Signup Now
          </button>
      </div>
    </div>
  )
}

export default Universe;
