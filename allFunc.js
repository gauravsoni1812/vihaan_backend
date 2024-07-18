export const my_func = (req, res) => {

    const { name, age, city, state } = req.body
    console.log(req.body); // Correct usage is req.body, not req.body()
    res.send(`${name} is a naughty student he lives in ${city} and he is ${age} years old`);

}


export const vh = (req,res,next)=>{
    try {
        console.log("user come for authentication")
        const {password} = req.body
         if(password=="vihaanisnaughty"){
            next()
         }
         res.send("password is incorrect") 
    } catch (error) {
        throw error("something went wrong")
    }
  
}

export const print_name = (req, res,next)=>{
    console.log("My name is vihaan")
    next()
}
