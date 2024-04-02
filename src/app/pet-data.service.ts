import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pets';
import { catalog } from './catalog-data'; // Your catalog data file

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {
  private pets: Pet[] = [];

  constructor() {
    this.initializePetsFromCatalog();
  }

  // The folder where pet images are stored, assuming it's under 'src/assets/images/pets/'
  private static readonly imageFolder = 'assets/Images/pets/';

  // Initialize pets from the provided catalog data
  private initializePetsFromCatalog(): void {
    this.pets = catalog._embedded.pets.map(petJson => new Pet(
      petJson.id,
      petJson.name,
      petJson.petKind,
      petJson.age,
      PetsDataService.imageFolder + petJson.image, // Prepend the folder path to the image filename
      petJson.ownerId
    ));
  }

  // Method to retrieve the list of all pets
  public getPetList(): Observable<Pet[]> {
    return of(this.pets);
  }

  // Method to retrieve a single pet by its ID
  public getPet(id: number): Observable<Pet | undefined> {
    const pet = this.pets.find(pet => pet.id === id);
    return of(pet);
  }
}
//pet data service
