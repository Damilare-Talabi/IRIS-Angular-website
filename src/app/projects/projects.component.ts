import { Component, OnInit } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faTasks=faTasks;
  faTags=faTags;
  faPassport=faPassport;
  faVoteYea=faVoteYea;
  faHospital=faHospital;
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
