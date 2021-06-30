const heightInput = document.getElementById('idHeight');
const weightInput =document.getElementById('idWeight');
const calButton = document.getElementById('cal');
// console.log(calButton);
var height = 0;
var weight = 0;
var bmi = 0;
heightInput.addEventListener('change',(e)=>{
    height = e.target.value;
    height = height/100;
});
weightInput.addEventListener('change', (e)=>{
    weight = e.target.value;
})
calButton.addEventListener('click', (e) =>{
  
    bmi = weight/(height*height);
    

if( bmi < 18,5){
    alert(  'Phân loại: Gầy; Nguy cơ phát triển bệnh: Thấp');
}
else if(bmi<25){
    alert(  'Phân loại: Bình Thường; Nguy cơ phát triển bệnh: Trung Bình');
}
else if(bmi<30){
    alert(  'Phân loại: Hơi Béo; Nguy cơ phát triển bệnh: Cao');
}
else if(bmi<35){
    alert(  'Phân loại: Béo Phì Cấp Độ 1; Nguy cơ phát triển bệnh: Cao');
}
else if(bmi<40){
    alert(  'Phân loại: Béo Phì Cấp Độ 2; Nguy cơ phát triển bệnh: Rất Cao');
}
else {
    alert(  'Phân loại: Béo Phì Cấp Độ 3; Nguy cơ phát triển bệnh: Nguy Hiểm');
}

} )