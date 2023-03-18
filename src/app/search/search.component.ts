import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  eventsForm: FormGroup;

  ngOnInit(){
    this.eventsForm = new FormGroup({
      keyword: new FormControl(),
      distance: new FormControl(),
      location: new FormControl(),
      category: new FormControl(),
      checkbox: new FormControl()
    });
    // this.eventsForm.controls['keyword'].valueChanges
  }

  eventsTableData: any;

  constructor (private http: HttpClient) {}

  submitForm(){
    console.log(this.eventsForm.value);
    console.log(this.eventsForm.value.location)
    this.makeGetRequest()
  }


  makeGetRequest(){
    // let reqParams = new HttpParams().set('name', this.formValues.keyword);
    // console.log("From makeGetRequest function: ", reqParams)
    // let url = "localhost:3000/api/tkm" + reqParams.toString()
    
    // console.log(reqParams)
    // this.http.get('localhost:3000/api/tkm', { reqParams }).subscribe((data) => {
    //   console.log(data);
    // })


    // console.log("Making request...")
    // let params = new HttpParams();
    // params = params.append('keyword', this.formValues.keyword)
    // console.log('http://localhost:3000/api/tkm', {params})
    // let result = this.http.get('http://localhost:3000/api/tkm', {params})
    // console.log(result.subscribe((data) => {
    //   console.log(data)
    // }))
    // console.log("Request complete...")

    console.log("Making request...")
    let result = this.http.get('http://localhost:3000/test/sort')
    console.log(result.subscribe((data) => {
      console.log(data)
      this.eventsTableData = data
    }))
    console.log("Request complete...")

  }
}
