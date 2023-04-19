import './Workflow.css';


function Workflow() {
return (

        <div>
            <div className="section" style={{ backgroundColor: 'rgb(237, 245, 255)'
                , paddingBottom: '20px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12" style={{ textAlign: 'center' }}>
                        <h1 style={{ marginTop: '25px', color: 'rgb(2, 2, 71)' }}>
                            How it works?
                        </h1>
                        <p style={{
                            marginTop: '30px', fontSize: '1.25rem', color: 'rgb(25,25, 97)'}}>All you’ll need are the details of
                        the building and location,
                        the types of <br />space, pricing and some good quality
                        photographs.
                    </p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 buttons" style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="btn btn-workspace btn-lg btn-12">
                        <span className="far fa-building mr-2" style={{ display: 'inline-block', marginRight: '6px' }} />
                        <span style={{ display: 'inline-block' }}>Find Your Space</span>
                    </button>
                    <button className="btn btn-workspace btn-light btn-lg ">
                        <span className="far fa-money-bill-alt mr-2" style={{ display: 'inline-block', marginRight: '6px' }} />
                        <span style={{ display: 'inline-block', color: 'rgb(24, 24, 95)' }}>Submit
                            Your Space</span>
                    </button>
                </div>
            </div>
        </div>
    {/*--------------------------------------------------------------section--------------------------------------------------------------------------------------------------*/ }
    <div className="container" id="container-h">
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <div className="card card-1 card-ee">
                    <div className="card-body">
                        <div className="icon-circle">
                            <i className="fas fa-map-pin picture" />
                        </div>
                        <h3 className="header">1. Choose a workspace</h3>
                        <p className="card-text-1">It takes no longer than 15 minutes to list your space on themesberg. Our user friendly process.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="card card-1 card-ff">
                    <div className="card-body">
                        <div className="icon-circle">
                            <i className="far fa-calendar-check" />
                        </div>
                        <h3 className="header">2. Schedule a tour</h3>
                        <p className="card-text-1"> After uploading in our website makes it easy for you to keep the details up to date.
</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="card card-1 card-gg">
                    <div className="card-body ">
                        <div className="icon-circle">
                            <i className="fas fa-mouse-pointer picture" />
                        </div>
                        <h3 className="header">3. Book your workspace</h3>
                        <p className="card-text-1">Orders coming from here are 100% prepaid. We will bring you not just leads but new clients.
</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col text-center">
                <a href="#" className="btn  btn-lg btn-location">
                    <i className="fas fa-search-location mr-2 " style={{ marginRight: '8px' }} />Find a Location
                </a>
            </div>
        </div>
    </div>
  </div >
  </div >
    );
}


export default Workflow;














