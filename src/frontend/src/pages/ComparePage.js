import { React,useEffect,useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { CompareCard } from '../components/CompareCard';

import './ComparePage.scss';
export const ComparePage=()=>{
    const [team,setTeam]=useState({matches:[ ]});
    const{teamName}="Chennai Super Kings";
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`http://127.0.0.1:8000/teams/Chennai%20Super%20Kings`);
                const data=await response.json();
                setTeam(data);
                console.log(data);
            };
            fetchMatches();
        },[teamName]
    );

   









    return(
        <div className='ComparePage'>
            <div className='back'>
                <Link to={`/home`}>
                <h3>back</h3></Link>
                </div>
            <div className='ComparepageTeams'>
                <Link to={`/home/teams`}>
            <h3>Teams</h3>
            </Link>
            </div>
      
            <div className='bigbox'>
                  <div className='leftside'>
                    Team 1
                  </div>
                  <div className='rightside'>
                    Team 2
                  </div>

                  <div className='submit'>
                    Get Stats
                  </div>

            </div>
           <div className='comparebox'>
            <div className='compareleft'>
                leftside
                <CompareCard teamName={team.teamName}/>
            </div>
            <div className='compareright'>
                rightside
            <CompareCard team={team}/>
            </div>
            </div> 
        </div>
    );
}