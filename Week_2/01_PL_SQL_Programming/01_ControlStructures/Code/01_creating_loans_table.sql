CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- The above code creates a Loans table with columns for LoanID, CustomerID, InterestRate, and DueDate.
-- The LoanID is the primary key, and CustomerID is a foreign key referencing the Customers table.