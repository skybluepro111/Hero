import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})



export class AppComponent  {
   title = 'Tour of Heroes'; 
   heroes: Hero[];
   selectedHero:Hero;

   constructor(private heroService: HeroService) { }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }

    // getHeroes(): void {
    //   this.heroes = this.heroService.getHeroes();
    // }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }

} 
