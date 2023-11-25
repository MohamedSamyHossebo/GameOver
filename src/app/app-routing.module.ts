import { BattleRoyaleComponent } from './category/battle-royale/battle-royale.component';
import { FlightComponent } from './category/flight/flight.component';
import { ActionComponent } from './category/action/action.component';
import { ActionRpgComponent } from './category/action-rpg/action-rpg.component';
import { FantasyComponent } from './category/fantasy/fantasy.component';
import { ZombieComponent } from './category/zombie/zombie.component';
import { OpenWorldComponent } from './category/open-world/open-world.component';
import { ShooterComponent } from './category/shooter/shooter.component';
import { SocialComponent } from './category/social/social.component';
import { SportsComponent } from './category/sports/sports.component';
import { RacingComponent } from './category/racing/racing.component';
import { RelevanceComponent } from './sort-by/relevance/relevance.component';
import { ReleaseDateComponent } from './sort-by/release-date/release-date.component';
import { PopularityComponent } from './sort-by/popularity/popularity.component';
import { AlphabeticalComponent } from './sort-by/alphabetical/alphabetical.component';
import { BrowserComponent } from './platforms/browser/browser.component';
import { PcComponent } from './platforms/pc/pc.component';
import { GamesDetailsComponent } from './games-details/games-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { RegisterComponent } from './register/register.component';
import { SortByComponent } from './sort-by/sort-by.component';
// import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "all", component: AllComponent },
  { path: "sortby", component: SortByComponent },
  { path: "platforms", component: PlatformsComponent },
  { path: "category", component: CategoryComponent },
  { path: "logout", component: LoginComponent },
  { path: "gamesdetails/:id", component: GamesDetailsComponent },
  { path: "pc", component: PcComponent },
  { path: "browser", component: BrowserComponent },
  { path: "alphabetical", component: AlphabeticalComponent },
  { path: "popularity", component: PopularityComponent },
  { path: "releasedate", component: ReleaseDateComponent },
  { path: "relevance", component: RelevanceComponent },
  { path: "racing", component: RacingComponent },
  { path: "sports", component: SportsComponent },
  { path: "social", component: SocialComponent },
  { path: "shooter", component: ShooterComponent },
  { path: "openworld", component: OpenWorldComponent },
  { path: "zombie", component: ZombieComponent },
  { path: "fantasy", component: FantasyComponent },
  { path: "actionrpg", component: ActionRpgComponent },
  { path: "action", component: ActionComponent },
  { path: "flight", component: FlightComponent },
  { path: "battleroyale", component: BattleRoyaleComponent },



  { path: "**", component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
