import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  userCreationForm = this.formBuilder.group({
    username:[''],
    firstName:[''],
    lastName:[''],
    password:[''],
    role:['customer']
  })

  onSubmit() {
    this.userService.addUser(this.userCreationForm.getRawValue())
    console.log(this.userCreationForm.getRawValue())
    console.log(this.userService.userList)
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
