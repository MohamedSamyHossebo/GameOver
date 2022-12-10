import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { CategoryComponent } from './category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { GamesDetailsComponent } from './games-details/games-details.component';
import { PcComponent } from './platforms/pc/pc.component';
import { BrowserComponent } from './platforms/browser/browser.component';
import { ReleaseDateComponent } from './sort-by/release-date/release-date.component';
import { PopularityComponent } from './sort-by/popularity/popularity.component';
import { AlphabeticalComponent } from './sort-by/alphabetical/alphabetical.component';
import { RelevanceComponent } from './sort-by/relevance/relevance.component';
import { RacingComponent } from './category/racing/racing.component';
import { SportsComponent } from './category/sports/sports.component';
import { SocialComponent } from './category/social/social.component';
import { ShooterComponent } from './category/shooter/shooter.component';
import { OpenWorldComponent } from './category/open-world/open-world.component';
import { ZombieComponent } from './category/zombie/zombie.component';
import { FantasyComponent } from './category/fantasy/fantasy.component';
import { ActionRpgComponent } from './category/action-rpg/action-rpg.component';
import { ActionComponent } from './category/action/action.component';
import { FlightComponent } from './category/flight/flight.component';
import { BattleRoyaleComponent } from './category/battle-royale/battle-royale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    AllComponent,
    PlatformsComponent,
    SortByComponent,
    CategoryComponent,
    LoadingComponent,
    GamesDetailsComponent,
    PcComponent,
    BrowserComponent,
    ReleaseDateComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent,
    FantasyComponent,
    ActionRpgComponent,
    ActionComponent,
    FlightComponent,
    BattleRoyaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
