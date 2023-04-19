import './Progressbar.css';



function Progress_bar () {
   
  
    return (

<div className="container-d" >
        <div id="progress-bar-heading">
          <h2 >Space Occupancy Level</h2>
        </div><span><div >
          <p className="percentage" >85%</p>
        </div></span>
        
       
        <div className="progress" role="progressbar" aria-label="Example with
              label" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{width: '85%'}} />
        </div>
        <div id="text">
          <h4 style={{color: 'rgb(2, 2, 63)'}}>Book your tour experience
            today!</h4>
          <p style={{marginTop: '15px'}}>Schedule a tour, make an appointment to rent space<br />
            at Themesberg, or ask for more information.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6
                col-xxl-6">
            <div><button type="button" className="btn btn-1 btn-lg">Schedule a
                tour</button></div>
          </div>
        </div>
      </div>
    );
}





export default Progress_bar;