import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private apiUrl = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json';

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl);
  }

  getRepository(id: number): Observable<Repository | undefined> {
    return this.http.get<Repository[]>(this.apiUrl).pipe(
      map(repos => repos.find(r => r.id === id))
    );
  }
}
