package com.anubhav.springbasics.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anubhav.springbasics.businesslogic.VendorOperation;
import com.anubhav.springbasics.entities.vendor;

@RestController
public class VendorController {
	@Autowired
	VendorOperation VendorRepoObj ;
	
	
	@RequestMapping("/Vendors")
	public List<vendor> getAllVendor() throws SQLException {
		
		return VendorRepoObj.getAllVendor();
	}
	
	
	@RequestMapping("/Vendors/{id}")
	public vendor getAllVendor(@PathVariable int id) throws SQLException {
		
		return VendorRepoObj.getSingleVendor(id);
	}
}
