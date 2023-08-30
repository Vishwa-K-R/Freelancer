package com.freelancing.main.dto.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelancing.main.dto.entity.Profile;

@Repository
public interface ProfileRepo extends JpaRepository <Profile , Integer> {
	
}
