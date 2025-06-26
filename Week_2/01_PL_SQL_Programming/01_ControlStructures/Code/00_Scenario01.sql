BEGIN
    -- Scenario: Update the interest rates for customers based on their age
    FOR Elders IN (
        SELECT CustomerID 
        FROM Customers 
        WHERE Age >= 60
    ) LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = Elders.CustomerID;
    END LOOP;

    COMMIT;
END;
