package com.jdmj.photograph.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jdmj.photograph.entity.User;
import com.jdmj.photograph.mapper.UserMapper;
import com.jdmj.photograph.service.UserService;

@Service("userService")
public class UserServiceImp implements UserService {
	@Autowired
	private UserMapper userMapper;
	@Override
	public User getUserByName(String name) {
		return userMapper.getUserByName(name);
	}

}
