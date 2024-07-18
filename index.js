import express from "express"
import cookieParser from "cookie-parser";
import {my_func,print_name, vh} from "./allFunc.js"
const server = express();

 
server.use(cookieParser());
server.use(express.json());  

server.get("/", (req, res) => {
    res.send("hello there");
});

server.post("/vihaan" , print_name,vh , my_func);

server.listen(3000, () => {
    console.log("server is running on the port", 3000);
});
 