package com.example.jwt_auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.jwt_auth.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Collections;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String[] credentials = decodeBasicAuth(authHeader);
            String username = credentials[0];
            String password = credentials[1];

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = JwtUtil.generateToken(username);
                return ResponseEntity.ok(Collections.singletonMap("token", token));
            }
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }

    private String[] decodeBasicAuth(String header) {
        String base64Credentials = header.substring("Basic ".length()).trim();
        byte[] decoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decoded);
        return credentials.split(":", 2);
    }
}
