package com.freelancing.main.dto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancing.main.dto.entity.Profile;
import com.freelancing.main.dto.respository.ProfileRepo;

@Service

public class profileService {
	@Autowired
	ProfileRepo repository;

	public String addsignup(Profile Profile) {
		repository.save(Profile);
		return "added";
	}

	public List<Profile> getsignup(){
		return repository.findAll();
	}

	public String Updatesignup(Profile Profile) {
		repository.save(Profile);
		return "saved";
	}

}
