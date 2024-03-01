package com.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.entity.Candidate;
import com.ms.service.CandidateService;

@RestController
@RequestMapping("/candidate")
public class CandidateController {
	
	@Autowired
	CandidateService candidateService;
	
	@PostMapping("/add")
	public ResponseEntity<Candidate> addCandidate(@RequestBody Candidate candidate){
		
		Candidate newCandidate = candidateService.addCandidate(candidate);
		
		return ResponseEntity.ok(newCandidate);
	}

	@PutMapping("/update/{candidateId}")
	public ResponseEntity<Candidate> updateCandidate(@RequestBody Candidate candidate, @PathVariable Long candidateId) {
        Candidate updatedCandidate = candidateService.updateCandidate(candidate, candidateId);
        if (updatedCandidate != null) {
            return ResponseEntity.ok(updatedCandidate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@GetMapping("/all")
    public ResponseEntity<List<Candidate>> getAllCandidates() {
        List<Candidate> candidates = candidateService.getAllCandidate();
        return ResponseEntity.ok(candidates);
    }
	
	@GetMapping("/{candidateId}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable Long candidateId) {
        Candidate candidate = candidateService.getCandidateById(candidateId);
        if (candidate != null) {
            return ResponseEntity.ok(candidate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{candidateId}")
    public ResponseEntity<Void> deleteCandidate(@PathVariable Long candidateId) {
        candidateService.deleteCandidate(candidateId);
        return ResponseEntity.noContent().build();
    }
}
