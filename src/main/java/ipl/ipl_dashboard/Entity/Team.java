package ipl.ipl_dashboard.Entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long totalMatch;
    private long totalWins;


    @Transient
    private List<Match>matches;
    
    public List<Match> getMatches() {
        return matches;
    }
    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }
    public String getTeamName() {
        return teamName;
    }
    public Team(String teamName, long totalMatch, long totalWins) {
        this.teamName = teamName;
        this.totalMatch = totalMatch;
        this.totalWins = totalWins;
    }
    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    public long getTotalMatch() {
        return totalMatch;
    }
    public void setTotalMatch(long totalMatch) {
        this.totalMatch = totalMatch;
    }
    public long getTotalWins() {
        return totalWins;
    }
    public void setTotalWins(long totalWins) {
        this.totalWins = totalWins;
    }
    public Team(String teamName,long totalMatch){
        this.teamName=teamName;
        this.totalMatch=totalMatch;
    }

    public Team(){
    }

    @Override
    public String toString(){
        return "TeamName : "+teamName +" TotalMatches : "+totalMatch+" TotalWins : "+totalWins;
    }


}
