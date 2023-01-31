import { Chalk } from "chalk";
export class Logger {
    constructor(){
        this.chalk = new Chalk();
    }
    logInfo(message){
        console.log(this.chalk.blue(message))
    }
    logError(message){
        
    }
}