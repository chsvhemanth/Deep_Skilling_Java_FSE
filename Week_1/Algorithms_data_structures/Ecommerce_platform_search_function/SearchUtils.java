import java.util.Arrays;
import java.util.Comparator;

public class SearchUtils {
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.getProductName().equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName));
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].getProductName().compareToIgnoreCase(targetName);

            if (cmp == 0) return products[mid];
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }

        return null;
    }
}
