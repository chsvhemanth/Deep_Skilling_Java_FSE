-- Apply 10% Bonus to Department 101
BEGIN
    UpdateEmployeeBonus(101, 10);
END;
/
COMMIT;