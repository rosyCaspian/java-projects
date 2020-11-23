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
import java.util.List;

public class Info extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        var res = Info.readUserInfo();

        var sql = "UPDATE userinfo SET current_acccount='" + res.get(1).getCurrent_acccount() + "',savings_account='" + res.get(1).getSavings_account() + "' WHERE id=" + (1+1);
        System.out.println("sql: " + sql);

        response.setContentType("application/json; charset=utf-8");
        response.setCharacterEncoding("UTF-8");
        String userJson = JSON.toJSONString(res);
        System.out.println(userJson.toString());
        OutputStream out = response.getOutputStream();
        out.write(userJson.getBytes("UTF-8"));
        out.flush();
    }

    /**
     * 从数据库读取用户信息
     * @return
     */
    public static List<User> readUserInfo(){
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

        return res;
    }

    /**
     * 更新用户数据
     * @param userinfo
     */
    public static void saveUserInfo(List<User> userinfo){

        for(int index=0; index < userinfo.size(); index++){
            User item = userinfo.get(index);
            var sql = "UPDATE userinfo SET current_acccount='" + item.getCurrent_acccount() + "',savings_account='" + item.getSavings_account() + "' WHERE id=" + (index+1);
            try{
                DB.execute(sql, null);
            }catch (Exception ex){
                System.out.println("something wrong..." + ex);
            }
        }
    }
}

