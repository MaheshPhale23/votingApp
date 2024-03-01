package com.ms.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.entity.Candidate;
import com.ms.repo.CandidateRepo;
import com.ms.service.CandidateService;

@Service
public class CandidateServiceImpl implements CandidateService{
	
	@Autowired
	CandidateRepo candidateRepo;

	@Override
	public Candidate addCandidate(Candidate candidate) {
		
		return this.candidateRepo.save(candidate);
	}

	@Override
	public Candidate updateCandidate(Candidate candidate, Long candidateId) {
		
		Optional<Candidate> cadidates = candidateRepo.findById(candidateId);
		if(cadidates.isPresent()) {
			Candidate existsID = cadidates.get();
			existsID.setName(candidate.getName());
			return this.candidateRepo.save(existsID);
		}
		else {
			return null;
		}
	}

	@Override
	public List<Candidate> getAllCandidate() {
		
		return this.candidateRepo.findAll();
	}

	@Override
	public Candidate getCandidateById(Long candidateId) {
		
		return this.candidateRepo.findById(candidateId).get();
	}

	@Override
	public void deleteCandidate(Long candidateId) {
		
		Candidate candidate = new Candidate();
		candidate.setCandidateId(candidateId);
		
		this.candidateRepo.delete(candidate);
	}

}
