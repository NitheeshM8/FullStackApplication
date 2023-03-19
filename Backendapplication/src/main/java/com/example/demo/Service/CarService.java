package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Car;
import com.example.demo.Repository.CarRepository;
@Service
public class CarService {
	@Autowired
	CarRepository carRepository;
	public  List <Car> sortinform(String field){
		return carRepository.findAll(Sort.by(field));
		}
		public Page<Car> paging (int page,int size) {
			PageRequest paging=PageRequest.of(page,size);
			return carRepository.findAll(paging);
		}
		public Page<Car> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return carRepository.findAll(paging);
		}
		
}