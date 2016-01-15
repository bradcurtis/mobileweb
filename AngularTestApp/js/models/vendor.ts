module starter.domain {
    export interface Ivendor {
        vendorname: string;
        vendorid: string;
        activeequipment: IactiveEquipment[];
        prejobbrief: IpreJobBrief[];

    }
    export class vendor implements Ivendor {
        constructor(public vendorname: string,public vendorid: string,public activeequipment: IactiveEquipment[], public prejobbrief : IpreJobBrief[]) { }
    }

    export interface IactiveEquipment {
        equipmentname: string;
        equipmentid: string;
    }
    export class activeEquipment implements IactiveEquipment{
        constructor(public equipmentname: string, public equipmentid: string) { }
    }

    export interface IpreJobBrief {
        briefname: string;
        briefid: string;
    }
    export class preJobBrief implements IpreJobBrief {
        constructor(public briefname: string, public briefid: string) { }
    }
}