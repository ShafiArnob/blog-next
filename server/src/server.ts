import app from "./app"

const PORT = 5000

async function main(){
  try{
    app.listen(PORT,()=>{
      console.log(`Server running on ${PORT}`);
      
    })
  }
  catch(e){
    console.log(e);
    
  }
}

main()