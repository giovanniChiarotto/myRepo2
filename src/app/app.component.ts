import { Component} from '@angular/core';  
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /**************** VARIABLES ****************/


  /**************** METHODS ****************/
  constructor(private translate: TranslateService){
    translate.setDefaultLang('it-it')
  }

  
  setLanguage(languageSelected: string){
    switch(languageSelected){
      case "italian": 
      this.translate.use('it-it');
      break;
      case "english": 
      this.translate.use('en-us');
      break;
      }
    }
    
  }




