import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';

import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';

const API_KEY = "ded27983"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  filteredEvents: any;
  isLoading = false;
  errorMsg: string;
  minLength = 3;
  selectedEvent: any = "";

  constructor (private http: HttpClient) {}

  
  eventsForm = new FormGroup({
    keyword: new FormControl(),
    distance: new FormControl(),
    location: new FormControl(),
    category: new FormControl(),
    checkbox: new FormControl()
  });


  onSelectedEvent(){
    console.log(this.selectedEvent);
    this.selectedEvent = this.selectedEvent;
  }

  displayWith(value: any) {
    return value?.Title;
  }

  ngOnInit(){  

    this.eventsForm.controls['keyword'].valueChanges
    .pipe(
      filter(res => {
        return res !== null && res.length >= this.minLength
      }),
      distinctUntilChanged(),
      debounceTime(1000),
      tap(() => {
        this.errorMsg = "";
        this.filteredEvents = [];
        this.isLoading = true;
      }),
      switchMap(value => this.http.get('http://www.omdbapi.com/?apikey=' + API_KEY + '&s=' + value)
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe((data: any) => {
      if (data['Search'] == undefined) {
        this.errorMsg = data['Error'];
        this.filteredEvents = [];
      } else {
        this.errorMsg = "";
        this.filteredEvents = data['Search'];
      }
      console.log(this.filteredEvents);
    });
  }

  eventsTableData: any;



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
