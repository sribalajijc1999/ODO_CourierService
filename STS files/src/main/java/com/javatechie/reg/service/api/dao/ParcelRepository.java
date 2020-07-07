package com.javatechie.reg.service.api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javatechie.reg.service.api.model.ParcelDetails;

public interface ParcelRepository extends JpaRepository<ParcelDetails, Integer>{
	List<ParcelDetails> findByParcelID(String ParcelId);

}
