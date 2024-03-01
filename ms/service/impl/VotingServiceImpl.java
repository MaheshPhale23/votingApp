package com.ms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.entity.Candidate;
import com.ms.entity.User;
import com.ms.entity.Vote;
import com.ms.repo.VoteRepo;
import com.ms.service.VoteService;

@Service
public class VotingServiceImpl implements VoteService{
	
	@Autowired
	VoteRepo voteRepo;

	@Override
	public Vote savedVote(Vote vote) {
		
		return this.voteRepo.save(vote);
	}

	@Override
	public List<Vote> getAllVotes() {
		
		return this.voteRepo.findAll();
	}

	@Override
	public Vote getVoteById(Long votingId) {
		
		return this.voteRepo.findById(votingId).get();
	}

	@Override
	public List<Vote> getAllVotesByUser(User user) {
		
		return this.voteRepo.findByUser(user);
	}
	
	@Override
	public List<Vote> getAllVotesForCandidate(Candidate candidate) {
		return this.voteRepo.findByCandidate(candidate);
	}

	@Override
	public int getVoteCountForCandidate(Candidate candidate) {
		List<Vote> votes = getAllVotesForCandidate(candidate);
		return votes.size();
	}


}
