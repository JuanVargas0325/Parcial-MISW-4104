import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-detail',
  standalone: false,
  templateUrl: './repository-detail.html',
  styleUrl: './repository-detail.scss'
})
export class RepositoryDetail implements OnInit {
  repository: Repository | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repoService: RepositoryService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.repoService.getRepository(id).subscribe(repo => {
      this.repository = repo;
    });
  }

  goBack(): void {
    this.router.navigate(['/repositories']);
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

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
