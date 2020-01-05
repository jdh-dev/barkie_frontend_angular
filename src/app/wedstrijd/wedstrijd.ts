import { Competitie } from '../competitie/competitie';
import { Team } from '../team/team';

export class Wedstrijd {
  id? : number;
  beginTijd : Date;
  kansThuis : number;
  kansUit : number;
  kansGelijk : number;
  scoreThuis : number;
  scoreUit : number;
  competitie : Competitie;
  thuisTeam : Team;
  uitTeam : Team;

  constructor() {}
}