import { DatePipe, Time } from "@angular/common";

export class Course {

    constructor(
        public Code: number,
        public Name: string,
        public Day: string,
        public Time: DatePipe,
        public EndTime: DatePipe,
        public City: string
    ) {
        
    }
}
