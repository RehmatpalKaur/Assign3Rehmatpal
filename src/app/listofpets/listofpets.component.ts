import { Component, OnInit } from '@angular/core';
import { PetsDataService } from '../pet-data.service'; // Ensure correct import of your service
import { Pet } from '../pets';

@Component({
  selector: 'app-listofpets',
  templateUrl: './listofpets.component.html',
  styleUrls: ['./listofpets.component.css']
})
export class ListofPetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petsDataService: PetsDataService) {} // Ensure your service is correctly injected

  ngOnInit(): void {
    this.petsDataService.getPetList().subscribe(petsData => {
      // The received petsData is already expected to have the correct image paths
      // so no need for additional processing.
      this.pets = petsData;
    });
  }
}

// list of pets
