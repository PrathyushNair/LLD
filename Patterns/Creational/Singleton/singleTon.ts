
let instance: Singleton;
export class Singleton{
    count!: number ;
    constructor(){
        if(instance){
            return instance
        }
        this.count=0
        instance=this
    }

    getCount(){
        console.log(`Returning count: ${this.count}`)
        return this.count
    }
    increament(){
        this.count=this.count+1
    }
}