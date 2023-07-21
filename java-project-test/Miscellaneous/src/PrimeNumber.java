import java.util.Scanner;

public class PrimeNumber {

	public static void main(String args[]) {
		Scanner in = new Scanner(System.in);

		System.out.print("Enter number to check: ");
		int num = in.nextInt();

		if (num == 1) {
			System.out.println("1 is NOT PRIME");
		}
		if (num == 0) {
			System.out.println("0 is neither PRIME nor COMPOSITE");
		}
		if (num < 0) {
			System.out.println("Please enter a positive integer\nPRIME numbers are positive only!");
		}
		while (num > 1) {
			checkPrime(num);
		}

		// if (result != 0) {
		// System.out.println(num + " is a prime number.");
		// }
		// System.out.println(num+" is a prime number.");

		// System.out.println(num + " is not a prime number.");
	}

	static void checkPrime(int num) {
		int result = 0;
		int check = 0;

		for (int i = 2; i < num; i++) {
			result = num % i;
			if (result == 0) {
				check++; // 0 for prime, 1 for not prime.
				break;
			}
		}

		if (check == 0) {
			System.out.println(num + " is PRIME!");
		} else {
			System.out.println(num + " is NOT PRIME!");
		}
	}
}
