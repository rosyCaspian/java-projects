package com.caspian.models;

public class Res {
    private String status;
    public Res(){
        status = "failed";
    }

    public String getStatus(){
        return status;
    }

    public void setStatus(String status){
        this.status = status;
    }
}
