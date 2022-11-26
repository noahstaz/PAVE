package com.example.pave;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Search {
    public static boolean find(String username, String password) throws FileNotFoundException {
        File localData = new File("usernames_passwords.txt");
        Scanner in = new Scanner(localData);
        while(in.hasNext()){
            String u = in.next();
            String p = in.next();
            if(u.equals(username) && p.equals(password)) {
                in.close();
                return true;
            }
        }
        in.close();
        return false;
    }
    public static void add(String username, String password) throws FileNotFoundException {
        File localData = new File("usernames_passwords.txt");
        PrintWriter out = new PrintWriter(localData);
        out.print(username + " " + password + " ");
        out.close();
    }
}
