package com.freelancing.main.dto.respository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancing.main.dto.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByPhoneNo(String phoneNo);
}
