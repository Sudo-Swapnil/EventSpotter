import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  faTrash = faTrashAlt;
  tableData: any[] = [];
  
  ngOnInit(){
    var tableInfoInLS = JSON.parse(localStorage.getItem("favoriteEvents"));
    if (tableInfoInLS) {
      this.tableData = tableInfoInLS;  
    }
    console.log(this.tableData, " is the number of items in local storage"); 
    console.log(this.tableData.length, " is the number of items in local storage"); 

    // if (this.tableData){
    //   console.log(this.tableData.length, " is the number of items in local storage"); 
    // }
    
  }

  removeFromFavorite(row){
    alert("Removed from favorites!")
    const delIndex = this.tableData.indexOf(row);    
    this.tableData.splice(delIndex, 1);
    console.log("After deleting")
    console.log(this.tableData)
    localStorage.setItem("favoriteEvents", JSON.stringify(this.tableData));
  }

}
