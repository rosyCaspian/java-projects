package com.caspian.models;


import java.io.Serializable;

public class User implements Serializable{
    public int id;
    public String name;
    public String type_of_customer;
    public int current_acccount;
    public int savings_account;
    public String gender;

    public User(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType_of_customer() {
        return type_of_customer;
    }

    public void setType_of_customer(String type_of_customer) {
        this.type_of_customer = type_of_customer;
    }

    public int getCurrent_acccount() {
        return current_acccount;
    }

    public void setCurrent_acccount(int current_acccount) {
        this.current_acccount = current_acccount;
    }

    public int getSavings_account() {
        return savings_account;
    }

    public void setSavings_account(int savings_account) {
        this.savings_account = savings_account;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", username=" + name + ", type_of_customer=" + type_of_customer + ", current_acccount=" + current_acccount + ", saving_account=" + savings_account + ", gender=" + gender + "]";
    }

}
