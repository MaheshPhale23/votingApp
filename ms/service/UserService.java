package com.ms.service;

import java.util.List;
import java.util.Set;

import com.ms.entity.User;
import com.ms.entity.UserRole;

public interface UserService {
	
	//creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get user by username;
	public User getUser(String username);
	
	// get user by userId;
	public User getUserById(Long userId);
	
	//update user
	public User updateUser(User user, Long userId);
	
	//delete user by id
    public void deleteUser(Long userId);
    
    public List<User> getAllUser();
    
    // update 
    public User updateDataById(Long userId, User user);

}
