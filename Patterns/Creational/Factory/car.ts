export class Car{
    wheel:number
    doors:number
    engineType:string
    constructor(){
        this.wheel=4
        this.doors=4
        this.engineType=''
    }
    getEngineType(){
        return this.engineType
    }

}
export class Sedan extends Car{
    price:number
   constructor(){
    super()
    this.engineType='V8'
    this.price=2000000
   } 

   getCarPrice(){
    return this.price
   }
}
export class Convertible extends Car{
    price:number
   constructor(){
    super()
    this.engineType='V12'
    this.price=4000000
   } 

   getCarPrice(){
    return this.price
   }
}