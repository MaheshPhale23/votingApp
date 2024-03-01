package com.ms.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ms.entity.User;
import com.ms.entity.UserRole;
import com.ms.exception.*;
import com.ms.repo.RoleRepo;
import com.ms.repo.UserRepo;
import com.ms.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	RoleRepo roleRepo;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepo.findByUsername(user.getUsername());
		
		if(local != null) {
			System.out.println("User is already there !!");
            throw new UserNotFoundException();
		}
		else {
			// create user
			for(UserRole ur: userRoles) {
				roleRepo.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			local = this.userRepo.save(user);
		}
		
		return local;
	}

	@Override
	public User getUser(String username) {
		return this.userRepo.findByUsername(username);
	}

	@Override
	public void deleteUser(Long userId) {
		this.userRepo.deleteById(userId);
		
	}

	@Override
	public User updateDataById(Long userId, User user) {
		
		Optional<User> users = userRepo.findById(userId);
		if(users.isPresent()) {
			User existsID = users.get();
			existsID.setUsername(user.getUsername());
			existsID.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
			existsID.setFirstName(user.getFirstName());
			existsID.setLastName(user.getLastName());
			existsID.setEmail(user.getEmail());
			existsID.setPhone(user.getPhone());
			existsID.setProfile(user.getProfile());
			return  userRepo.save(existsID);
		}
		else {
			return null;
		}
		
	}

	@Override
	public User getUserById(Long userId) {
		return userRepo.findById(userId).get();
	}

	@Override
	public List<User> getAllUser() {
		
		return this.userRepo.findAll();
	}

	@Override
	public User updateUser(User user, Long userId) {
		
		Optional<User> users = userRepo.findById(userId);
		if(users.isPresent()) {
			User existsId = users.get();
			existsId.setFirstName(user.getFirstName());
			existsId.setLastName(user.getLastName());
			existsId.setUsername(user.getUsername());
			existsId.setPassword(user.getPassword());
			existsId.setEmail(user.getEmail());
			existsId.setPhone(user.getPhone());
			return this.userRepo.save(existsId);
		}
		else {
			return null;
		}
		
	}

}
