package com.ms;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ms.entity.*;
import com.ms.exception.UserFoundException;
import com.ms.service.UserService;

@SpringBootApplication
public class VotingApplication{
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(VotingApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		
//		try {
//			
//			User user = new User();
//			user.setFirstName("Mahesh");
//            user.setLastName("Phale");
//            user.setUsername("Ms2309");
//            user.setPassword(this.passwordEncoder.encode("abc"));
//            user.setEmail("mahesh@gmail.com");
//            user.setProfile("default.png");
//            
//            Role role1 = new Role();
//            role1.setRoleId(44L);
//            role1.setRoleName("ADMIN");
//            
//            Set<UserRole> userRoles = new HashSet<>();
//            UserRole userRole = new UserRole();
//            userRole.setRole(role1);
//
//            userRole.setUser(user);
//
//            userRoles.add(userRole);
//			
//            User user1 = this.userService.createUser(user, userRoles);
//            System.out.println(user1.getUsername());
//			
//			
//			
//		} catch (UserFoundException e) {
//			e.printStackTrace();
//		}
//		
//	}

}
