import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-component-user',
  templateUrl: './component-user.component.html',
  styleUrls: ['./component-user.component.scss']
})
export class ComponentUserComponent implements OnInit {

  users: User[] = [
    {
      name: 'Komal Mittal',
      username: 'komalmittal',
      email: 'komalmittal2016@gmail.com',
    },
    {
      name: 'Sakshi Garg',
      username: 'sakshigarg',
      email: 'sakshigarg@gmail.com',
    },
    {
      name: 'Anuj Kumar',
      username: 'akumar',
      email: 'anuj@gmail.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
