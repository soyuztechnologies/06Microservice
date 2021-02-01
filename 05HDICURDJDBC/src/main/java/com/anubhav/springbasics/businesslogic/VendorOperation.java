package com.anubhav.springbasics.businesslogic;


import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.anubhav.springbasics.entities.vendor;

import argo.jdom.JdomParser;
import argo.jdom.JsonNode;
import argo.saj.InvalidSyntaxException;

import java.sql.Connection;

@Component
public class VendorOperation {
	
	public Connection conn;
	public Statement stmt;
	public ResultSet rs;
	String url;
    String user;
    String password;
    
    @PostConstruct
	public void startConnection() {
		this.url = "";
		this.user = "";
		this.password = "";
		
		try {
			
			String vcap_service = System.getenv("VCAP_SERVICES");
			System.out.println(vcap_service);
			if(vcap_service != null && vcap_service.length() >0 ) {
			
			JsonNode root = new JdomParser().parse(vcap_service);
			JsonNode serviceRoot = root.getNode("hanatrial");
			JsonNode serviceCreden = serviceRoot.getNode(0).getNode("credentials");
			
			this.url = serviceCreden.getStringValue("url");
			this.user = serviceCreden.getStringValue("user");
			this.password = serviceCreden.getStringValue("password");
			
			}
			
		} catch (InvalidSyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("!!Error in getting  VCAP_SERVICES Prop!!");
		}
		
		
//		this.url = "";
//		this.user = "";
//		this.password = "";
//		
		try {
		conn = DriverManager.getConnection(this.url,this.user,this.password);
		stmt = conn.createStatement();
		}catch(SQLException e) {
			System.out.println("!!Error in DB Conn!!");
			System.out.println(e.getMessage());
		}
	}
	
	//What this method does
		public List<vendor> getAllVendor() throws SQLException{
			
			List<vendor> vendorList = new ArrayList<vendor>();
			
			rs = stmt.executeQuery("Select top 100 * from VENDOR");
			
			while(rs.next()) {
				
				vendorList.add(new vendor(rs.getInt("ID"),
											rs.getString("FIRST_NAME"),
											rs.getString("LAST_NAME"),
											rs.getString("COMPANY_NAME")));
			}
			return vendorList;
		}
		
		
		
		//What this method does
			public vendor getSingleVendor(int id) throws SQLException{
				
				vendor vendorObj = new vendor();
				
				rs = stmt.executeQuery("Select * from vendor where id ='"+Integer.toString(id)+"'" );
				
				while(rs.next()) {

					vendorObj.setId((long) rs.getInt("ID"));
					vendorObj.setFirstName(rs.getString("FIRST_NAME"));
					vendorObj.setLastName(rs.getString("LAST_NAME"));
					vendorObj.setCompanyName(rs.getString("COMPANY_NAME"));
												
				
			}
				return vendorObj;
			}
	
			@PreDestroy
	public void endConnection() throws SQLException {
		rs.close();
		stmt.close();
		conn.close();
	}
	
}
