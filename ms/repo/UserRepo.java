package com.ms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.entity.User;

public interface UserRepo extends JpaRepository<User, Long>{
	
	public User findByUsername(String username);

}
