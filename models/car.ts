class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}

class CarValidate{
    car:Car = new Car("","","");

    constructor(_car:Car){
        this.car = _car;
    }

    public checkplate()
    {
        const regex = /^[0-9]{4}-([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/g;
        const str = this.car.plate;
        let result;

        result = regex.exec(str) !== null;
        if(!result)
            return "-1"
        return "0";
    }
}