import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  userName = 'Huynh Tan Long';
  jobTitle = 'Fresher IT / Front-End Developer';
  introduction = 'A fresher to the IT field with a strong passion for technology and an unwavering drive for self-development. I am eager to secure an entry-level position where I can apply my proactive mindset and contribute value to the team.';
}