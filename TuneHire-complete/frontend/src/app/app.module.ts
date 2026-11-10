import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './services/auth.interceptor';
import { HomeComponent } from './components/home.component';
import { MusiciansComponent } from './components/musicians.component';
import { MusicianDetailComponent } from './components/musician-detail.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { BookingComponent } from './components/booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'musicians', component: MusiciansComponent },
  { path: 'musician/:id', component: MusicianDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking/:musicianId', component: BookingComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, MusiciansComponent, MusicianDetailComponent, LoginComponent, RegisterComponent, BookingComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot(routes), MatToolbarModule, MatButtonModule, MatCardModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
