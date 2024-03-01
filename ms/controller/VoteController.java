package com.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.entity.Candidate;
import com.ms.entity.User;
import com.ms.entity.Vote;
import com.ms.service.CandidateService;
import com.ms.service.UserService;
import com.ms.service.VoteService;

@RestController
@RequestMapping("/votes")
public class VoteController {
	
	@Autowired
	VoteService voteService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	CandidateService candidateService;
	
	@PostMapping("/save")
	public ResponseEntity<Vote> saveVote(@RequestBody Vote vote) {
        Vote savedVote = voteService.savedVote(vote);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVote);
    }
	
	@GetMapping("/all")
    public ResponseEntity<List<Vote>> getAllVotes() {
        List<Vote> votes = voteService.getAllVotes();
        return ResponseEntity.ok(votes);
    }

	@GetMapping("/{votingId}")
    public ResponseEntity<Vote> getVoteById(@PathVariable Long votingId) {
        Vote vote = voteService.getVoteById(votingId);
        if (vote != null) {
            return ResponseEntity.ok(vote);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@GetMapping("/user/{userId}")
    public ResponseEntity<List<Vote>> getAllVotesByUser(@PathVariable Long userId) {
        User user = userService.getUserById(userId); //
        List<Vote> votes = voteService.getAllVotesByUser(user);
        return ResponseEntity.ok(votes);
    }
	
	@GetMapping("/candidate/{candidateId}")
    public ResponseEntity<List<Vote>> getAllVotesForCandidate(@PathVariable Long candidateId) {
        Candidate candidate = candidateService.getCandidateById(candidateId); 
        List<Vote> votes = voteService.getAllVotesForCandidate(candidate);
        return ResponseEntity.ok(votes);
    }
	
	@GetMapping("/candidate/{candidateId}/count")
    public ResponseEntity<Integer> getVoteCountForCandidate(@PathVariable Long candidateId) {
        Candidate candidate = candidateService.getCandidateById(candidateId); 
        int voteCount = voteService.getVoteCountForCandidate(candidate);
        return ResponseEntity.ok(voteCount);
    }
}
