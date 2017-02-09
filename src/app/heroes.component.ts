import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void{
		this.selectedHero = hero;
		console.log(hero);
	}

	ngOnInit(): void{
		this.getHeroes();
	}
}
