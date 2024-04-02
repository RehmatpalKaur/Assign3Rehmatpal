export class Pet {
  constructor(
    public id: number = 0,
    public name: string = '',
    public petKind: string = '',
    public age: number = 0,
    public image: string = '', // Make sure to put the correct relative path to the image here
    public ownerId: number = 0
  ) {}
}

//pets.ts service page
