package com.freelancing.main.dto.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelancing.main.dto.entity.ResumeCompletion;
@Repository
public interface ResumeCompletionRepo extends JpaRepository<ResumeCompletion, Integer> {

}
