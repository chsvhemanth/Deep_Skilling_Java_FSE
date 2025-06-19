class Logger {
    // Static variable to store the single instance of Logger
    // Initially set to null and will be instantiated when first requested
    private static Logger instance;

    // Private constructor to prevent instantiation from outside this class
    // Ensures that only one instance can ever exist
    private Logger() {}

    // Public method to return the single instance of Logger
    // Implements lazy initialization – instance is created only when needed
    public static Logger getInstance() {
        // If instance is null, create a new Logger object
        if (instance == null) {
            instance = new Logger();
        }
        return instance; // Return the single instance
    }

    // Method for logging messages
    // Prints the given message to the console with a "Log message:" prefix
    public void log(String message) {
        System.out.println("Log message: " + message);
    }
}
