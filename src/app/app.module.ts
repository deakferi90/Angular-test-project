import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    //so the compiler can find it and we define which our component belongs to the component we can add other components also
  ],
  imports: [
    BrowserModule, //we want our app to work correctly in the browser so we add BrowserModule define external modules that we need it can be our personal modules and this exposes ngIf and ngFor directives
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent], //bootstrap defines the startup component this should also contain the selector we use in the index.html file
})
export class AppModule {}
