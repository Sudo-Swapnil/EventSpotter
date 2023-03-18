import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  formValues = {
    keyword: '',
    distance: '',
    location: '',
    category: 'Default'
  }

  eventsTableData: any;

  constructor (private http: HttpClient) {}

  submitForm(form: NgForm){
    this.formValues.keyword = form.value.keyword;
    this.formValues.location = form.value.location;
    this.formValues.category = form.value.category;
    this.formValues.distance = form.value.distance;

    console.log("Keyword value: ", this.formValues.keyword)
    console.log("Location value: ", this.formValues.location)
    console.log("Category value: ", this.formValues.category)
    console.log("Distance value: ", this.formValues.distance)
    this.makeGetRequest();
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
    let result = this.http.get('http://localhost:3000/test/')
    console.log(result.subscribe((data) => {
      console.log(data)
      this.eventsTableData = data
    }))
    console.log("Request complete...")

  }
}
