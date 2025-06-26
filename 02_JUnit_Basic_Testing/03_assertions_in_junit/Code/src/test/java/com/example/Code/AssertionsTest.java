package com.example.Code;

import static org.junit.Assert.*;

import org.junit.Test;

public class AssertionsTest {

    @Test 
    public void testAssertions() { 
        // Assert equals 
        assertEquals(5, 2 + 3); 
 
        // Assert true 
        assertTrue(5 > 3); 
 
        // Assert false 
        assertFalse(5 < 3); 
 
        // Assert null 
        assertNull(null); 
 
        // Assert not null 
        assertNotNull(new Object()); 
    }

}
