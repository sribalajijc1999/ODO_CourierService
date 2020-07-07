package com.javatechie.reg.service.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import com.javatechie.reg.service.api.dao.EmpRepository;
import com.javatechie.reg.service.api.dao.ParcelRepository;
import com.javatechie.reg.service.api.dao.UserRepository;
import com.javatechie.reg.service.api.model.EmpDetails;
import com.javatechie.reg.service.api.model.ParcelDetails;
import com.javatechie.reg.service.api.model.User;

import java.util.List;


@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class RegistrationServiceApplication {

    @Autowired
    private UserRepository repository;
    @Autowired
    private EmpRepository empRepo;
    
    private ParcelRepository parcelRepo;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
    	List<User> list = findUser(user.getOfficialId());
        if(list.size() > 0) {
        	return "This Official Id is already taken";
        }
        repository.save(user);
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }
    
    @PostMapping("/addEmployee")
    public String addEmployee(@RequestBody EmpDetails empDetailsObj) {
    	List<EmpDetails> list = findEmployee(empDetailsObj.getOfficialId());
        if(list.size() > 0) {
        	return "This Official Id is already taken";
        }
        empRepo.save(empDetailsObj);
        return "Employee <" + empDetailsObj.getName() + "> is successfully added";
    }
    
    @PostMapping("/addParcel")
    public String addParcel(@RequestBody ParcelDetails parcel) {
    	System.out.print(parcel.generateParcelId());
        parcelRepo.save(parcel);
        return "This is your <" + parcel.getParcelID() + "> Parcel ID.";
    }
    
    @GetMapping("/getAllUsers")
    public List<User> findAllUsers() {
    	return repository.findAll();
	}
    
    @GetMapping("/getAllEmployees")
    public List<EmpDetails> findAllEmployees() {
    	return empRepo.findAll();
	}

    @GetMapping("/getAllParcels")
    public List<ParcelDetails> findAllParcels() {
    	return parcelRepo.findAll();
	}
    
    @GetMapping("/findUser/{officialId}")
    public List<User> findUser(@PathVariable String officialId) {
        return repository.findByOfficialId(officialId);
    }
    
    @GetMapping("/findEmployee/{officialId}")
    public List<EmpDetails> findEmployee(@PathVariable String officialId) {
        return empRepo.findByOfficialId(officialId);
    }

    @GetMapping("/findParcel/{ParcelId}")
    public List<ParcelDetails> findParcel(@PathVariable String ParcelId) {
        return parcelRepo.findByParcelID(ParcelId);
    }
    
    @DeleteMapping("/cancel/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
        repository.deleteById(id);
        return repository.findAll();
    }
    
    @DeleteMapping("/delete/{id}")
    public List<ParcelDetails> deleteParcel(@PathVariable int id) {
        parcelRepo.deleteById(id);
        return parcelRepo.findAll();
    }
    
    @DeleteMapping("/deleteEmployee/{id}")
    public List<EmpDetails> deleteEmployee(@PathVariable int id) {
        empRepo.deleteById(id);
        return empRepo.findAll();
    }

    public static void main(String[] args) {
        SpringApplication.run(RegistrationServiceApplication.class, args);
    }
}


