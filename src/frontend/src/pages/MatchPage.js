import {React, useState} from 'react';
import { useEffect } from 'react';
import { useParams ,Link} from 'react-router-dom';
import { LatestMatchCard } from '../components/LateshMatchCard';
import './MatchPage.scss';

export const MatchPage=()=>{
   const[match,SetMatch]=useState( [] );
   const {year}=useParams();
   const {teamName}=useParams();
                useEffect(()=>{
                    const fetchMatches=async()=>{
                        const response=await fetch(`http://127.0.0.1:8000/teams/${teamName}/matches?year=${year}`);
                        const data=await response.json();
                        SetMatch(data);
                        console.log(data);
                    };
                    fetchMatches();
                    } ,[teamName,year]
                );


                let firstYear=2022;
    if(teamName==="Deccan Chargers"){
        firstYear=2008;
    }
    else{
        firstYear=2022;
    }

    if(match.length===0){
        return(<div className='exception'>
            <h1 className='nodata'>No Match Data Avialable for selected year</h1>
            <h3 className='backbuttonexception'><Link to={`/home/teams/${teamName}/matches/${firstYear}`}>back</Link></h3>
             
            </div>);
    }


    if(!match){
        return <h2>error</h2>;
    }
    const start=process.env.START_YEAR;
    const end=process.env.END_YEAR;
    let years=[];
    for(let i=start;i<=end;i++){
        years.push(i);
    }
    return (
        <div className='MatchPage' >
            <div className='leftside'>
            
               <h2>Select Year</h2>
               <div className='d'> <a href='../matches/2024'> 2024 </a></div>
               <div className='d'> <a href='../matches/2023'> 2023 </a></div>
               <div className='d'> <a href='../matches/2022'> 2022 </a></div>
               <div className='d'><a href='../matches/2021'> 2021 </a></div>
              <div className='d'> <a href='../matches/2020'> 2020 </a></div>
               <div className='d'><a href='../matches/2019'> 2019 </a></div>
               <div className='d'><a href='../matches/2018'> 2018 </a></div>
               <div  className='d'> <a href='../matches/2017'> 2017 </a></div>
               <div className='d'> <a href='../matches/2016'> 2016 </a></div>
               <div className='d'><a href='../matches/2015'> 2015 </a></div>
               <div className='d' ><a href='../matches/2014'> 2014 </a></div>
               <div className='d'> <a href='../matches/2013'> 2013 </a></div>
               <div className='d'><a href='../matches/2012'> 2012 </a></div>
               <div className='d'> <a href='../matches/2011'> 2011 </a></div>
               <div className='d'><a href='../matches/2010'> 2010 </a></div>
               <div className='d'><a href='../matches/2009'> 2009 </a></div>
               <div className='d'><a href='../matches/2008'> 2008 </a></div>

            </div>
            <div className='rightside'>
                <h1 className='heading'>{teamName} matches in {year}</h1>
             {match.map(match=><LatestMatchCard teamName={teamName} match={match}/>)}
             </div>
        </div>
    );
}

