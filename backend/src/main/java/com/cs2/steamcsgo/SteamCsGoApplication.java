package com.cs2.steamcsgo;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class SteamCsGoApplication {

	@Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
	public static void main(String[] args) {
		SpringApplication.run(SteamCsGoApplication.class, args);
		
	}

}
