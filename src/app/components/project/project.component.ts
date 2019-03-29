import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public location = '';

  constructor(private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  scrollToTimeline(): void {
    const element = document.querySelector('#timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
