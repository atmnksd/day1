// import  Greeter, {person}  from "./module1.js"
// const greeter = new Greeter("Raghavi")
// greeter.sayHelloTo("Atmaram")
// const greeter1 = new Greeter("Atmaram")
// greeter1.sayHelloTo(person.name)
import { Logger } from "./logger.js";
import { person } from "./module1.js";
const logger = new Logger();
logger.logInfo(`This is information for ${JSON.stringify(person)}`)
logger.logError("This is error")