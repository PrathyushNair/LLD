import { BikeInterFace } from "./Interfaces/vehicleInterface"

export class Bike implements BikeInterFace {
    lisenceNumber:string
    type:string
    constructor(lisenceNumber:string){
        this.type='Car'
        this.lisenceNumber=lisenceNumber
    }
    getLisenceNumber(){
        return this.lisenceNumber
    }
    getVehicleDetails(){
        return {lisenceNumber:this.lisenceNumber,vehicleType:this.type}
    }
}