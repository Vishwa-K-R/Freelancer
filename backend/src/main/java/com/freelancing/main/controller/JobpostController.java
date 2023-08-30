package com.freelancing.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.freelancing.main.dto.entity.Jobpost;
import com.freelancing.main.dto.service.JobpostService;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin("*")
public class JobpostController {
	
	@Autowired
	JobpostService service;
	
	@PostMapping("/postJob")
	public String add(@RequestBody Jobpost Jobpost ) {
		return service.addsignup(Jobpost);
	}
	
	@GetMapping("/getJob")
	public List<Jobpost> read(){
		return service.getsignup();
	}
	@DeleteMapping("/jobpost/{id}")
	public String delete(@PathVariable int id) {
		return service.deletesignupById(id);
	}
	@PutMapping("/putJob")
	public String Update(Jobpost Jobpost) {
		return service.Updatesignup(Jobpost);
	}

}
