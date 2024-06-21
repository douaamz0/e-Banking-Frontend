import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountsService} from "../services/accounts.service";
import {AccountDetails} from "../model/account.model";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{

  accountFormGroup!:FormGroup;
  currentPage:number=0;
  pageSize:number=5;
  accountObservable!:Observable<AccountDetails>
  operationsFormsGroup!:FormGroup;
  errorMessage!:string;
  constructor(private fb:FormBuilder, private accountService:AccountsService,
              protected authService:AuthService) {
  }

  ngOnInit(): void {
    this.accountFormGroup=this.fb.group({
      accountId:this.fb.control('')
    });
    this.operationsFormsGroup=this.fb.group({

      operationType:this.fb.control(null),
      amount:this.fb.control(0),
      description:this.fb.control(null),
      accountDestination:this.fb.control(null)
    })
  }

  handleSearchAccount() {

    let accountId:string=this.accountFormGroup.value.accountId;
   this.accountObservable= this.accountService.getAccount(accountId,this.currentPage,this.pageSize).pipe(
     catchError(err=>{
       this.errorMessage=err.message;
       return throwError(err);
     })
   )
  }

  gotoPage(page: number) {
    this.currentPage=page;
    this.handleSearchAccount();
  }

  handleAccountOperation() {
   let accountId:string=this.accountFormGroup.value.accountId;
   let operationType=this.operationsFormsGroup.value.operationType;
   let amount=this.operationsFormsGroup.value.amount;
   let description=this.operationsFormsGroup.value.description;
   let accountDestination=this.operationsFormsGroup.value.accountDestination;
   if(operationType=='DEBIT'){
    this.accountService.debit(accountId,amount,description).subscribe({
      next:(data)=>{
        alert("success debit !");
        this.operationsFormsGroup.reset();
        this.handleSearchAccount();
      },
      error:(err)=>{
        console.log(err);
      }
    });
   }else if(operationType=='CREDIT'){
     this.accountService.credit(accountId,amount,description).subscribe({
       next:(data)=>{
         alert("success credit !");
         this.operationsFormsGroup.reset();
         this.handleSearchAccount();
       },
       error:(err)=>{
         console.log(err);
       }
     });
   }else if(operationType=='TRANSFER'){
     this.accountService.transfer(accountId,accountDestination,amount,description).subscribe({
       next:(data)=>{
         alert("success transfer !");
         this.operationsFormsGroup.reset();
         this.handleSearchAccount();
       },
       error:(err)=>{
         console.log(err);
       }
     });

   }
  }
}
