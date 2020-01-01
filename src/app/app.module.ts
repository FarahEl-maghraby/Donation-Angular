import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './views/home/home.component';
import { MissionComponent } from './components/mission/mission.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { UpcomingeventsComponent } from './components/upcomingevents/upcomingevents.component';
import { MakedonationComponent } from './components/makedonation/makedonation.component';
import { DonateComponent } from './components/donate/donate.component';
import{DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalisComponent } from './components/detalis/detalis.component';
import { FurtherdetalisComponent } from './components/furtherdetalis/furtherdetalis.component';
import { CampaigndetalisComponent } from './views/campaigndetalis/campaigndetalis.component';
import { CampignheaderComponent } from './components/campignheader/campignheader.component';
import { CampignVideoComponent } from './components/campign-video/campign-video.component';
import { CdetalisComponent } from './components/cdetalis/cdetalis.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    MissionComponent,
    VideoModalComponent,
    UpcomingeventsComponent,
    MakedonationComponent,
    DonateComponent,
    DetalisComponent,
    FurtherdetalisComponent,
    CampaigndetalisComponent,
    CampignheaderComponent,
    CampignVideoComponent,
    CdetalisComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
