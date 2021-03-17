import { Component } from '@angular/core';
//burası c#daki attribute ile aynı.
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
}) 
//burası da hangi html dosyasının componenti olduğunu gösteriyor.
export class AppComponent {
  title = 'northwind';
  

}

/*burada data yönetiliyor*/
