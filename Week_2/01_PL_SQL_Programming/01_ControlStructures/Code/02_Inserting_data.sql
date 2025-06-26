INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (1, 'Ram', 65, 12000.00);  
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (2, 'Rahul', 58, 9000.00);   
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (3, 'Aether', 70, 8000.00);  
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (4, 'Trevour', 45, 15000.00);
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (5, 'Frieren', 66, 11000.00);  
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (6, 'Yoda', 63, 5000.00);     
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (7, 'Ayaka', 40, 20000.00);  
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (8, 'Furina', 59, 9999.99);  
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (9, 'Franklin', 61, 9500.00);   
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (10, 'Hulk', 35, 3000.00);


INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (101, 1, 5.5, SYSDATE + 20); 
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (102, 3, 7.0, SYSDATE + 10); 
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (103, 5, 4.0, SYSDATE + 40); 
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (104, 6, 5.0, SYSDATE + 15);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (105, 9, 6.0, SYSDATE + 5);  
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (106, 2, 6.0, SYSDATE + 45);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (107, 4, 4.5, SYSDATE + 3); 
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (108, 7, 6.5, SYSDATE + 25);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (109, 8, 5.0, SYSDATE + 60);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (110, 10, 5.5, SYSDATE + 2); 

COMMIT;
-- The above code inserts data into the Customers and Loans tables.