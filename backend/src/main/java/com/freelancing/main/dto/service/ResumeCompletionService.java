package com.freelancing.main.dto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancing.main.dto.entity.ResumeCompletion;
import com.freelancing.main.dto.respository.ResumeCompletionRepo;
@Service
public class ResumeCompletionService {
	@Autowired
	ResumeCompletionRepo repository;

	public String addsignup(ResumeCompletion ResumeCompletion) {
		repository.save(ResumeCompletion);
		return "added";
	}

	public List<ResumeCompletion> getsignup(){
		return repository.findAll();
	}

	public String Updatesignup(ResumeCompletion ResumeCompletion) {
		repository.save(ResumeCompletion);
		return "saved";
	}
}
