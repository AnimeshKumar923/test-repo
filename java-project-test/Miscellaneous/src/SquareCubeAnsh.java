import java.util.Scanner;

public class SquareCubeAnsh {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter starting number: ");
        int startNum = in.nextInt();
        System.out.println("Enter end number: ");
        int endNum = in.nextInt();

        System.out.println("Enter '1' for square, '2' for cube, 0 for exit");
        int option = in.nextInt();
        while (true) {
            if (option == 1) {
                square(startNum, endNum);
                break;
            } else if (option == 2) {
                cube(startNum, endNum);
                break;
            } else if (option == 0) {
                break;
            }
        }

    }

    public static void square(int startNum, int endNum) {
        int sq = 0;
        for (int i = startNum; i <= endNum; i++) {
            sq = i * i;
            System.out.println(i + ": " + sq);
        }

    }

    public static void cube(int startNum, int endNum) {
        int cube = 0;
        for (int i = startNum; i <= endNum; i++) {
            cube = i * i * i;
            System.out.println(i + ": " + cube);
        }

    }
}
