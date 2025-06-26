-- Apply Interest to Savings Accounts
BEGIN
    ProcessMonthlyInterest;
END;
/
COMMIT;