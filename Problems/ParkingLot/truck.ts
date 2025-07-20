import { TruckInterFace } from "./Interfaces/vehicleInterface"

export class Truck implements TruckInterFace {
    lisenceNumber:string
    type:string
    constructor(lisenceNumber:string){
        this.type='Truck'
        this.lisenceNumber=lisenceNumber
    }
    getLisenceNumber(){
        return this.lisenceNumber
    }
    getVehicleDetails(){
        return {lisenceNumber:this.lisenceNumber,vehicleType:this.type}
    }
}