package com.example.Code;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testFetchDataReturnsMockedValue() {
        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject into service
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result);
    }
}
