/**
 * Khối 1: Input
 * số thực
 * var num1, var num2, var num3, var num4, var num5
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị cho 5 số thực
 * B2: Tạo biến chứa số thực
 * B3: Xây dựng công thức tính trung bình
 * average = (num1+num2+num3+num4+num5)/5
 * Chuyển sang lập trình:
 * var sum = (num1+num2+num3+num4+num5)
 * average = sum /5
 * B4: hiện kết quả lên console  
 * 
 * Khối 3: Output
 * average(num1,..num5)
 * console.log(average)
 *
*/
// Tạo và gán giá trị
var num1 = 10;
var num2 = 20;
var num3 = 30;
var num4 = 40;
var num5 = 50;
var sum = 0;
var average = 0;

// Công thức tính trung bình
sum = num1 + num2 + num3 + num4 + num5
console.log("Tổng của 5 số:" + sum);
average = sum / 5;
console.log("Giá trị trung bình của 5 số:" + average);
