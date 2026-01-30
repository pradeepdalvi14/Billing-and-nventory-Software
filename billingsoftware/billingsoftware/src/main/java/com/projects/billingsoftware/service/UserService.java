package com.projects.billingsoftware.service;

import com.projects.billingsoftware.io.AuthResponse;
import com.projects.billingsoftware.io.UserRequest;
import com.projects.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserRequest request);
    String getUserRole(String email);

    AuthResponse login(UserRequest request);
    List<UserResponse> readUsers();
    void deleteUser(String id);
}
