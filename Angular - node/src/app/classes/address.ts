export class Address {
    constructor( 
        public id:number,
        public country:string,
        public city?:string,
        public street?:string,
        public building?:number,
        public apartment?:number,
        ){}
}
