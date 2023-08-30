package com.freelancing.main.dto.service;


	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.freelancing.main.dto.entity.Jobpost;
import com.freelancing.main.dto.respository.Jobpostrepo;

	@Service
	public class JobpostService {
		
	@Autowired
	Jobpostrepo repository;

	public String addsignup(Jobpost Jobpost) {
		repository.save(Jobpost);
		return "added";
	}

	public List<Jobpost> getsignup(){
		return repository.findAll();
	}

	public String deletesignupById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}

	public String Updatesignup(Jobpost Jobpost) {
		repository.save(Jobpost);
		return "saved";
	}
}
