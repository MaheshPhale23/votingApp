package com.ms.service;

import java.util.List;

import com.ms.entity.Candidate;
import com.ms.entity.User;
import com.ms.entity.Vote;

public interface VoteService {

	public Vote savedVote(Vote vote);
	
	public List<Vote> getAllVotes();
	
	public Vote getVoteById(Long votingId);
	
	public List<Vote> getAllVotesByUser(User user);
	
	public List<Vote> getAllVotesForCandidate(Candidate candidate);
	
	public int getVoteCountForCandidate(Candidate candidate);
	
}
