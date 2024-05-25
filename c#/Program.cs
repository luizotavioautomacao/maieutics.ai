using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        int[] input = { 200, 100, 102, 101, 300, 103, 201, 202, 1, 2, 3, 4, 5, 6, 7 };
        int[] result = FindLongestConsecutiveSubsequence(input);
        
        Console.WriteLine("Longest Consecutive Subsequence:");
        foreach (var num in result)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();

        Array.Reverse(result);
        foreach (var num in result)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }

    public static int[] FindLongestConsecutiveSubsequence(int[] numbers)
    {
        // Ordena o array de entrada
        int[] sortedArray = numbers.OrderBy(x => x).ToArray();
        
        int longest = 1;
        int longestMemory = 0;
        int indexMemory = 0;

        // Encontra a sequência mais longa
        for (int i = 1; i < sortedArray.Length; i++)
        {
            if (sortedArray[i] == sortedArray[i - 1] + 1)
            {
                longest++;
                if (longest > longestMemory)
                {
                    longestMemory = longest;
                    indexMemory = i;
                }
            }
            else
            {
                longest = 1;
            }
        }

        // Cria e preenche o array de saída com a sequência mais longa
        int[] output = new int[longestMemory];
        for (int i = indexMemory; i > indexMemory - longestMemory; i--)
        {
            output[indexMemory - i] = sortedArray[i];
        }

        return output;
    }
}
