import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faKeycdn } from '@fortawesome/free-brands-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
 
  faDatabase= faDatabase;
  faKeycdn= faKeycdn;
  faMicrochip = faMicrochip;
  faCameraRetro = faCameraRetro ;


  constructor() { }

  ngOnInit(): void {
  }

}

