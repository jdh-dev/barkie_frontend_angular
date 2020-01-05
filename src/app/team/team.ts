import { Wedstrijd } from '../wedstrijd/wedstrijd';

export class Team { 
  id? : number;
  naam : string;
  wedstrijden : Wedstrijd[];
}