package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Repository.CarRepository;
import com.example.demo.Entity.Car;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/Car")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping
    public List<Car> getAllCar(){
        return carRepository.findAll();
    }

    @PostMapping
    public Car createCardetails(@RequestBody Car employee) {
        return carRepository.save(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Car>> getCarById(@PathVariable  int id){
        Optional<Car> Car = carRepository.findById(id);
        return ResponseEntity.ok(Car);
    }

    @PutMapping("{id}")
	public Car updateCarDetails(@RequestBody Car b)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		return carRepository.save(b);		
	}
    @DeleteMapping("{id}")
	public String deleteDetails(@PathVariable int id)
	{
		carRepository.deleteById(id);
		return "Id : "+id+" is deleted";
	}
    @DeleteMapping
    public String deleteAllDetails()
    {
    	carRepository.deleteAll();
    	return "All Car deleted";
    }
}