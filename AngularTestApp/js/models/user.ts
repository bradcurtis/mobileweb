module starter.domain {
    export interface IUserModel {
        username: string;
        userpassword: string;
        tokenName: string;
        token: string;
    }

    export class User implements IUserModel {
        constructor(public username:string,public userpassword:string,public tokenName:string, public token:string) { }
    }
  


}