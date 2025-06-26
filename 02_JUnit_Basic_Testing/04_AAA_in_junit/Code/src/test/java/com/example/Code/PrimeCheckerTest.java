package com.example.Code;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class PrimeCheckerTest {

    private PrimeChecker primeChecker;

    //Runs before each test
    @Before
    public void setUp() {
        primeChecker = new PrimeChecker();
        System.out.println("Setup complete");
    }

    //Runs after each test
    @After
    public void tearDown() {
        primeChecker = null;
        System.out.println("Teardown complete");
    }

    //Prime number test
    @Test
    public void testIsPrime_WithPrimeNumber() {
        //Arrange
        int number = 7;

        //Act
        boolean result = primeChecker.isPrime(number);

        //Assert
        assertTrue(result);
    }

    //Even number not prime
    @Test
    public void testIsPrime_WithEvenNonPrimeNumber() {
        // Arrange
        int number = 8;

        // Act
        boolean result = primeChecker.isPrime(number);

        // Assert
        assertFalse(result);
    }

    //Number less than 2
    @Test
    public void testIsPrime_WithNumberLessThanTwo() {
        // Arrange
        int number = 1;

        // Act
        boolean result = primeChecker.isPrime(number);

        // Assert
        assertFalse(result);
    }

    //Edge case: 2
    @Test
    public void testIsPrime_WithTwo() {
        // Arrange
        int number = 2;

        // Act
        boolean result = primeChecker.isPrime(number);

        // Assert
        assertTrue(result);
    }
}
