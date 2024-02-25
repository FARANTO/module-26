function calculateParaArea(){
    // const baseinput=document.getElementById('para-base');
    // const basetext=baseinput.value;
    // const base =parseFloat(basetext);
    // console.log(base);
    const base=getParaBase();
    console.log(base);
}
function getParaBase(){
   
        const baseinput=document.getElementById('para-base');
        const basetext=baseinput.value;
        const base =parseFloat(basetext);
        return base;
}