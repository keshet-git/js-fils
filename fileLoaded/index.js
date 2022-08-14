/*
const promise = new Promise((resolve, reject) => {


  let fileLoaded = false;

  if(fileLoaded){
    resolve("file loaded");
  }
  else{
    reject("file NOT loaded");
  }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));
        */
       /*
const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);
});
//promise.then(() => console.log("thenks for waiting!"));
wait(3000).then(() => console.log("thenks for waiting!"));
*/
/*
async function loodFile(){

  let fileLoaded = true;

  if(fileLoaded){
    return "file loaded";
  }
  else{
    throw "file NOT loaded";
  }
}

loodFile().then(value => console.log(value))
        .catch(error => console.log(error));
        */
       /*
function loodFile(){


   let fileLoaded = false;
        
   if(fileLoaded){
  return Promise.resolve("file loaded");
   }
   else{
    return Promise.resolve("file NOT loaded");
  }
}
        
loodFile().then(value => console.log(value))
         .catch(error => console.log(error));
         */
async function loodFile(){

  let fileLoaded = false;

  if(fileLoaded){
    return "file loaded";
  }
  else{
    throw "file NOT loaded";
  }
}

async function startProcess(){
  try{
    let massage = await loodFile();
    console.log(massage);
}
catch(error){
  console.log(error);
}
}
startProcess();