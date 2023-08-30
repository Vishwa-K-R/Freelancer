package com.freelancing.main.dto.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ResumeCompletion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String fname;
	private String mname;
	private String lname;
	private String job_title;
	private long ph_no;
	private float salary;
	private int age;
	private int experience;
	private String language;
	private String about;
	private String country;
	private String state;
	private String fulladdress;
	private String latitude;
	private String longitude;
	private String highskl;
	private String intermedium;
	private String graduation;
	private String university;
	private String degree;
	private String tpoc;
	private String graduatedyear;
	private String pcoa;
	private String co;
	private String summarysac;
	private String eil3y;
	private String eil2y;
	private String eil1y;
	private String syh;
	public ResumeCompletion() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ResumeCompletion [id=" + id + ", fname=" + fname + ", mname=" + mname + ", lname=" + lname
				+ ", job_title=" + job_title + ", ph_no=" + ph_no + ", salary=" + salary + ", age=" + age
				+ ", experience=" + experience + ", language=" + language + ", about=" + about + ", country=" + country
				+ ", state=" + state + ", fulladdress=" + fulladdress + ", latitude=" + latitude + ", longitude="
				+ longitude + ", highskl=" + highskl + ", intermedium=" + intermedium + ", graduation=" + graduation
				+ ", university=" + university + ", degree=" + degree + ", tpoc=" + tpoc + ", graduatedyear="
				+ graduatedyear + ", pcoa=" + pcoa + ", co=" + co + ", summarysac=" + summarysac + ", eil3y=" + eil3y
				+ ", eil2y=" + eil2y + ", eil1y=" + eil1y + ", syh=" + syh + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
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
	public String getHighskl() {
		return highskl;
	}
	public void setHighskl(String highskl) {
		this.highskl = highskl;
	}
	public String getIntermedium() {
		return intermedium;
	}
	public void setIntermedium(String intermedium) {
		this.intermedium = intermedium;
	}
	public String getGraduation() {
		return graduation;
	}
	public void setGraduation(String graduation) {
		this.graduation = graduation;
	}
	public String getUniversity() {
		return university;
	}
	public void setUniversity(String university) {
		this.university = university;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getTpoc() {
		return tpoc;
	}
	public void setTpoc(String tpoc) {
		this.tpoc = tpoc;
	}
	public String getGraduatedyear() {
		return graduatedyear;
	}
	public void setGraduatedyear(String graduatedyear) {
		this.graduatedyear = graduatedyear;
	}
	public String getPcoa() {
		return pcoa;
	}
	public void setPcoa(String pcoa) {
		this.pcoa = pcoa;
	}
	public String getCo() {
		return co;
	}
	public void setCo(String co) {
		this.co = co;
	}
	public String getSummarysac() {
		return summarysac;
	}
	public void setSummarysac(String summarysac) {
		this.summarysac = summarysac;
	}
	public String getEil3y() {
		return eil3y;
	}
	public void setEil3y(String eil3y) {
		this.eil3y = eil3y;
	}
	public String getEil2y() {
		return eil2y;
	}
	public void setEil2y(String eil2y) {
		this.eil2y = eil2y;
	}
	public String getEil1y() {
		return eil1y;
	}
	public void setEil1y(String eil1y) {
		this.eil1y = eil1y;
	}
	public String getSyh() {
		return syh;
	}
	public void setSyh(String syh) {
		this.syh = syh;
	}
	
}
