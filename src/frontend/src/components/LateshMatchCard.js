import { React } from 'react';
import { Link } from 'react-router-dom';
import './LatestMatchCard.scss';
export const LatestMatchCard=({teamName,match})=>{
    if(!match)return null;
    const Opponent=teamName===match.team1?match.team2:match.team1;
    const teamLink=`/home/teams/${Opponent}`;
    const isWon=(teamName===match.winner);
   return( <div className={isWon ?'LatestMatchCard won-card':'LatestMatchCard lost-card'}>
    <div>
    <span className='vs'>vs</span>
    <h2><Link to={teamLink}>{Opponent}</Link> </h2>
    <h4 className='match-date'>{match.date}</h4>
    <h4 className='match-venue'>at {match.venue}</h4>
    <h4 className='match-result'>{match.winner} won by {match.result_margin} {match.result}</h4>
    </div>
    <div className='additional-details'>
        <span>First Innings</span>
        <h4 className='team1'>{match.team1}</h4>
        <span>Second Innings</span>
        <h4 className='team2'>{match.team2}</h4>
        <span>Man of the Match</span>
        <h4 className='man-of-the-match'>{match.player_of_match}</h4>
    </div>
    </div>);
}