import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  test1()
  {
    alert("Clicked")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
