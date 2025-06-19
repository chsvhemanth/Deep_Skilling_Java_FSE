import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "iPhone 15", "Electronics"),
            new Product(102, "Samsung Galaxy", "Electronics"),
            new Product(103, "Dell Laptop", "Computers"),
            new Product(104, "Nike Shoes", "Footwear")
        };

        System.out.println(" Linear Search");
        Product linearResult = SearchUtils.linearSearch(products, "Nike Shoes");
        if (linearResult != null) {
            System.out.println("Found: " + linearResult.getProductName());
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("\nBinary Search");
        Product binaryResult = SearchUtils.binarySearch(products, "Dell Laptop");
        if (binaryResult != null) {
            System.out.println("Found: " + binaryResult.getProductName());
        } else {
            System.out.println("Product not found.");
        }
    }
}
