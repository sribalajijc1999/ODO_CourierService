package com.javatechie.reg.service.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

@JsonFormat(shape = JsonFormat.Shape.STRING)

@Table(name="credentials")
public class User {
	
	@Id
    @GeneratedValue
    private int id;
    private String name;
    private String officialId;
    private String password;
    
	
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
	public String getOfficialId() {
		return officialId;
	}
	public void setOfficialId(String officialId) {
		this.officialId = officialId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	
   
	
}
