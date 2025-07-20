import { CarInterFace } from "./Interfaces/vehicleInterface"

export class Car implements CarInterFace {
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