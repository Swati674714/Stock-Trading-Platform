import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <h1 className="text-center fs-2">
          We pioneered the discount broking in India<br />
          Now , we are breaking ground with our technology.
        </h1>
        </div>

        
          <div className="row p--5 mt-5 border-top text-muted"
          style={{ fontSize: "1.2em" , lineHeight: "1.8em"}}
          >
            <div className="col-6 p-5">
              <p>
                We kick-started on the 15th of August, 2010 with the goal of
                of breaking the barriers to stock market investing in India. We 
                were the first to introduce flat brokerage of Rs. 20 per trade,
                irrespective of the trade size. 
              </p>
              <p>
                Over the years, we have consistently challenged the status quo
                and introduced path-breaking innovations in the India,
              </p>
              <p>
                 Over1+ crore clients have traded with us till date and we are trusted by
                  over 2 lakh clients every month. contributing over 15% of all indian retail trading volumes.  
              </p>
            </div>
            <div className="col-6">
              <p>
                In addition, we run a number of popular market education initiatives
                including Varsity, Trading Q&A and Sensibull Academy. 
              </p>
              <p>
                <a href=""  style={{textdecoration:"none"}}>Rainmatter</a> Technologies, our parent company, is one of the most
                active fintech investors in India. We have invested in over 20
                startups till date.
              </p>
              <p>
                We are a team of 500+ people, with offices in Mumbai, Delhi,
                Bengaluru and Chennai. we are always uo to something new.
              </p>
            </div>
          </div>
        </div>

  );
}

export default Hero;
