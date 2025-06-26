SELECT c.CustomerId, c.Name, c.Age, i.InterestRate
FROM Customers c
JOIN Loans i ON c.CustomerId = i.CustomerId
WHERE c.Age >= 60;
-- This query retrieves the CustomerId, CustomerName, and InterestRate for customers aged 60 or older.