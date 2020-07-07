package com.javatechie.reg.service.api.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString


@JsonFormat(shape = JsonFormat.Shape.STRING)

@Table(name = "ParcelDetails")

public class ParcelDetails {

	
	@Id
	@GeneratedValue
	private int id;
	private String SenderName;
	private int SenderContactNo;
	private String ReceiverName;
	private int ReceiverContactNo;
	private double ParcelWeight;
	private String ParcelType;
	private double ParcelCost;
	private String SenderAddress;
	private String SenderCountry;
	private String SenderState;
	private int SenderPincode;
	private String ReceiverAddress;
	private String ReceiverCountry;
	private String ReceiverState;
	private int ReceiverPincode;
	private LocalDateTime Date = LocalDateTime.now();
	private String status = "Started";
	private String ParcelId = "odo";
	
	public String generateParcelId() {
		
		ParcelId = ParcelId + SenderName.substring(0, 2) + ReceiverName.substring(0, 2);
		return ParcelId;
	}

	
	public String getStatus() {
		return status;
	}
	public String getSenderName() {
		return SenderName;
	}
	public void setSenderName(String senderName) {
		SenderName = senderName;
	}
	public int getSenderContactNo() {
		return SenderContactNo;
	}
	public void setSenderContactNo(int senderContactNo) {
		SenderContactNo = senderContactNo;
	}
	public String getReceiverName() {
		return ReceiverName;
	}
	public void setReceiverName(String receiverName) {
		ReceiverName = receiverName;
	}
	public int getReceiverContactNo() {
		return ReceiverContactNo;
	}
	public void setReceiverContactNo(int receiverContactNo) {
		ReceiverContactNo = receiverContactNo;
	}
	public double getParcelWeight() {
		return ParcelWeight;
	}
	public void setParcelWeight(double parcelWeight) {
		ParcelWeight = parcelWeight;
	}
	public String getParcelType() {
		return ParcelType;
	}
	public void setParcelType(String parcelType) {
		ParcelType = parcelType;
	}
	public LocalDateTime getDate() {
		return Date;
	}
	
	public String getParcelID() {
		return ParcelId;
	}
	
	public String getSenderAddress() {
		return SenderAddress;
	}
	public void setSenderAddress(String senderAddress) {
		SenderAddress = senderAddress;
	}
	public String getSenderCountry() {
		return SenderCountry;
	}
	public void setSenderCountry(String senderCountry) {
		SenderCountry = senderCountry;
	}
	public String getSenderState() {
		return SenderState;
	}
	public void setSenderState(String senderState) {
		SenderState = senderState;
	}
	public int getSenderPincode() {
		return SenderPincode;
	}
	public void setSenderPincode(int senderPincode) {
		SenderPincode = senderPincode;
	}
	public String getReceiverAddress() {
		return ReceiverAddress;
	}
	public void setReceiverAddress(String receiverAddress) {
		ReceiverAddress = receiverAddress;
	}
	public String getReceiverCountry() {
		return ReceiverCountry;
	}
	public void setReceiverCountry(String receiverCountry) {
		ReceiverCountry = receiverCountry;
	}
	public String getReceiverState() {
		return ReceiverState;
	}
	public void setReceiverState(String receiverState) {
		ReceiverState = receiverState;
	}
	public int getReceiverPincode() {
		return ReceiverPincode;
	}
	public void setReceiverPincode(int receiverPincode) {
		ReceiverPincode = receiverPincode;
	}
	public double getParcelCost() {
		return ParcelCost;
	}
	public void setParcelCost(double parcelCost) {
		ParcelCost = parcelCost;
	}
}
