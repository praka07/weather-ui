export class Weather {
    coord!: Coordination
    timezone!: number;
    id!: number;
    name!: string;
    cod!: number;
    message!: string;
    main!: Main
    wind!: Wind
    weather!:Description[];
    

}

export class Coordination {
    lon!: number;
    lat!: number;
}

export class Main {
    temp!: number;
    feels_like!: number;
    temp_min!: number;
    temp_max!: number;
    pressure!: number;
    humidity!:number
}
export class Wind {
    speed!: number;
    deg!: number;
    gust!: number;
}
export class Description{
    id!:number;
    main!:string;
    description!:string
}