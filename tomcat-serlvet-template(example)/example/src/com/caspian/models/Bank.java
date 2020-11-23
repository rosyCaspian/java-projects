package com.caspian.models;

import com.caspian.service.Info;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class Bank {
    public static List<User> usersData = Info.readUserInfo();
    public static int round = 0;
    public static int userNum = usersData.size();
    public static List<Map<String, String>> records = new ArrayList<Map<String, String>>();

    public static Map<String, String> depositSavingsAccount(){
        var money = 100;
        var user = 1;
        usersData.get(user).savings_account += money;


        Map<String, String> record = new HashMap<>();
        Map<String, String> res = new HashMap<>();

        record.put("id", usersData.get(user).id + "");
        record.put("client", usersData.get(user).name);
        record.put("overall", money + "");
        record.put("round", round + "");
        record.put("status", "SUCCESS");
        record.put("type", "depositSavingsAccount");

        records.add(record);

        res.put("name", usersData.get(user).name);
        res.put("overall", "+ £" + money);
        res.put("type_of_customer", "Savings Account");
        res.put("transaction_type", "Deposit into savings account");

        return res;
    }

    public static Map<String, String> depositCurrentAccount(){
        var money = getRandomNum(100, 300);
        var user = getRandomNum(0, usersData.size() - 1);
        usersData.get(user).current_acccount += money;


        Map<String, String> record = new HashMap<>();
        Map<String, String> res = new HashMap<>();

        record.put("id", usersData.get(user).id + "");
        record.put("client", usersData.get(user).name);
        record.put("overall", money + "");
        record.put("round", round + "");
        record.put("status", "SUCCESS");
        record.put("type", "depositCurrentAccount");

        records.add(record);

        res.put("name", usersData.get(user).name);
        res.put("overall", "+ £" + money);
        res.put("type_of_customer", "Current Account");
        res.put("transaction_type", "Deposit into current account");

        return res;
    }

    public static Map<String, String> withdrawSavingsAccount(){
        var money = getRandomNum(100, 300);
        var user = getRandomNum(0, usersData.size() - 1);
        usersData.get(user).savings_account -= money;


        Map<String, String> record = new HashMap<>();
        Map<String, String> res = new HashMap<>();

        record.put("id", usersData.get(user).id + "");
        record.put("client", usersData.get(user).name);
        record.put("overall", money + "");
        record.put("round", round + "");
        record.put("status", "SUCCESS");
        record.put("type", "withdrawalSavingsAccount");

        records.add(record);

        res.put("name", usersData.get(user).name);
        res.put("overall", "- £" + money);
        res.put("type_of_customer", "Savings Account");
        res.put("transaction_type", "Withdrawal into savings account");

        return res;
    }

    public static Map<String, String> withdrawalCurrentAccount(){
        var money = getRandomNum(100, 300);
        var user = getRandomNum(0, usersData.size() - 1);
        usersData.get(user).current_acccount -= money;


        Map<String, String> record = new HashMap<>();
        Map<String, String> res = new HashMap<>();

        record.put("id", usersData.get(user).id + "");
        record.put("client", usersData.get(user).name);
        record.put("overall", money + "");
        record.put("round", round + "");
        record.put("status", "SUCCESS");
        record.put("type", "withdrawalCurrentAccount");

        records.add(record);

        res.put("name", usersData.get(user).name);
        res.put("overall", "- £" + money);
        res.put("type_of_customer", "Current Account");
        res.put("transaction_type", "Withdrawal into current account");

        return res;
    }

    public static Map<String, String> payMonies(){
        var money = getRandomNum(100, 300);
        var user_1 = getRandomNum(0, usersData.size() - 1);
        var user_2 = getRandomNum(0, usersData.size() - 1);

        usersData.get(user_1).current_acccount -= money;
        usersData.get(user_2).current_acccount += money;


        Map<String, String> record = new HashMap<>();
        Map<String, String> res = new HashMap<>();

        record.put("id_in", usersData.get(user_1).id + "");
        record.put("id_out", usersData.get(user_2).id + "");
        record.put("client_in", usersData.get(user_1).name);
        record.put("client_out", usersData.get(user_2).name);
        record.put("money_out", money + "");
        record.put("money_in", money + "");
        record.put("overall", money*2 + "");
        record.put("round", round + "");
        record.put("status", "SUCCESS");
        record.put("type", "payMonies");

        records.add(record);

        res.put("name_1", usersData.get(user_1).name);
        res.put("name_2", usersData.get(user_2).name);
        res.put("overall", money + "");
        res.put("type_of_customer", "payMonies");
        res.put("transaction_type", "Pay monies");

        return res;
    }

    public static void phrase(){
        usersData.forEach(user ->{
            if (user.savings_account < 0) {
                user.current_acccount += user.savings_account;
                user.savings_account = 0;
                if (user.current_acccount < 0) {
                    user.current_acccount -= (int)(-user.current_acccount * 0.02);
                }
            } else {
                user.savings_account += (int)(user.savings_account * 0.01);
            }
        });

        Info.saveUserInfo(usersData);
    }

    public static int getRandomNum(int begin, int end){
        int num =  (int) (Math.random()*(end-begin)+begin);
        return num;
    }


    public static Map<String, String> start(){
        Map<String, String> res = null;
        round++;
        var option = getRandomNum(1, 5);
        System.out.println("option: " + option);

        switch (option){
            case 1:
                res = depositCurrentAccount();
                break;
            case 2:
                res = withdrawalCurrentAccount();
                break;
            case 3:
                res = depositSavingsAccount();
                break;
            case 4:
                res = withdrawSavingsAccount();
                break;
            case 5:
                res = payMonies();
                break;
        }

        Info.saveUserInfo(usersData);

        return res;
    }
}
