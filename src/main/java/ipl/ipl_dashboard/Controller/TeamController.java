package ipl.ipl_dashboard.Controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ipl.ipl_dashboard.Entity.Match;
import ipl.ipl_dashboard.Entity.Team;
import ipl.ipl_dashboard.Repoistory.MatchRepo;
import ipl.ipl_dashboard.Repoistory.TeamRepo;
import ipl.ipl_dashboard.Service.TeamService;

@RestController
@CrossOrigin
public class TeamController {
    @Autowired
    private TeamService service;
    @Autowired
    private TeamRepo teamRepo;
    @Autowired
    private MatchRepo matchRepo;

    @GetMapping("/teams")
    public List<Team> getTeams(){
        return service.getTeam();
    }

    @GetMapping("/teams/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team=teamRepo.findByTeamName(teamName);
        team.setMatches(matchRepo.findLatestMatchByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/teams/{teamName}/matches")
    public List<Match> getMatchByYear(@PathVariable String teamName,@RequestParam int year){
        LocalDate start=LocalDate.of(year,1,1);
        LocalDate end=LocalDate.of(year+1,1,1);
        return matchRepo.getMatchByTeamBetweenDates(teamName,  start, end);
    }
}
