import { Component, signal, computed } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  filters: string[] = ['All', 'Certificate', 'Experience', 'Tech'];
  activeFilter = signal<string>('All');

  private allProjects: Project[] = [
    {
      id: 1, 
      title: 'Advanced JavaScript Course', 
      description: 'Completed at F8 Education (April 2025). Mastered advanced JS logic, ES6+ features, and performance optimization.',
      image: 'Certificate Image', 
      tags: ['JavaScript', 'ES6+'], 
      githubLink: '#', 
      category: 'Certificate'
    },
    {
      id: 2, 
      title: 'Sales & Tech Consultant', 
      description: 'At The Gioi Di Dong (2025-2026). Advised on mobile specs/OS, handled troubleshooting, and gathered user needs.',
      image: 'Workplace Image', 
      tags: ['haha'], 
      githubLink: '#', 
      category: 'Experience'
    },
    {
      id: 3, 
      title: 'Retail Sales Staff', 
      description: 'At VNB Sport (2024). Used systems to manage inventory, orders, and customer data.',
      image: 'Workplace Image', 
      tags: ['hehe'], 
      githubLink: '#', 
      category: 'Experience'
    },
    {
      id: 4, 
      title: 'Web Development Foundation', 
      description: 'Independently researched and mastered HTML, CSS, JavaScript, and Node.js in a short period.',
      image: 'Code Image', 
      tags: ['HTML/CSS', 'Node.js'], 
      githubLink: '#', 
      category: 'Tech'
    }
  ];

  filteredProjects = computed(() => {
    const currentFilter = this.activeFilter();
    if (currentFilter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === currentFilter);
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}