public class FinancialForecaster {
        public static double forecastValue(double p, double growthRate, int years) {
        if (years == 0) {
            return p;
        }
        return forecastValue(p* (1 + growthRate), growthRate, years - 1);
    }

    

    public static void main(String[] args) {
        double initialAmount = 10000;
        double annualGrowthRate = 0.08; 
        int forecastYears = 5;
        double recursiveResult = forecastValue(initialAmount, annualGrowthRate, forecastYears);
        System.out.printf("Recursive Forecast: ₹%.2f after %d years%n", recursiveResult, forecastYears);

       
    }
}
