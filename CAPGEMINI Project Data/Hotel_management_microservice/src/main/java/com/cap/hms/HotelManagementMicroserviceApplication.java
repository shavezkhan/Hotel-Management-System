package com.cap.hms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import com.cap.hms.repository.Roomrepository;

@SpringBootApplication
@EnableEurekaClient
public class HotelManagementMicroserviceApplication implements CommandLineRunner {
	
	@Autowired
	Roomrepository roomrepository;

	public static void main(String[] args) {
		SpringApplication.run(HotelManagementMicroserviceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}
	
	

}
