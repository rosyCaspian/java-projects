package com.caspian.service;

import com.alibaba.fastjson.JSON;
import com.caspian.models.Bank;
import com.caspian.models.Res;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

public class Phrase extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Bank.phrase();

        response.setContentType("application/json; charset=utf-8");
        response.setCharacterEncoding("UTF-8");
        var res = new Res();
        res.setStatus("ok");
        String userJson = JSON.toJSONString(res);
        System.out.println(userJson.toString());
        OutputStream out = response.getOutputStream();
        out.write(userJson.getBytes("UTF-8"));
        out.flush();
    }
}
