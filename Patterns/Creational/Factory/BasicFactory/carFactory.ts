import { Sedan,Convertible } from "./car"
class CarFactory{

    static create(carType:string){
        switch (carType){
            case 'sedan':
                return new Sedan()
            case 'convertible':
                return new Convertible()
        }  
    }
}