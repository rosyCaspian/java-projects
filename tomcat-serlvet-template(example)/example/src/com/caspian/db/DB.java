package com.caspian.db;

import org.yaml.snakeyaml.Yaml;
import com.caspian.models.*;

import java.io.*;
import java.lang.reflect.Field;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class DB {
    // 数据库配置属性
    static private String url;
    static private String username;
    static private String password;
    static private String mforname;
    static private String dbname;
    static private String database;
    static private String host;
    static private int port;

    static private Connection conn;
    static private PreparedStatement pstmt;
    static private ResultSet resultSet;

    /**
     * 获得数据库的连接
     * @return
     */
    static private void getConn(){
        if(url==null){
            /*DB.readConfig();*/
            dbname = "mysql";
            mforname = "com.mysql.cj.jdbc.Driver";
            host = "localhost";
            port = 3306;
            database = "bank";
            username = "root";
            password = "X1352411@y";
            url = "jdbc:" + dbname + "://" + host +':' + port +'/' + database + "?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
        }

        try {
            Class.forName(mforname);
            conn = DriverManager.getConnection(url, username, password);
            System.out.println("连接数据库成功.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 释放数据库连接
     */
    private static void releaseConn(){
        if(resultSet != null){
            try{
                resultSet.close();
                System.out.println("数据库释放链接.");
            }catch(SQLException e){
                e.printStackTrace();
            }
        }
    }

    /**
     * 增加、删除、改
     * @param sql
     * @param params
     * @return
     * @throws SQLException
     */
    public static Res execute(String sql, List<Object>params)throws SQLException{
        // 建立数据库链接
        DB.getConn();
        Res r = new Res();
        boolean flag = false;
        int result = -1;
        pstmt = conn.prepareStatement(sql);
        int index = 1;
        if(params != null && !params.isEmpty()){
            for(int i=0; i<params.size(); i++){
                pstmt.setObject(index++, params.get(i));
            }
        }
        result = pstmt.executeUpdate();
        flag = result > 0 ? true : false;
        if(flag)
            r.setStatus("ok");

        // 释放数据库链接
        DB.releaseConn();
        return r;
    }


    /**通过反射机制查询单条记录
     * @param sql
     * @param params
     * @param cls
     * @return
     * @throws Exception
     */
    public static <T> T search(String sql, List<Object> params,
                                     Class<T> cls )throws Exception{
        // 建立数据库链接
        DB.getConn();

        T resultObject = null;
        int index = 1;
        pstmt = conn.prepareStatement(sql);
        if(params != null && !params.isEmpty()){
            for(int i = 0; i<params.size(); i++){
                pstmt.setObject(index++, params.get(i));
            }
        }
        resultSet = pstmt.executeQuery();
        ResultSetMetaData metaData  = resultSet.getMetaData();
        int cols_len = metaData.getColumnCount();
        while(resultSet.next()){
            //通过反射机制创建一个实例
            resultObject = cls.getDeclaredConstructor().newInstance();
            for(int i = 0; i<cols_len; i++){
                String cols_name = metaData.getColumnName(i+1);
                Object cols_value = resultSet.getObject(cols_name);
                if(cols_value == null){
                    cols_value = "";
                }
                Field field = cls.getDeclaredField(cols_name);
                field.setAccessible(true); //打开javabean的访问权限
                field.set(resultObject, cols_value);
            }
        }

        // 释放数据库链接
        DB.releaseConn();
        return resultObject;
    }

    /**通过反射机制查询多条记录
     * @param sql
     * @param params
     * @param cls
     * @return
     * @throws Exception
     */
    public static <T> List<T> seachAll(String sql, List<Object> params,
                                         Class<T> cls )throws Exception {
        // 建立数据库链接
        DB.getConn();

        List<T> list = new ArrayList<T>();
        int index = 1;
        pstmt = conn.prepareStatement(sql);
        if(params != null && !params.isEmpty()){
            for(int i = 0; i<params.size(); i++){
                pstmt.setObject(index++, params.get(i));
            }
        }
        resultSet = pstmt.executeQuery();
        ResultSetMetaData metaData  = resultSet.getMetaData();
        int cols_len = metaData.getColumnCount();
        while(resultSet.next()){
            //通过反射机制创建一个实例
            T resultObject = cls.getDeclaredConstructor().newInstance();
            for(int i = 0; i<cols_len; i++){
                String cols_name = metaData.getColumnName(i+1);
                Object cols_value = resultSet.getObject(cols_name);
                if(cols_value == null){
                    cols_value = "";
                }
                Field field = cls.getDeclaredField(cols_name);
                field.setAccessible(true); //打开javabean的访问权限
                field.set(resultObject, cols_value);
            }
            list.add(resultObject);
        }

        // 释放数据库链接
        DB.releaseConn();
        return list;
    }

    /**
     *  从文件中读取数据库配置信息
     */
    static private void readConfig(){
        Yaml yaml = new Yaml();
        InputStream in = null;

        try {
            in = new FileInputStream("../../config.yaml");
        }catch (Exception ex){
            System.out.println("wrong....");
        }

        Map<String, Object> map = yaml.loadAs(in, Map.class);
        System.out.println(map.toString());

        dbname = (String)map.get("dbname");
        mforname = (String)map.get("mforname");
        host = (String)map.get("host");
        database = (String)map.get("database");
        username = (String)map.get("username");
        password = (String)map.get("password");
        port = (int)map.get("port");
        url = "jdbc:" + dbname + "://" + host +':' + port +'/' + database + "?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
    }
}
