export interface PetJson {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: string;
  ownerId: number;
}

export interface SelfLinkJson {
  href: string;
}

export interface ProfileLinkJson {
  href: string;
}

export interface LinksJson {
  self: SelfLinkJson;
  profile: ProfileLinkJson;
}

export interface PageJson {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface EmbeddedJson {
  pets: PetJson[];
}

export interface CatalogJson {
  _embedded: EmbeddedJson;
  _links: LinksJson;
  page: PageJson;
}
// json structure
