import { React, useEffect, useState } from 'react'
import { TeamTitle } from '../components/TeamTitle';
import './Teams.scss';


export const Teams=()=>{
    const [team,setTeam]=useState([]);

    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`http://127.0.0.1:8000/teams`);
                const data=await response.json();
                setTeam(data);
                console.log(data);
            };
            fetchMatches();
        },[]
    );
    // if(!team || !team.teamName){
    //     return <h2>404 Team Not Found</h2>;
    // }
    return(
        <div className='Teams'>
        <h1>Teams</h1>
        <div className='teams'>
            {team.map(team=>(<TeamTitle teamName={team.teamName}/>))}
            </div>

        </div>
        
    );
}
