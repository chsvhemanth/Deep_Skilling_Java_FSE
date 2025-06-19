public class Main {
    public static void main(String[] args) {
        // Get the single instance of Logger
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Logging messages
        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");

        // Check if both instances are the same
        if (logger1 == logger2) {
            System.out.println("Logger is a singleton. Both instances are the same.");
        } else {
            System.out.println("Logger is NOT a singleton.");
        }
    }
}
