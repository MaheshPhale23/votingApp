package com.ms.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.ms.exception.*;

import com.ms.entity.*;
import com.ms.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	// create user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception{
		if (user.getUsername() == null || user.getUsername().isEmpty() || user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new Exception("Username or password cannot be blank");
        }
		
		user.setProfile("default.png");
		
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		Set<UserRole> roles = new HashSet<>();
		
		Role role = new Role();
		role.setRoleId(45L);
		role.setRoleName("NORMAL");
		
		UserRole userRole = new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);
		
		roles.add(userRole);
		
		
		return this.userService.createUser(user, roles);
	}
	
	// get user by user name
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}
	
	//delete the user by id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
    	this.userService.deleteUser(userId);
    }
	
    
    //update
    @PutMapping("/update/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable Long userId,@RequestBody User user){
    	
    	user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
    	
    	User updatedUser = this.userService.updateUser(user, userId);
    	
    	
    	if(updatedUser != null) {
    		return ResponseEntity.ok(updatedUser);
    	}
    	else {
    		return ResponseEntity.notFound().build();
    	}
    }
    
    //get user by userId
    @GetMapping("/getUserById/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") Long userId) {
    	
    	User user = userService.getUserById(userId);
    	
    	if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    	
    }
    
    //get All Users
    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
    	return this.userService.getAllUser();
    }
    
    
    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
        return ResponseEntity.ok(ex.getMessage());
    }
}
