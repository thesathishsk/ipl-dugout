import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchCardSmall.scss'
export const MatchCardSmall=({teamName,match})=>{
    if(!match)return null;
    const Opponent=teamName===match.team1?match.team2:match.team1;
    const OtherTeamLink=`/home/teams/${Opponent}`;
    const isWon=teamName===match.winner;
    return (
        <div className={isWon? 'MatchCardSmall won-card': 'MatchCardSmall lost-card'}>
            <span>vs</span>
            <h4 className='opponent'> <Link to={OtherTeamLink}>{Opponent}</Link></h4>
            <p className='result'>{match.winner} won by {match.result_margin} {match.result}</p>
        </div>
    );
}