BEGIN
    -- This block updates the ISVIP status for customers with a balance greater than 10,000
    FOR vips IN (
        SELECT CustomerId
        FROM Customers
        WHERE Balance > 10000
    ) LOOP 
    -- Update the ISVIP field to 'Y' for each customer in the loop
        UPDATE Customers
        SET ISVIP = 'Y'
        WHERE CustomerID = vips.CustomerId;
    END LOOP;
    COMMIT;
END;