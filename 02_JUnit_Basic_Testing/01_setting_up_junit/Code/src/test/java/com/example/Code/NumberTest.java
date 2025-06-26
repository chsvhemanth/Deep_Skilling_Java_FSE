package com.example.Code;

import static org.junit.Assert.*;

import org.junit.Test;

public class NumberTest {

	@Test
    public void testIsEven() {
        int number = 4;
        assertTrue(number % 2 == 0);
    }
}
