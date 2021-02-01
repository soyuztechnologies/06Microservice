package com.anubhav.springbasics.entities;

import java.util.*;

public class vendor {
	private Long id;
	private String firstName;
	private String lastName;
	private String companyName;
	private String webSite;
	private String emailId;
	private String gstNumber;
	
	public vendor() {
		
	}
	
	public vendor(Long id, String firstName, String lastName, String companyName, String webSite, String emailId,
			String gSTNumber) {
		id = id;
		firstName = firstName;
		lastName = lastName;
		companyName = companyName;
		webSite = webSite;
		emailId = emailId;
		gstNumber = gSTNumber;
	}

	public vendor(int id, String firstName, String lastName, String companyName) {
		// TODO Auto-generated constructor stub
		this.id = (long) id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.companyName = companyName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getWebSite() {
		return webSite;
	}

	public void setWebSite(String webSite) {
		this.webSite = webSite;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getGstNumber() {
		return gstNumber;
	}

	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}
	
	
	
}

