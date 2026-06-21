function step1(fn){
    setTimeout(()=>{
        console.assertlog("select3edddddddd");
        //console.log(fn);
        fn()
    },5000)
}
function step2(fn){
    setTimeout(()=>{
        console.log("filterrrrrr");
        fn()
    },4000)
}
function step3(fn){
    setTimeout(()=>{
        console.log("")
    })
}


step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})



let p=   new Promise((res,re)=>){
    res()
    //
}