package com.jdmj.photograph.mapper;

import org.springframework.stereotype.Repository;

import com.jdmj.photograph.entity.User;
@Repository
public interface UserMapper {
	User getUserByName(String name);
}
