import { VehicleFactory } from "./vehicle"
import { VehicleEnum } from "./enums/vehicleEnums"
export class ParkingSpot{
    parkingSpotId:string
    vehicleType:string
    parkedVehicle:null |{lisenceNumber:string,vehicleType:string}
    constructor(parkingSpotId:string,vehicleType:string){
        this.parkingSpotId=parkingSpotId
        this.vehicleType=vehicleType
        this.parkedVehicle=null
    }
    isParkingAllowed(vehicleType: VehicleEnum.BIKE|VehicleEnum.CAR|VehicleEnum.TRUCK): boolean {
        return this.parkedVehicle === null && this.vehicleType === vehicleType;
      }
    getParkingSpotId(){
        return this.parkingSpotId
    }
    parkAVehicle(lisenceNumber:string,vehicleType:VehicleEnum.BIKE|VehicleEnum.CAR|VehicleEnum.TRUCK){
        if(this.isParkingAllowed(vehicleType)){
            throw new Error('Vehicle already parked')
        }
        else{
            const vehicle=new VehicleFactory().getVehicle(vehicleType,lisenceNumber)
            this.parkedVehicle= vehicle.getVehicleDetails()
            return true
        }
    }
    getparkedVehicleDetals(){
        return {vehicleType:this.vehicleType,parkedVehicle:this.parkedVehicle}
    }
    unParkAVehicle(){
        this.parkedVehicle=null
        return true
    }
}