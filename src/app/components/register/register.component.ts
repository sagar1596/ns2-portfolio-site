import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private rs: RegisterService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.regForm = this.fb.group({
      full_name: ['', Validators.required],
      user_name: ['', Validators.required],
      password: ['',Validators.required],
      confirm_password: ['',Validators.required ]
    });
  }

  addUser(full_name, user_name, password) {
    this.rs.addUser(full_name, user_name, password);
  }

}
