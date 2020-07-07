import { Component, OnInit } from '@angular/core';
import { DbSignupService } from '../db-signup.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {

  parceldet : ParcelDetails = new ParcelDetails();
  message: any;

  addParcel = new FormGroup({
    senderName : new FormControl(''),
    senderContactNumber : new FormControl(''),
    receiverName : new FormControl(''),
    receiverContactNumber : new FormControl(''),
    senderAddress : new FormControl(''),
    senderState : new FormControl(''),
    senderCountry : new FormControl(''),
    senderPincode : new FormControl(''),
    receiverAddress : new FormControl(''),
    receiverState : new FormControl(''),
    receiverCountry : new FormControl(''),
    receiverPincode : new FormControl(''),
    parcelWeight : new FormControl(''),
    parcelType : new FormControl('')

  });

  assignValues() {

    this.parceldet.SenderName = this.addParcel.value.senderName;
    this.parceldet.SenderContactNo = this.addParcel.value.senderContactNumber;
    this.parceldet.ReceiverName = this.addParcel.value.receiverName;
    this.parceldet.ReceiverContactNo = this.addParcel.value.receiverContactNumber;
    this.parceldet.SenderAddress = this.addParcel.value.senderAddress;
    this.parceldet.SenderState = this.addParcel.value.senderState;
    this.parceldet.SenderCountry = this.addParcel.value.senderCountry;
    this.parceldet.SenderPincode = this.addParcel.value.senderPincode;
    this.parceldet.ReceiverAddress = this.addParcel.value.receiverAddress;
    this.parceldet.ReceiverState = this.addParcel.value.receiverState;
    this.parceldet.ReceiverCountry = this.addParcel.value.receiverCountry;
    this.parceldet.ReceiverPincode = this.addParcel.value.receiverPincode;
    this.parceldet.ParcelWeight = this.addParcel.value.parcelWeight;
    this.parceldet.ParcelType = this.addParcel.value.parcelType;

  }

  onSubmit() {
    this.assignValues();
    let resp = this.service.addEmployee(this.parceldet);
    resp.subscribe((data)=>{
      this.message = data;
    });
  }

  costCalc() {
    this.parceldet.ParcelCost = 0.5*this.parceldet.ParcelWeight;
		
		if(this.parceldet.ParcelType.toLocaleLowerCase() === "speed")
			this.parceldet.ParcelCost = 5*this.parceldet.ParcelCost;
		else
			this.parceldet.ParcelCost = 2*this.parceldet.ParcelCost;
	
		if(this.parceldet.SenderCountry.toLocaleLowerCase() != this.parceldet.ReceiverCountry.toLocaleLowerCase())
			this.parceldet.ParcelCost+=5000;
		else if(this.parceldet.SenderState.toLocaleLowerCase() != this.parceldet.ReceiverState.toLocaleLowerCase())
			this.parceldet.ParcelCost+=750;	
		else if(this.parceldet.SenderPincode/1000 != this.parceldet.ReceiverPincode/1000)
			this.parceldet.ParcelCost+=200;
  }

  constructor(private service : DbSignupService) { }

  ngOnInit() {
  }
}

export class ParcelDetails {

  SenderName : String ;
	SenderContactNo : number ;
	ReceiverName : string ;
	ReceiverContactNo : number ;
	ParcelWeight : number ;
  ParcelType : String ;
	Date : Date ;
	ParcelCost : number ;
	ParcelID : String ;
	SenderAddress : String ;
	SenderCountry : String ;
	SenderState : String ;
	SenderPincode : number ;
  ReceiverAddress : String ;
	ReceiverCountry : String ;
  ReceiverState : String ;
	ReceiverPincode : number ;
	status : String ;
}
