package com.javatechie.reg.service.api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javatechie.reg.service.api.model.EmpDetails;

public interface EmpRepository extends JpaRepository<EmpDetails, Integer> {
	List<EmpDetails> findByOfficialId(String officialId);

}
