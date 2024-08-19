
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Navbar from './Navbar';
import MainDashboard from './MainDashboard';
import Footer from './Footer';
import Map from './Map'
import Map2 from './Map2';
import './Dashboard.css';
import StockAnalysis from './StockAnalysis';
import FAQComponent from './FAQ';
import TrendingSection from './TrendingSection';
import CommunityCollaboration from './CommunityCollaboration';
import Stocksnews from './Stocksnews';
import Feed from './Feed';
import StockComments from './StockComments';

function Dashboard() {

return(

 <div className="wrapper">
  <Navbar></Navbar>
  <Sidebar></Sidebar>
<div className='main-panel'>
{/* <Navbar></Navbar> */}
<MainDashboard></MainDashboard>
<div className='Gap'></div>
  <div className='d-flex'>
<StockAnalysis></StockAnalysis>
<Stocksnews></Stocksnews>
</div>
<div className='d-flex'>
<FAQComponent/>
<StockComments></StockComments>
</div>
{/* <CommunityCollaboration></CommunityCollaboration> */}
<TrendingSection/>

<Footer/>
 
 </div>
 </div>
)
}

export default Dashboard;
