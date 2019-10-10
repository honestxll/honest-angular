import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(value => {
      console.log('Register:', value);
    });
    this.registerForm.setValue({
      username: 'Honest Chen',
      password: 123123,
    });

    this.registerForm.statusChanges.subscribe(status => {
      console.log('Status: ', status);
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    console.log('Submit: ', this.registerForm.value);
  }
}
