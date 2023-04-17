package ipl.ipl_dashboard.data;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ipl.ipl_dashboard.Entity.Match;

import org.springframework.batch.item.ItemProcessor;

public class MatchProcessor implements ItemProcessor<matchData, Match>{

  private static final Logger log = LoggerFactory.getLogger(MatchProcessor.class);
  @Override
  public Match process(final matchData matchdata) throws Exception {
         Match match=new Match();
         match.setId(Long.parseLong(matchdata.getId()));
         match.setCity(matchdata.getCity());
         match.setDate(LocalDate.parse(matchdata.getDate()));
         match.setPlayer_of_match(matchdata.getPlayer_of_match());
         match.setVenue(matchdata.getVenue());
         String firstInning,secondInning;
         if(matchdata.getToss_decision().equals("bat")){
          firstInning=matchdata.getToss_winner();
          secondInning=matchdata.getTeam1().equals(firstInning)?matchdata.getTeam2():matchdata.getTeam1();
         }
         else{
          secondInning=matchdata.getToss_winner();
          firstInning=matchdata.getTeam1().equals(secondInning)?matchdata.getTeam2():matchdata.getTeam1();
         }
         match.setTeam1(firstInning);
         match.setTeam2(secondInning);
         match.setToss_winner(matchdata.getToss_winner());
         match.setToss_decision(matchdata.getToss_decision());
         match.setWinner(matchdata.getWinner());
         match.setResult(matchdata.getResult());
         match.setResult_margin(matchdata.getResult_margin());

    return match;
        }
}