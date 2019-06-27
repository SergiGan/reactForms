import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormControl, Validators, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs/Observable';//+
import 'rxjs/add/observable/of';//+




@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'reactive';
  nameControl: FormControl;
  
  users = {
  	email: '',
  	password: ''
}

userForm = new FormGroup({
	email: new FormControl('', Validators.required),
	password: new FormControl('', Validators.required),
	//check: new FormControl('', [Validators.required, Validators.required])
});

constructor() { }

ngOnInit() {
}

onSubmit() {
	console.log(this.userForm.value);
if(this.userForm.valid){
	console.warn(this.userForm.value);
	console.log(this.userForm.value);
}


}
}
				/* @Component({
				    selector: 'app-login',
					templateUrl: './login.component.html',
					styleUrls: ['./login.component.css']
				})
export class AppComponent implements OnInit {
  title = 'reactive';
  nameControl: FormControl;
  
  users = {
  	email: '',
  	password: '',

  };

 	fullNameControl: FormGroup;
	userListControl: FormGroup;
	FormArray;
	FormGroup;

   ngOnInit(){//синхронний валідатор і асинхронний
	  this.nameControl = new FormControl('', [myValidator(5)],[myAsyncValidator, Validators.required, Validators.email]);// ,  - анг.валідатор	
	/*this.nameControl.valueChanges
	.delay()
	.switchMap(variable) {
		case "value":
			// code...
			break;
		
		default:
			// code...
			break;
	}
		this.nameControl.value;// на поточний момент
		this.nameControl.errors;//
		this.nameControl.valueChanges.subscribe((value) => console.log(value));
		this.nameControl.statusChanges.subscribe((status) => {
			console.log(this.nameControl.errors);
			console.log(status);
		});	
	
		this.fullNameControl = new FormGroup({
		firstName: new FormControl(), 
		secondName: new FormControl()
	});
		this.fullNameControl.valueChanges.subscribe((value) => console.log(value));// підпис на статус валідності

		this.userListControl = new FormGroup({
			users: new FormArray([
		new FormControl('jon'),
		new FormControl('bob'),
		new FormControl('eva')
		])

	});
			this.userListControl.valueChanges.subscribe((value) => console.log(value));
	
	}

	removeUserControl(index){
		(this.userListControl.controls['user'] as FormArray).removeAt(index);
	}
	addUserControl(index){
		(this.userListControl.controls['user'] as FormArray).push(new FormControl(''));
	}
}
function myValidator(number){//  в проекті фцнкції виносять в окремий файл, по сласу
	return function myValidator(formControl: FormControl){
		if(formControl.value.length < 5){
		return {myValidator: { message: 'Something wrong'}};
		}
		return null;
	}
}
	
function myAsyncValidator(formControl: FormControl): Observable<null|any>{
		if(formControl.value.length < 5){
		return Observable.of({myAsyncValidator: { message: 'Something wrong'}});
	}
	return Observable.of(null);
}
*/