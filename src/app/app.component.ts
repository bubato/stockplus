import { Component } from '@angular/core';
import { tab } from './tab';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public hidden_menu : Boolean = false;
   public tab_arr = [];
   public view_current = 0 ;
   public number_tab = [];
   public _text="";
   add(text){
   	  if(this.tab_arr.length==0){
   	  	 this.view_current=1;
   	  	 this.number_tab.push("Workspace1");
   	  }
   	  this.tab_arr.push({name : text , id : this.tab_arr.length , check_tab : this.view_current});
   }
   add_view(){   	
      this.number_tab.push(this._text);
   	  this.view_current=this.number_tab.length;
   }
   pointer(target){
   	  this.view_current=target;
   }
   toggle(){
   	  this.hidden_menu = !this.hidden_menu;
   }
   onClose(event){
   	  var save=-1;
      for (var i = 0; i < this.tab_arr.length; i++) {
      	if(this.tab_arr[i].id==event){
      		save=i;
      	}
      }
      this.tab_arr.splice(save,1);
   }
   constructor(){
      
   };
}
