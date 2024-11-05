async function getName(){
    return "Tomashi"
}


getName().then(response => response)
.then(data => console.log(data))
.catch(err => console.error(err))
.finally(()=> console.log("Final catch"))

async function displayName(){
    try{
        const user = await getName()
    console.log(user)
    }catch(err){
        console.error("Error:", err)
    }finally{
        console.log("Finally block executed")
    }
}

displayName()
