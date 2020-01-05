import { Wedstrijd } from '../wedstrijd/wedstrijd';

export class Competitie {
  id? : number;
  naam : string;
  wedstrijden : Wedstrijd[];

  constructor() {}
}