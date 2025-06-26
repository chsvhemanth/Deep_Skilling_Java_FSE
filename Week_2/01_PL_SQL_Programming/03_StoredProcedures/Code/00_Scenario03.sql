-- This script creates a stored procedure to transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds (
    FromAccountId IN NUMBER,
    ToAccountId IN NUMBER,
    Amount IN NUMBER
) IS
    FromBalance NUMBER;
BEGIN
    SELECT Balance INTO FromBalance
    FROM Accounts
    WHERE AccountId = FromAccountId;

    IF FromBalance >= Amount THEN
        UPDATE Accounts
        SET Balance = Balance - Amount
        WHERE AccountId = FromAccountId;

        UPDATE Accounts
        SET Balance = Balance + Amount
        WHERE AccountId = ToAccountId;

    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient Balance In Source Account.');
    END IF;
END;
/