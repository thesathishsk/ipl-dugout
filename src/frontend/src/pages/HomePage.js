import { React } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss'
export const HomePage=()=>{
    return(
       <div className='HomePage'>
        <div className='title'> <h1>Ipl DashBoard</h1></div>
        <div className='compare'><h3><Link to ={`./compare`}>compare</Link></h3></div>
        <div className='allTeams'><Link to={`./teams`}><h3>
            Teams</h3></Link></div>
        <div className='image'>

        </div>
       
       </div>
    );
}