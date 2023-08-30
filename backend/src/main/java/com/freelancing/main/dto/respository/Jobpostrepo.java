package com.freelancing.main.dto.respository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelancing.main.dto.entity.Jobpost;
@Repository
public interface Jobpostrepo extends JpaRepository <Jobpost,Integer> {
    
}
