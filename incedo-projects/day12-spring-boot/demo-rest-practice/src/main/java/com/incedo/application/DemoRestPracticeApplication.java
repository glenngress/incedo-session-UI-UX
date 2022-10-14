package com.incedo.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
@Configuration
@EnableWebMvc
@ComponentScan({"com.incedo.*"})
@SpringBootApplication
public class DemoRestPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoRestPracticeApplication.class, args);
	}

}
