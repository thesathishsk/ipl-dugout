import { React, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { LatestMatchCard } from '../components/LateshMatchCard';
import { MatchCardSmall } from '../components/MatchCardSmall';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage=()=>{
    const [team,setTeam]=useState({matches:[ ]});
    const{teamName}=useParams();
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`http://127.0.0.1:8000/teams/${teamName}`);
                const data=await response.json();
                setTeam(data);
                console.log(data);
            };
            fetchMatches();
        },[teamName]
    );

    if(!team || !team.teamName){
        return <h2>404 Team Not Found</h2>;
    }
let firstYear=2022;
    if(team.teamName==="Deccan Chargers"){
        firstYear=2008;
    }
    else{
        firstYear=2022;
    }







    return(
        <div className='starting'><span className='backbutton'><Link to={`/home/teams`}>back</Link></span>
       <div className='TeamPage'>
        
       <div className='team-name-section'> 
       
       <h1 className='team-name'>{team.teamName}</h1>
       
       </div>
       <div className='win-loss-section'>
       <PieChart
            data={[
                { title: 'Wins', value: team.totalWins, color: '#18852f' },
                { title: 'Loss', value: team.totalMatch-team.totalWins, color: '#87191e'  },
            ]}
/>
<p className='wl'>win/loss</p>
       </div>
       
       <div className='LatestMatchCard'>
       <h2 className='lm'>Latest Matches</h2>
        <LatestMatchCard teamName={team.teamName} match={team.matches[0]} />
        </div>
        {team.matches.slice(1).map(match => < MatchCardSmall teamName={team.teamName} match={match} />)}
        <div className='more-match'>
            <Link to={`matches/${firstYear}`}>
            More Matches></Link>
            </div>
       </div>
       </div>
    );
}