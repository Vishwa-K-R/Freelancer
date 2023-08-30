package com.freelancing.main.dto.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "Job")
public class Jobpost{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String description;
	private String emailAddress;
	private String username;
	private String Specialisms;
	private String Industry;
	private String JobType;
	private String CareerLevel;
	private String Specialisms1;
	private String Experience;
	private String Qualification;
	private String Gender;
	private String ApplicationDeadline;
	private String Country;
	private String City;
	private String FullAddress;
	private String ZipCode;
	private String Latitude;
	private String Longitude;
	public Jobpost() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getSpecialisms() {
		return Specialisms;
	}
	public void setSpecialisms(String specialisms) {
		Specialisms = specialisms;
	}
	public String getIndustry() {
		return Industry;
	}
	public void setIndustry(String industry) {
		Industry = industry;
	}
	public String getJobType() {
		return JobType;
	}
	public void setJobType(String jobType) {
		JobType = jobType;
	}
	public String getCareerLevel() {
		return CareerLevel;
	}
	public void setCareerLevel(String careerLevel) {
		CareerLevel = careerLevel;
	}
	public String getSpecialisms1() {
		return Specialisms1;
	}
	public void setSpecialisms1(String specialisms1) {
		Specialisms1 = specialisms1;
	}
	public String getExperience() {
		return Experience;
	}
	public void setExperience(String experience) {
		Experience = experience;
	}
	public String getQualification() {
		return Qualification;
	}
	public void setQualification(String qualification) {
		Qualification = qualification;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getApplicationDeadline() {
		return ApplicationDeadline;
	}
	public void setApplicationDeadline(String applicationDeadline) {
		ApplicationDeadline = applicationDeadline;
	}
	public String getCountry() {
		return Country;
	}
	public void setCountry(String country) {
		Country = country;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		City = city;
	}
	public String getFullAddress() {
		return FullAddress;
	}
	public void setFullAddress(String fullAddress) {
		FullAddress = fullAddress;
	}
	public String getZipCode() {
		return ZipCode;
	}
	public void setZipCode(String zipCode) {
		ZipCode = zipCode;
	}
	public String getLatitude() {
		return Latitude;
	}
	public void setLatitude(String latitude) {
		Latitude = latitude;
	}
	public String getLongitude() {
		return Longitude;
	}
	public void setLongitude(String longitude) {
		Longitude = longitude;
	}
	public Jobpost(int id, String title, String description, String emailAddress, String username, String specialisms,
			String industry, String jobType, String careerLevel, String specialisms1, String experience,
			String qualification, String gender, String applicationDeadline, String country, String city,
			String fullAddress, String zipCode, String latitude, String longitude) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.emailAddress = emailAddress;
		this.username = username;
		Specialisms = specialisms;
		Industry = industry;
		JobType = jobType;
		CareerLevel = careerLevel;
		Specialisms1 = specialisms1;
		Experience = experience;
		Qualification = qualification;
		Gender = gender;
		ApplicationDeadline = applicationDeadline;
		Country = country;
		City = city;
		FullAddress = fullAddress;
		ZipCode = zipCode;
		Latitude = latitude;
		Longitude = longitude;
	}
	@Override
	public String toString() {
		return "Jobpost [id=" + id + ", title=" + title + ", description=" + description + ", emailAddress="
				+ emailAddress + ", username=" + username + ", Specialisms=" + Specialisms + ", Industry=" + Industry
				+ ", JobType=" + JobType + ", CareerLevel=" + CareerLevel + ", Specialisms1=" + Specialisms1
				+ ", Experience=" + Experience + ", Qualification=" + Qualification + ", Gender=" + Gender
				+ ", ApplicationDeadline=" + ApplicationDeadline + ", Country=" + Country + ", City=" + City
				+ ", FullAddress=" + FullAddress + ", ZipCode=" + ZipCode + ", Latitude=" + Latitude + ", Longitude="
				+ Longitude + "]";
	}
	
}