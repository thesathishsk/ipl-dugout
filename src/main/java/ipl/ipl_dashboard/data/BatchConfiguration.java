package ipl.ipl_dashboard.data;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.transaction.PlatformTransactionManager;

import ipl.ipl_dashboard.Entity.Match;



@Configuration
public class BatchConfiguration {
    @Bean
public FlatFileItemReader<matchData> reader() {
  return new FlatFileItemReaderBuilder<matchData>()
    .name("matchData")
    .resource(new ClassPathResource("matches.csv"))
    .delimited()
    .names(new String[]{"id","city","date","player_of_match","venue","team1","team2","toss_winner","toss_decision","winner","result","result_margin","eliminator","method","umpire1","umpire2"})
    .fieldSetMapper(new BeanWrapperFieldSetMapper<matchData>() {{
      setTargetType(matchData.class);
    }})
    .build();
}

@Bean
public MatchProcessor processor() {
  return new MatchProcessor();
}

@Bean
public JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
  return new JdbcBatchItemWriterBuilder<Match>()
    .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
    .sql("INSERT INTO Match (id,city,date,player_of_match,venue,team1,team2,toss_winner,toss_decision,winner,result,result_margin) VALUES (:id,:city,:date,:player_of_match,:venue,:team1,:team2,:toss_winner,:toss_decision,:winner,:result,:result_margin)")
    .dataSource(dataSource)
    .build();
}
    @Bean
    public Job importUserJob(JobRepository jobRepository, JobCompletionNotificationListener listener, Step step1) {
      return new JobBuilder("importUserJob", jobRepository)
        .incrementer(new RunIdIncrementer())
        .listener(listener)
        .flow(step1)
        .end()
        .build();
    }
    
    @Bean
    public Step step1(JobRepository jobRepository,
        PlatformTransactionManager transactionManager, JdbcBatchItemWriter<Match> writer) {
      return new StepBuilder("step1", jobRepository)
        .<matchData, Match> chunk(10, transactionManager)
        .reader(reader())
        .processor(processor())
        .writer(writer)
        .build();
    }

}
