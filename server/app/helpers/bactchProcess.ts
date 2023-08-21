const childProcess = require('child_process');


export const runBatch = () =>{
    try {
       childProcess.exec("cd C:\\Program Files (x86)\\ProWatch\\DTU && PWBadgeLoad.exe DTU" , (error, stdout, stderr) => {
  if (error) {
    console.error(error);
  } else {
    console.log(stdout,'success');
  }
})    
    } catch (e) {
        console.log(e)
    }
   
}