import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  aboutText = 'As a fresher to the IT field, I have a strong passion for technology and an unwavering drive for self-development. Although I am just starting my career and lack formal work experience, my strengths are my ability to learn quickly and adapt flexibly. I am capable of independently researching and mastering new programming languages, frameworks, and tools in a short period.';
  
  personalInfo = [
    'Ho Chi Minh City',
    'Van Hien University (Information Technology Student)',
    'Career Goal: Senior Developer / System Architect (3-5 years)'
  ];
}