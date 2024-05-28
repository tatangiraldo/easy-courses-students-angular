import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesTableComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
