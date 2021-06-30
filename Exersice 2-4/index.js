/*
02 Viết chương trình có sử dụng hàm

Viết chương trình nhập mảng một chiều A với n phần tử

(n>=10). Xuất mảng A ra màn hình các nguyên tố trong A trên.


04 Viết chương trình có sử dụng hàm

Viết chương trình nhập mảng một chiều A với n phần tử

(n>=10).Xuất mảng A ra màn hình:

Xuất ra màn hình các hoàn hảo trong A trên
*/

const input = document.querySelector('.user-input');
    const formSubmitBtn = document.querySelector('.form-submit');
    var btnCheckPerfect = document.getElementById('btnCheckPerfect');

    var btnCheckPrime = document.getElementById('btnCheckPrime');
    const result1 = document.querySelector('.result_1');
    const result2 = document.querySelector('.result_2');
    // console.log(result1);

    var numberInput;
    var arr = [];
    var primeArr = [];
    var perfectArr = [];


    input.addEventListener('change', (e) => {
        numberInput = e.target.value;
        // console.log(numberInput);
    });
    //callback render()
    formSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        render();
    })



// var btnCheckPerfect = document.getElementById('btnCheck');
btnCheckPerfect.addEventListener('click',(e)=>{
    

 })
// Kiem tra so nguyen to
 function checkPrime(number){
    var check = false;
    if (number <= 1){
        return check = false;
    } else {
        var count = 0;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0){
                count ++;
            }
        }
        if(count >= 1){
            return check = false;
        } else {
            return check = true;
        }
    }
}
// Kiem tra so hoan hao
function checkPerfectNumber(value){
    var check2 = false;
    if (value <= 1){
        return check2 = false;
    } else {
        let arr = [1];
        for (let i = 2; i < value; i++) {
            if ( value % i === 0) {
                arr.push(i);
            }
        }
        
        let sumOfArr = 0;
        for (let i = 0; i < arr.length; i++) {
            sumOfArr += arr[i];
        }
        
        if (sumOfArr !== +value){
            return check2 = false;
        } else {
            return check2 = true;
        }
    }
}

function render(){
 
    for (let x = 0; x < numberInput; x++) {
        arr[x] = x;
    }
 
    const html = arr.map((index) => `
    <div class="component">
        <div class="animation-input">
            <input type="number" name='input${index}' class="render-input">
            <div class="underline"></div>
            <label for="">Nhập giá trị thứ ${index + 1} : </label>
        </div>
    </div>`
    ).join('');
    document.querySelector('.render').innerHTML = html;
    var formValueWithIndex = [];
    var formValue = [];
    var renderInputs =  document.querySelectorAll('.render-input');
    for (let i = 0; i < numberInput; i++) {
        renderInputs[i].addEventListener('change', (e) => {
            console.log("Giá trị thứ " + i + " là: " + e.target.value);
            var obj = {index: i + 1, value: e.target.value}
            formValueWithIndex.push(obj);
            formValue.push(e.target.value);
        })
        console.log(formValueWithIndex);
        
    }
    btnCheckPerfect.addEventListener('click', (e) => {
        e.preventDefault();
        for (y of formValue){
            if(checkPerfectNumber(y)){
                console.log("y = " + y)
                perfectArr.push(y);
            }
        }
        result1.innerHTML +='Mảng gồm các số là số hoàn hảo là: ' + String(perfectArr);
    })
    btnCheckPrime.addEventListener('click', (e) => {
        e.preventDefault();
        for (x of formValue){
            if(checkPrime(x)){
                primeArr.push(x);
            }
        }
        console.log("primeArr = " +primeArr)
        result2.innerHTML += 'Mảng gồm các số là số nguyên tố là: ' + String(primeArr);
    })
    
}