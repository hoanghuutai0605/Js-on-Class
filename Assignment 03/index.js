// Tạo lớp Student có các thuộc tính và phương thức như sau:

// Student:

// name : Họ và tên sinh viên
// mark : điểm trung bình tích luỹ
// gender: giới tính
// subjects: là mảng chứa các danh sách học phần đã học. Một học phần đã học bao gồm tên học phần và điểm cho học phần đó
// method showInfo : in ra thông tin sinh viên với format : Tên – Điểm

// const showClass = document.querySelector('.show-class');
const filterBtns = document.querySelectorAll('.filter-btn');

class Student {
    constructor(name, mark, gender, subjects){
        this.name = name;
        this.mark = mark;
        this.gender = gender;
        this.subjects = subjects;
    }
    showInfo(){
        console.log('Tên: '+ this.name + ', Điểm trung bình: ' + this.mark);
    }
}
//1 Tạo danh sách sinh viên của một lớp có 10 sinh viên
var danhSach = [];
var user1 = new Student('Hoang Huu Tai',8,'Nam',[{'Ly':8},{'Toan':9}]);
danhSach.push(user1);
var user2 = new Student('Hoang Van B',7,'Nam',[{'Ly':7},{'Toan':6}]);
danhSach.push(user2);
var user3 = new Student('Hoang Van C',0,'Nam',[{'Ly':6},{'Toan':5}]);
danhSach.push(user3);
var user4 = new Student('Hoang Van D',9,'Nam',[{'Ly':8},{'Toan':10}]);
danhSach.push(user4);
var user5 = new Student('Hoang Van E',7,'Nam',[{'Ly':7},{'Toan':6}]);
danhSach.push(user5);
var user6 = new Student('Hoang Van F',3,'Nam',[{'Ly':4},{'Toan':3}]);
danhSach.push(user6);
var user7 = new Student('Hoang Van G',4,'Nam',[{'Ly':4},{'Toan':5}]);
danhSach.push(user7);
var user8 = new Student('Hoang Van H',5,'Nam',[{'Ly':5},{'Toan':5}]);
danhSach.push(user8);
var user9 = new Student('Hoang Van J',6,'Nữ',[{'Ly':6},{'Toan':6}]);
danhSach.push(user9);
var user10 = new Student('Hoang Van K',2,'Nam',[{'Ly':3},{'Toan':2}]);
danhSach.push(user10);
console.log(danhSach);
// arr.filter(student => student.subjects[0].ly > 6)
// mỗi phần tử trong mảng được gọi là student
// rồi truy xuất như trên
var backupDanhSach = [...danhSach];

filterBtns[0].addEventListener('click',function(){
    danhSach = [...backupDanhSach];
    // var b=  user1.subjects[0].Ly ;
    console.log(backupDanhSach);
    // console.log(b);
})
// var a = user6.subjects[0].Ly;
// console.log(a);


//2 Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé
function sapXepDanhSachTuBeDenLon (arr){
    function soSanhMark( a, b ) {
        if ( a.mark < b.mark ){
          return -1;
        }
        if ( a.mark > b.mark ){
          return 1;
        }
        return 0;
      }
    var danhSachDiemASC = arr.sort(soSanhMark);
    console.log('Danh sách đã sắp xếp từ bé đến lớn theo điểm trung bình: ' );
    console.log(danhSachDiemASC);


}
filterBtns[1].addEventListener('click',function(){
    sapXepDanhSachTuBeDenLon(danhSach);
});


//3 Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn
function sapXepDanhSachTuLonDenBe (arr){
    function soSanhMark( a, b ) {
        if ( a.mark < b.mark ){
          return 1;
        }
        if ( a.mark > b.mark ){
          return -1;
        }
        return 0;
    }
    var danhSachDiemDESC = arr.sort(soSanhMark);
    console.log('Danh sách đã sắp xếp từ lớn xuống bé theo điểm trung bình: ' );
    console.log(danhSachDiemDESC);


}
filterBtns[2].addEventListener('click',function(){
    sapXepDanhSachTuLonDenBe(danhSach);
});



//4 Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0
function locSinhVienNuCoDiemLonHon5(arr){
    var sinhVienNuCoDiemLonHon5 =  arr.filter(
        student => student.gender === 'Nữ' && student.mark > 5
    );
    console.log('Sinh viên nữ có điểm trung bình lớn hơn 5');
    console.log(sinhVienNuCoDiemLonHon5);

}
filterBtns[3].addEventListener('click',function(){
    locSinhVienNuCoDiemLonHon5(danhSach);
});



 //5 Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0

function locSinhVienCoDiemToanHoacLyLonHon8(arr){
    const svCoDiemToanHoacLyLonHon8 = arr.filter(student => 
        student.subjects[0].Ly > 8 || student.subjects[1].Toan > 8
    );
    console.log('Sinh viên có điểm Toán hoặc lý lớn hơn 8');
    console.log(svCoDiemToanHoacLyLonHon8);

}
filterBtns[4].addEventListener('click',function(){
    locSinhVienCoDiemToanHoacLyLonHon8(danhSach);
});



 //6 Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất

// var b = [1,2,4,5,6]
// var max = b.reduce((x,y)=>x>y? x : y);
// console.log(max);
function sinhVienCoDiemToanCaoNhatVaThapNhat(arr){
    var maxToan = arr.reduce((prev, current) => 
        ( prev.subjects[1].Toan > current.subjects[1].Toan) ? prev : current
    );
    var minToan = arr.reduce((prev, current) => 
        ( prev.subjects[1].Toan < current.subjects[1].Toan) ? prev : current
    );
    console.log('Sinh viên có điểm toán cao nhất là');
    console.log(maxToan);
    console.log('Sinh viên có điểm toán thấp nhất là');
    console.log(minToan);
 
}
filterBtns[5].addEventListener('click',() => sinhVienCoDiemToanCaoNhatVaThapNhat(danhSach));


// //7 Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0
function xoaSVCodiemTichLuyBang0(arr){
    danhSach = arr.filter(student => { return student.mark !== 0; }); 
    console.log('Danh sách sinh viên sau khi xóa sinh viên có điểm tích lũy là 0');
    console.log(danhSach);

}
filterBtns[6].addEventListener('click',function(){
    xoaSVCodiemTichLuyBang0(danhSach);
});


 //8 Thêm 03 sinh viên mới vào danh sách.
function themSinhVien(arr){
    let user11 = new Student('Nguyễn Thị U', 5,'Nữ',[{'Ly': 3},{'Toan': 4}]);
    let user12 = new Student('Nguyễn Văn O', 3,'Nữ',[{'Ly': 4},{'Toan': 9}]);
    let user13 = new Student('Nguyễn Văn I', 7,'Nữ',[{'Ly': 5},{'Toan': 8}]);
    arr.push(user11, user12, user13);
    
    console.log('Sau khi theem 3 học viên');
    console.log(danhSach);
}
filterBtns[7].addEventListener('click', () => themSinhVien(danhSach));


