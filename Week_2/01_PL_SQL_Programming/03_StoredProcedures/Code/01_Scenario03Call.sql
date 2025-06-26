-- Successful Transfer of 500
BEGIN
    TransferFunds(1, 2, 500);
END;
/

-- Failed Transfer (Insufficient Funds)
BEGIN
    TransferFunds(4, 2, 1000);
END;
/
COMMIT;