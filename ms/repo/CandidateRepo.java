package com.ms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.entity.Candidate;

public interface CandidateRepo extends JpaRepository<Candidate, Long>{

}
