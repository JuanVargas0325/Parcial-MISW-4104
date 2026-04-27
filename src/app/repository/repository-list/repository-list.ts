import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-list',
  standalone: false,
  templateUrl: './repository-list.html',
  styleUrl: './repository-list.scss'
})
export class RepositoryList implements OnInit {
  repositories: Repository[] = [];

  constructor(private repoService: RepositoryService) {}

  ngOnInit(): void {
    this.repoService.getRepositories().subscribe(data => {
      this.repositories = data;
    });
  }

  get totalStars(): number {
    return this.repositories.reduce((sum, r) => sum + r.stars, 0);
  }

  get languageCount(): number {
    const langs = new Set(this.repositories.map(r => r.language));
    return langs.size;
  }

  getLanguageColor(language: string): string {
    const colors: Record<string, string> = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'Java': '#b07219',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Kotlin': '#A97BFF',
      'Swift': '#F05138',
      'Shell': '#89e051',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'C++': '#f34b7d',
      'C#': '#178600',
      'Ruby': '#701516',
      'YAML': '#cb171e'
    };
    return colors[language] || '#8b949e';
  }
}
