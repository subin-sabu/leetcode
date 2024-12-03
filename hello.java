public class hello {

    int getSum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        hello h = new hello();
        System.out.println(h.getSum(num1, num2));

        // Correct array syntax
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {1, 2, 3};

        // Compare array references (will print false)
        System.out.println(arr1 == arr2);

        // Compare array content (will print true)
        System.out.println(java.util.Arrays.equals(arr1, arr2));
    }
}
