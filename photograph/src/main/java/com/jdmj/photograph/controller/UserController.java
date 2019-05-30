package com.jdmj.photograph.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jdmj.photograph.entity.User;
import com.jdmj.photograph.service.UserService;

@Controller
@RequestMapping("user")
public class UserController {
	@Autowired
	private UserService userService;
	@ResponseBody
	@RequestMapping(value = "/getUserByName")
	public User getUserByName(String name){
		User user = userService.getUserByName(name);
		System.out.println(user.getName());
		return user;
	}
	@RequestMapping("/")
    public String welcome(){

		//this is aa111add eeeeee;

       // return "biubiu";
		 return "main";
    }
}
