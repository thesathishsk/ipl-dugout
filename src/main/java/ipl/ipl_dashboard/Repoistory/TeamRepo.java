package ipl.ipl_dashboard.Repoistory;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ipl.ipl_dashboard.Entity.Team;
@Repository
public interface TeamRepo extends JpaRepository<Team,Long>{
    public Team findByTeamName(String teamName);
}
