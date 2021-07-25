/**
 * Khối 1: Input
 * Số có 2 chữ số 
 * num
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị
 * num, unit (số hàng đơn vị), ten (số hàng chục),
 * B2: Lấy số hàng chục
 * VD: 12/10=>1.2
 * ten = Math.floor(num / 10)==> lấy được phần nguyên trong phép chia
 * B3: Lấy só hàng đơn vị
 * VD: 12%10=>2
 * phanDuHangDonVi = 12%10
 * unit = Math.floor(phanDuHangDonVi%10)
 * B4: Tính tổng
 * sum = ten + unit
 * 
 * Khối 3: Output
 * Tổng của 2 chữ số  (12)
 * sum  
 * 
 */

//  Tạo và gán giá trị
// VD:10
var num = 10;
var unit = 0;
var ten = 0;
var phanDuHangDonVi = 0;
var unit = 0;
var sum = 0;
// Lấy hàng chục
ten = Math.floor(num / 10);
console.log("Số ở hàng chục:"+ ten);
// Lấy hàng đơn vị
phanDuHangDonVi = (num%10);
console.log("Số dư hàng đơn vị:"+phanDuHangDonVi);
unit = Math.floor(phanDuHangDonVi);
console.log("Số ở hàng đơn vị:"+ unit);
sum = ten + unit;
console.log("Tổng hai chữ số:"+ sum);
// VD:87
var num = 87;
var unit = 0;
var ten = 0;
var phanDuHangDonVi = 0;
var unit = 0;
var sum = 0;
// Lấy hàng chục
ten = Math.floor(num / 10);
console.log("Số ở hàng chục:"+ ten);
// Lấy hàng đơn vị
phanDuHangDonVi = (num%10);
console.log("Số dư hàng đơn vị:"+phanDuHangDonVi);
unit = Math.floor(phanDuHangDonVi);
console.log("Số ở hàng đơn vị:"+ unit);
sum = ten + unit;
console.log("Tổng hai chữ số:"+ sum);
// VD:88
var num = 16;
var unit = 0;
var ten = 0;
var phanDuHangDonVi = 0;
var unit = 0;
var sum = 0;
// Lấy hàng chục
ten = Math.floor(num / 10);
console.log("Số ở hàng chục:"+ ten);
// Lấy hàng đơn vị
phanDuHangDonVi = (num%10);
console.log("Số dư hàng đơn vị:"+phanDuHangDonVi);
unit = Math.floor(phanDuHangDonVi);
console.log("Số ở hàng đơn vị:"+ unit);
sum = ten + unit;
console.log("Tổng hai chữ số:"+ sum);