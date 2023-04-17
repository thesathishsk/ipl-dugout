import { React } from 'react';
import { Link } from 'react-router-dom';
import './TeamTitle.scss';
export const TeamTitle=({teamName})=>{
    if(!teamName)return null;
    return (
      <div className='TeamTitle'>  
      <Link to={`/home/teams/${teamName}`}>
      <h1 className='teamn'>{teamName}</h1>
      </Link>
      </div>  
    );
}