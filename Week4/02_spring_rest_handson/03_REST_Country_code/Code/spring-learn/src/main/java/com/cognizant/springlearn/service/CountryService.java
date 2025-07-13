package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList = new ArrayList<>();

    public CountryService() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        countryList.add(context.getBean("country1", Country.class));
        countryList.add(context.getBean("country2", Country.class));
        countryList.add(context.getBean("country3", Country.class));
        countryList.add(context.getBean("country4", Country.class));
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
