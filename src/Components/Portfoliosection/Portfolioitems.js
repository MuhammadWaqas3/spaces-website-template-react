import './Portfolioitems.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolioitems(){




    return(

        <div className="container-c">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4
            col-xxl-4">
            <div className="child-div">
              <img src="https://demo.themesberg.com/bootstrap/spaces/assets/img/illustrations/easy-transaction.svg" alt="image" width="200px" />
              <h3 style={{color: 'rgb(4, 4, 92)', fontWeight: 500}}>Extraordinarily
                easy</h3>
              <p>Our search makes it verry simple to find <br />your space.
                And from office match, we <br />are here
                to help you.</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4
            col-xxl-4">
            <div className=" child-div">
              <img src="https://demo.themesberg.com/bootstrap/spaces/assets/img/illustrations/support.svg" alt="image" width="200px" />
              <h3 style={{color: 'rgb(4, 4, 92)', fontWeight: 500}}>Truly
                transparent</h3>
              <p>We give you all this info, lifting the lid on <br />actual
                offices, real availability, and <br />
                accurate pricing.</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4
            col-xxl-4">
            <div className=" child-div">
              <img src="https://demo.themesberg.com/bootstrap/spaces/assets/img/illustrations/payment.svg" alt="image" width="200px" />
              <h3 style={{color: 'rgb(4, 4, 92)', fontWeight: 500}}>Best
                prices</h3>
              <p>Choose Spaces and our experts will save <br /> you around
                15% off the list price. What are <br />you
                waiting for?</p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Portfolioitems;




