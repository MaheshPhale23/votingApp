package com.ms.service;

import java.util.List;

import com.ms.entity.Candidate;

public interface CandidateService {
	
	public Candidate addCandidate(Candidate candidate);
	
	public Candidate updateCandidate(Candidate candidate, Long cadidateId);
	
	public List<Candidate> getAllCandidate();
	
	public Candidate getCandidateById(Long cadidateId);
	
	public void deleteCandidate(Long cadidateId);
	
}
