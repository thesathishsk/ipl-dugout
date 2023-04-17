package ipl.ipl_dashboard.Repoistory;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ipl.ipl_dashboard.Entity.Match;

@Repository
public interface MatchRepo extends CrudRepository<Match,Long>{


    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName, String teamName2, Pageable page);

    @Query(" select m from Match m where(m.team1= :teamName or m.team2= :teamName) and m.date between :startDate and :endDate order by date desc")
    List<Match> getMatchByTeamBetweenDates(@Param("teamName") String teamName, @Param("startDate") LocalDate startDate,@Param("endDate") LocalDate endDate);

    List<Match> getByTeam1OrTeam2AndDateBetweenOrderByDateDesc(String teamName,String teamName2,LocalDate start,LocalDate end);
    
    default List<Match> findLatestMatchByTeam(String teamName,int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName,PageRequest.of(0,count));
    }
     
}
