package com.freelancing.main.dto.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Profile {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String job_title;
	private long ph_no;
	private float salary;
	private int age;
	private int experience;
	private String language;
	private String about;
	private String facebook;
	private String twitter;
	private String linkedln;
	private String googleplus;
	private String country;
	private String state;
	private String fulladdress;
	private String latitude;
	private String longitude;
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
	public String getJob_title() {
		return job_title;
	}
	public void setJob_title(String job_title) {
		this.job_title = job_title;
	}
	public long getPh_no() {
		return ph_no;
	}
	public void setPh_no(long ph_no) {
		this.ph_no = ph_no;
	}
	public float getSalary() {
		return salary;
	}
	public void setSalary(float salary) {
		this.salary = salary;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public String getFacebook() {
		return facebook;
	}
	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}
	public String getTwitter() {
		return twitter;
	}
	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}
	public String getLinkedln() {
		return linkedln;
	}
	public void setLinkedln(String linkedln) {
		this.linkedln = linkedln;
	}
	public String getGoogleplus() {
		return googleplus;
	}
	public void setGoogleplus(String googleplus) {
		this.googleplus = googleplus;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getFulladdress() {
		return fulladdress;
	}
	public void setFulladdress(String fulladdress) {
		this.fulladdress = fulladdress;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	@Override
	public String toString() {
		return "Profile [id=" + id + ", name=" + name + ", job_title=" + job_title + ", ph_no=" + ph_no + ", salary="
				+ salary + ", age=" + age + ", experience=" + experience + ", language=" + language + ", about=" + about
				+ ", facebook=" + facebook + ", twitter=" + twitter + ", linkedln=" + linkedln + ", googleplus="
				+ googleplus + ", country=" + country + ", state=" + state + ", fulladdress=" + fulladdress
				+ ", latitude=" + latitude + ", longitude=" + longitude + "]";
	}
	public Profile() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}