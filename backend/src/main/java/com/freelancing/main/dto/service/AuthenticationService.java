package com.freelancing.main.dto.service;

import java.util.Optional;
import java.util.Random;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.freelancing.main.dto.entity.User;
import com.freelancing.main.dto.request.AuthenticationRequest;
import com.freelancing.main.dto.request.RegisterRequest;
import com.freelancing.main.dto.response.AuthenticationResponse;
import com.freelancing.main.dto.respository.UserRepository;
import com.twilio.Twilio;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
    	String otp = generateRandomOTP();
        var user = User
                .builder()
                .name(request.getName())
                .phoneNo(request.getPhoneNo())
                .password(passwordEncoder.encode(otp))
                .build();
        Optional<User> existingUser = userRepository.findByPhoneNo(request.getPhoneNo());
        if(!existingUser.isEmpty()) {
        	existingUser.get().setPassword(passwordEncoder.encode(otp));
        	user = existingUser.get();
        }
        Twilio.init("AC9c8d0c847755c6ec303b6a903c17c833","37788b2f51f4987a1157359569684fa1");

        Message.creator(new PhoneNumber("+91 " + request.getPhoneNo()),
                        new PhoneNumber("+18147184729"), "Your SavvySkills Verifivation Code is " + otp ).create();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getPhoneNo(), request.getPassword()));
        var user = userRepository.findByPhoneNo(request.getPhoneNo()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    
    public String generateRandomOTP() {
        Random random = new Random();
        int otpValue = 100000 + random.nextInt(900000);
        return String.valueOf(otpValue);
    }

}
