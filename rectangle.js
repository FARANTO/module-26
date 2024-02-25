function calculateRectangleArea(){
    const leninput=document.getElementById('rectangle-length');
    const lentext=leninput.value;
    const length=parseFloat(lentext);
    console.log(length);
    
    // width
    const widthinput=document.getElementById('rectangle-width');
    const widthtext=widthinput.value;
    const width=parseFloat(widthtext);
    console.log(width);
    
    // Area
    const recarea=length*width;
    // display the area
    const rectangleareaspan=document.getElementById('rectangle-area');
    rectangleareaspan.innerText=recarea;
}