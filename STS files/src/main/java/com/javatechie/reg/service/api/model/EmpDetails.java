package com.javatechie.reg.service.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

@JsonFormat(shape = JsonFormat.Shape.STRING)

@Table(name = "empDetails")

public class EmpDetails {
	
	@Id
	@GeneratedValue
	private int id;
	private String officialId;
	private String role;
	private String name;
	private String password;
	private String city;
	private String emailId;
	private int contactNumber;
	private String address;
	
	public String getOfficialId() {
		return officialId;
	}
	public void setOfficialId(String officialId) {
		this.officialId = officialId;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public int getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "EmpDetails [id=" + id + ", officialId=" + officialId + ", role=" + role + ", name=" + name
				+ ", password=" + password + ", city=" + city + ", emailId=" + emailId + ", contactNumber="
				+ contactNumber + ", address=" + address + "]";
	}
}
