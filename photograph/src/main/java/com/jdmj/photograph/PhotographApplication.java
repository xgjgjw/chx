package com.jdmj.photograph;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@MapperScan("com.jdmj.photograph.mapper")
@PropertySource("application.properties")
public class PhotographApplication {

	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(PhotographApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(PhotographApplication.class, args);
	}
}
