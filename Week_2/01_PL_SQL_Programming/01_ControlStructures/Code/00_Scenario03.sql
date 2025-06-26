BEGIN
    -- This block retrieves loans that are due within the next 30 days
    FOR loanRec IN (
        SELECT l.LoanID, l.DueDate, c.Name
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        -- Output a reminder message for each loan due
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || loanRec.LoanID || ' for customer ' || loanRec.Name ||
            ' is due on ' || TO_CHAR(loanRec.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;