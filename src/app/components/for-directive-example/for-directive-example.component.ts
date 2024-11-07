import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';
@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [
    {
      "givenName": "Grace",
      "surName": "Bell",
      "email": "gracebell@aol.com",
      "age": 69,
      "address": "Apple Valley"
    },
    {
      "givenName": "Stephen",
      "surName": "Bailey",
      "email": "stephen.edward.bailey@live.com",
      "age": 60,
      "address": "Salem"
    },
    {
      "givenName": "Benjamin",
      "surName": "Allen",
      "email": "b.allen@gmail.com",
      "age": 73,
      "address": "Angora"
    },
    {
      "givenName": "Alexander",
      "surName": "Price",
      "email": "aprice@gmail.com",
      "age": 46,
      "address": "Washington"
    },
    {
      "givenName": "Lauren",
      "surName": "Torres",
      "email": "lauren_r_torres48@hotmail.com",
      "age": 24,
      "address": "Coffeyville"
    },
    {
      "givenName": "Gabriel",
      "surName": "Young",
      "email": "g.a.young@ymail.com",
      "age": 31,
      "address": "Lansdowne"
    },
    {
      "givenName": "Heather",
      "surName": "Jenkins",
      "email": "h.l@gmail.com",
      "age": 65,
      "address": "Culver City"
    },
    {
      "givenName": "John",
      "surName": "Phillips",
      "email": "john.david.phillips@rocketmail.com",
      "age": 33,
      "address": "Daly City"
    },
    {
      "givenName": "Theodore",
      "surName": "Martin",
      "email": "t_a@hotmail.com",
      "age": 26,
      "address": "Lambrook"
    },
    {
      "givenName": "Ava",
      "surName": "Young",
      "email": "avamyoung@live.com",
      "age": 32,
      "address": "Brighton"
    }
  ]
}
