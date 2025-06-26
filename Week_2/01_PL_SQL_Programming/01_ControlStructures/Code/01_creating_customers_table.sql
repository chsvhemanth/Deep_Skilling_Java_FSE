CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    Balance NUMBER(10,2),
    IsVIP CHAR(1) DEFAULT 'N'
);

-- The Customers table is created with columns for CustomerID, Name, Age, Balance, and IsVIP status.
-- CustomerID is the primary key, and IsVIP has a default value of 'N' (not a VIP).