package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cars")
public class Car {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	 private int id;
	 private String companyname;
	 private String carmodel;
	 private String buyname;
	 private String address;
	 private int age;
	 private Long phone;
	 private int price;
	public int getid() {
		return id;
	}

	public void setid(int id) {
		this.id = id;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getCarmodel() {
		return carmodel;
	}

	public void setCarmodel(String carmodel) {
		this.carmodel = carmodel;
	}

	public String getBuyname() {
		return buyname;
	}

	public void setBuyname(String buyname) {
		this.buyname = buyname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	public int getAge() {
		
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Car(int id, String companyname, String carmodel, String buyname, String address, Long phone, int price, int age) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.carmodel = carmodel;
		this.buyname = buyname;
		this.address = address;
		this.age = age;
		this.phone = phone;
		this.price = price;
	}

	public Car() {}
}
