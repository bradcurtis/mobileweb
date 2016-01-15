module starter.domain {
    export interface IWellForm {
        date: Date;
        mine: IMine;
        crewname: string;
        ponumber: string;
        supervisorcount: Number;
        crewmembercount: Number;
        prejobbrief: string;
        activequipment: string;
        vendor: Ivendor;



    }

    export interface IMine {
        name: string;
        id: string;
        areaproject: IArea;
    }
    export class mine implements IMine {
        constructor(public name: string, public id: string, public areaproject: IArea) { }
    }
    export interface IArea {
        name: string;
        id: string;
        projectname: IProjectName;
    }
    export class area implements IArea {
        constructor(public name: string, public id: string, public projectname: IProjectName) { }
    }
    export interface IProjectName {
        name: string;
        id: string;
    }
    export class projectName implements IProjectName {
        constructor(public name:string, public id:string) { }
    }
    export class wellForm implements IWellForm {
        constructor(public date: Date, public mine: IMine, public crewname: string, public ponumber: string, public supervisorcount: Number, public crewmembercount: Number, public prejobbrief: string, public activequipment:string,public vendor:Ivendor) { }
    }



}