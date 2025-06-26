-- Update employee salaries based on department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    DeptId IN NUMBER,
    BonusPercent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * BonusPercent / 100)
    WHERE DepartmentId = DeptId;
END;
/