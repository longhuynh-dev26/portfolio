import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header'; 
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about'; // Nhớ tạo component này nhé
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact'; // Nhớ tạo component này
import { FooterComponent } from './components/footer/footer'; // Nhớ tạo component này

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // ...
}