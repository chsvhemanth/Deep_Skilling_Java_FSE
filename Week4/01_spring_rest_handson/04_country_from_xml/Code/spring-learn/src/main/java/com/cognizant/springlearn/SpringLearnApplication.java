package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.boot.SpringApplication;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country1 = context.getBean("country1", Country.class);
        LOGGER.debug("Country : {}", country1.toString());
        
        Country country2 = context.getBean("country2", Country.class);
        LOGGER.debug("Country : {}", country2.toString());
        
        Country country3 = context.getBean("country3", Country.class);
        LOGGER.debug("Country : {}", country3.toString());
        
        Country country4 = context.getBean("country4", Country.class);
        LOGGER.debug("Country : {}", country4.toString());
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        displayCountry();
    }
}
