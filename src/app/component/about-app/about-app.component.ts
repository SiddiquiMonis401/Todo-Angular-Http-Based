import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {

  constructor(private route: ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
    console.log("route", this.route.snapshot.paramMap.get('id'));
  }

  goBack(){
    this.location.back();
  }

}
