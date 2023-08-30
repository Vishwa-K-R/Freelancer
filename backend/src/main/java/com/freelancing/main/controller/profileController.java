package com.freelancing.main.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.freelancing.main.dto.entity.Profile;
import com.freelancing.main.dto.service.profileService;



@RestController
@CrossOrigin("*")

public class profileController {
	@Autowired
	profileService service;
	
	@PostMapping("/postProfile")
	public String add(@RequestBody Profile Profile ) {
		return service.addsignup(Profile);
	}
	
	@GetMapping("/getProfile")
	public List<Profile> read(){
		return service.getsignup();
	}
	@PutMapping("/putProfile")
	public String Update(Profile Profile) {
		return service.Updatesignup(Profile);
	}

}
