package com.freelancing.main.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.freelancing.main.dto.entity.ResumeCompletion;
import com.freelancing.main.dto.service.ResumeCompletionService;
@RestController
@CrossOrigin("*")
public class ResumeCompletionController {
	@Autowired
	ResumeCompletionService service;
	
	@PostMapping("/postResume")
	public String add(@RequestBody ResumeCompletion ResumeCompletion ) {
		return service.addsignup(ResumeCompletion);
	}
	
	@GetMapping("/getResume")
	public List<ResumeCompletion> read(){
		return service.getsignup();
	}
	@PutMapping("/putResume")
	public String Update(ResumeCompletion ResumeCompletion) {
		return service.Updatesignup(ResumeCompletion);
	}
}
