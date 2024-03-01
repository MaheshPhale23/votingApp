package com.ms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.entity.Candidate;
import com.ms.entity.User;
import com.ms.entity.Vote;

public interface VoteRepo extends JpaRepository<Vote, Long>{
	
	List<Vote> findByCandidate(Candidate candidate);
	
	List<Vote> findByUser(User user);

}
