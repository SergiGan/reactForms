import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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
  user = {
  	email: '',
  	password: '',

  };

 	fullNameControl: FormGroup;
	userListControl: FormGroup;

   ngOnInit(){//синхронний валідатор і асинхронний
	  this.nameControl = new FormControl('', [myValidator(5)],[myAsycValidator], [Validator.email]);// Validators.required,  - анг.валідатор	
	/*this.nameControl.valueChanges
	.delay()
	.switchMap(variable) {
		case "value":
			// code...
			break;
		
		default:
			// code...
			break;
	}*/
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
		this.fullNameControl.valueChanges.subscribe((value) => console.log(value));

		this.userListControl = new FormGroup({
			users: new FormArray([
		new FormControl('jon'),
		new FormControl('bob'),
		new FormControl('eva'),
		]),

	});
	
	}

	removeUserControl(index){
		this.userListControl.control['user'].removeAt(index);
	}
	addUserControl(index){
		this.userListControl.control['user'].push(new FormControl(''));
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
	
function myAsycValidator(formControl: FormControl): Observable<null|any>{
		if(formControl.value.length < 5){
		return Observable.of({myAsycValidator: { message: 'Something wrong'}});
	}
	return Observable.of(null);
}