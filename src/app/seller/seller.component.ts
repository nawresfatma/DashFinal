import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Tynass Dashboard';
  isExpanded: boolean = true;

  ngOnInit(): void {
  }

}
