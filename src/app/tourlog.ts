import {Tour} from "./tour";

export class Tourlog{
   id: number | undefined;
   tourId: number | undefined; //refers to associated tour
   date: Date | undefined;
   comment: string | undefined;
   difficulty : number |undefined;
   totalDistance: number |undefined;
   totalTime: string | undefined;
   rating : number |undefined;
}
