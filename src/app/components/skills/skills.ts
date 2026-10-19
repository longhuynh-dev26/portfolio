import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  skillsList: string[] = [
    'HTML5 & CSS3',
    'JavaScript & Node.js',
    'TypeScript',
    'Angular',
    'Databases (Mongo, MySQL)',
    'Communication & Teamwork',
    'Rapid Learning',
    'Flexibility & Adaptable'
  ];
}