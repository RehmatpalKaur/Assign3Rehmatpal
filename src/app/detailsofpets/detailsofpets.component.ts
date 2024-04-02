import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsDataService } from '../pet-data.service'; // Make sure the service name is correct
import { Pet } from '../pets';

@Component({
  selector: 'app-detailsofpets',
  templateUrl: './detailsofpets.component.html',
  styleUrls: ['./detailsofpets.component.css']
})
export class DetailsofPetsComponent implements OnInit {
  pet: Pet | undefined;

  constructor(
    private route: ActivatedRoute,
    private petsDataService: PetsDataService // The service name should match the one you're importing
  ) {
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const petId = Number(idParam);
      if (!isNaN(petId)) {
        // The petId is a number, continue with fetching the pet data
        this.petsDataService.getPet(petId).subscribe(petData => {
          this.pet = petData;
        });
      } else {
        // Handle the case where the ID is not a number
        console.error('Pet ID is not a valid number.');
      }
    } else {
      // Handle the case where the ID parameter is not found
      console.error('Pet ID not found in the route parameters.');
    }
  }
}

//deatailsofpets
