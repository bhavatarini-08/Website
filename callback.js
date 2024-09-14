// // function function1(){
// //     console.log("hello : f1");
// //     function2();
// // }
// // function function2(){
// // console.log("hell : f2");
// // }
// // setTimeout(function1,3000)

// function success(){
//     console.log("Success")
// }
// function fail(){
//     console.log("FAIL")
// }
// function error(){
//     console.log("Error")
// }
// function exec(data,callback){
//     if( data){
//         console.log(`Balance:${data}`)
//     }
//     setTimeout(callback,3000)
// }

// function account(data){
    
//     if(data > 0){
//         exec(data,success)
//     }
//     else if( data<=0){
//         exec(data,fail)
//     }
//     else{
//         exec("error",error)
//     }
// }
// account(90)
async function API(){
    // try{
    // const response= await fetch('https://66e526da5cc7f9b6273c6a32.mockapi.io/register')
    // const data= await response.json()
    // console.log(data)
    // return data;
    // }catch (error){
    //     console.log(error)
    // }

    try{
        const response= await fetch('https://66e526da5cc7f9b6273c6a32.mockapi.io/register')
        const data= await response.json()
        // console.table(data)
        return data;
        }catch (error){
            console.warn(error)
        }


    // const response= await fetch('https://66e526da5cc7f9b6273c6a32.mockapi.io/register')
    // const data=  await response.json()
    // console.log(data)
    // return data;

}
API()
// const Apidata=API()
// console.log(Apidata)
 async function APIDATA(){
    const apidata=await API()
    const active=apidata.filter(register => register.isActive === false)
    console.log(active)
    // const structuredata= await apidata.map((data) => {console.log(data)})
    // console.log(structuredata)
 }
 APIDATA()
