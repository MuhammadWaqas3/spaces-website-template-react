import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Heroimage from './Components/Herosection/Heroimage';
import './App.css';
import Portfolioitems from './Components/Portfoliosection/Portfolioitems';
import Progress_bar from './Components/Portfoliosection/Progressbar';
import CityCard from './Components/Locationsection/Destinationsection';

import Pricing from './Components/Pricingsection/Pricing/Pricing';
import Pricing2 from './Components/Pricingsection/Pricing2/Pricing2'
import Workflow from './Components/Workflow/Workflow';
import Reviews from './Components/Reviews/Reviews';
import Ourbranches from './Components/OurBranches/Ourbranches';
import Footer from './Components/Footer/Footer';
function App() {





  return (

    <div className='App' >
      <Heroimage />
      <Portfolioitems />
      <Progress_bar />
       <CityCard/>
       <Pricing />
       <Pricing2 />
       <Workflow />
       < Reviews />
       <Ourbranches />
       <Footer />

    </div>);

}

export default App;