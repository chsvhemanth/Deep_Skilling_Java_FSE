public class Product {
    private int pId;
    private String pName;
    private String category;

    public Product(int pId, String pName, String category) {
        this.pId = pId;
        this.pName = pName;
        this.category = category;
    }

    public int getProductId() { return pId; }
    public String getProductName() { return pName; }
    public String getCategory() { return category; }
}
