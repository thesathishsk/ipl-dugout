package ipl.ipl_dashboard.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ipl.ipl_dashboard.Entity.Team;
import ipl.ipl_dashboard.Repoistory.TeamRepo;

@Service
public class TeamService {
    @Autowired
    private TeamRepo teamRepo;
    public List<Team> getTeam(){
        return teamRepo.findAll();
    }
}
