package com.caspian.service;

import com.caspian.models.*;
import com.alibaba.fastjson.JSON;
import com.caspian.db.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class Example extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<User> res= null;
        // User res = null;
        var sql = "SELECT id, name, type_of_customer, current_acccount, savings_account, gender FROM userinfo";
        /*Res res = null;
        var sql = "UPDATE userinfo SET saving_account='6000' WHERE id = ?";
        List<Object> params = new ArrayList<Object>();
        params.add(1);*/
        try{
            res = DB.seachAll(sql, null, User.class);
        }catch (Exception ex){
            System.out.println("something wrong..." + ex);
        }

        response.setContentType("application/json; charset=utf-8");
        response.setCharacterEncoding("UTF-8");
        String userJson = JSON.toJSONString(res);
        System.out.println(userJson.toString());
        OutputStream out = response.getOutputStream();
        out.write(userJson.getBytes("UTF-8"));
        out.flush();
    }
}
