import { Component, OnInit } from '@angular/core';
import { ChildrenDetailsService } from 'src/app/allServices/children-details.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { SponserDetailsService } from 'src/app/allServices/sponser-details.service';

@Component({
  selector: 'app-children-details',
  templateUrl: './children-details.component.html',
  styleUrls: ['./children-details.component.css']
})
export class ChildrenDetailsComponent implements OnInit{

 
  noError:boolean=false;
  edited:boolean=false;
  msg:string='';
  del_icon=faTrash;
  edit_icon=faEdit;
  editOn:boolean=false;
  updateOn:boolean=false;
  

  childForm:any={
    // ORDER OF VARIABLES SHOULD MATCH WITH API VARIABLES ORDER TO AVOID ERROR-400
    firstName:"",
    lastName:"",
    age:0,
    guardianName:"",
    contactNo:"",
    address:"",
    remarks:"",
    doj:"",
    type_of_child:"0",
    dob:"",
    gender:"",
    standard:"0",
    sponser:"0",
    recordStatus:"Done"
  }
  

  constructor(private kid:ChildrenDetailsService,private spons:SponserDetailsService){}
  sponserData: any=[];
  kidData:any=[];
  arrInfo:any=[];
  HistoryData:any=[];
  searchItem:string='';
  searchItems:string='';
  genders=['Male','Female','Others'];

  qualificationData=[
    // {text: '----SELECT----',value:''},
    {text: 'LKG',group:'kindar-garten',value:''},
    {text: 'UKG',group:'kindar-garten',value:''},

    {text: 'I',group:'primary-class',value:''},
    {text: 'II',group:'primary-class',value:''},
    {text: 'III',group:'primary-class',value:''},
    {text: 'IV',group:'primary-class',value:''},
    {text: 'V',group:'primary-class',value:''},

    {text: 'VI',group:'secodary-class',value:''},
    {text: 'VII',group:'secodary-class',value:''},
    {text: 'VIII',group:'secodary-class',value:''},
    {text: 'IX',group:'secodary-class',value:''},
    {text: 'X',group:'secodary-class',value:''},

    {text: 'I year',group:'intermediate',value:''},
    {text: 'II year',group:'intermediate',value:''},
  ]

  
  

  
  addChildData(){
    
    this.kid.addChildInfo(this.childForm)
    
    .subscribe(
      {
      next:((res: { message: any; })=>{
        this.noError=true;
        this.msg=res.message;
        // alert(this.msg);
        console.log(this.msg);
        console.log(res);
        this.getChildDetails();
        this.cancelForm();
      }),
      error:((err: { error: { message: any; }; })=>{
        alert(err?.error.message);
        
      })
      
    })
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth",});
    console.log(this.childForm);
  }

  cancelForm(){
    this.childForm.firstName='',
    this.childForm.lastName='',
    this.childForm.dob='',
    this.childForm.age='',
    this.childForm.gender='',
    this.childForm.standard='',
    this.childForm.guardianName='',
    this.childForm.contactNo='',
    this.childForm.address='',
    this.childForm.doj='',
    this.childForm.remarks='',
    this.childForm.type_of_child='',
    this.childForm.sponser=''
  }
  getSponserDetails(){
    this.spons.getSponserInfo().subscribe((inform: any)=>{
      this.sponserData=inform;
      console.log("RETRIEVING SPONSER DETAILS ",this.sponserData);
    })
  }
  EditRow(id:any){
    window.scrollTo(0,0);
    this.editOn=true;
    this.updateOn=true;

    // let indexValue=this.kidData.findIndex((x:{childID:any;})=>x.childID==id)
    // console.log(indexValue);
    // this.childForm.firstName=this.kidData[indexValue].firstName;
    // this.childForm.lastName=this.kidData[indexValue].lastName;
    // this.childForm.dob=this.kidData[indexValue].dob;
    // this.childForm.age=this.kidData[indexValue].age;
    // this.childForm.gender=this.kidData[indexValue].gender;
    // this.childForm.standard=this.kidData[indexValue].standard;
    // this.childForm.guardianName=this.kidData[indexValue].guardianName;
    // this.childForm.contactNo=this.kidData[indexValue].contactNo;
    // this.childForm.address=this.kidData[indexValue].address;
    // this.childForm.doj=this.kidData[indexValue].doj;
    // this.childForm.remarks=this.kidData[indexValue].remarks;
    // this.childForm.type_of_child=this.kidData[indexValue].type_of_child;

    // instead of writing above Lines, use this simple line to forward table row data to form using ngFor iteration value
      this.childForm=id;
  }
  UpdateRow(receivedData:any){
    this.updateOn=false;
    this.editOn=false;

    this.kid.updateChildInfo(receivedData).subscribe((res: any)=>{
      this.getChildDetails();
      console.log(receivedData)
    })

  }
  
  openHistoryDiv:boolean=false;
  historyButton=true;
  openDiv(){
    this.historyButton=!this.historyButton;
    this.openHistoryDiv=!this.openHistoryDiv;
    

  }
  ngOnInit(): void {
    this.getChildDetails();
    this.getSponserDetails();
    this.getDeletedChildDetails();
  }


  getChildDetails(){
    this.kid.getChildInfo().subscribe((inform: any)=>{
      this.kidData=inform;
      console.log("RETRIEVING CHILDREN DETAILS ",this.kidData);
    })
  }
  delChildDetails(childId:number){
    this.kid.deleteChildInfo(childId).
    subscribe((res: any)=>{
      this.getChildDetails()
    })
  }

  getDeletedChildDetails(){
    this.kid.getHistory().subscribe((inform: any)=>{
      this.HistoryData=inform;
      console.log("RETRIEVING DELETED CHILDREN DETAILS ",this.HistoryData);
    })
  }
}
