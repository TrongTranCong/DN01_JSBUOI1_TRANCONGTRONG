/**
 * Khối 1: Input
 * Cạnh chieu dai hình chữ nhật
 * edge1
 * Cạnh chiều rộng hình chữ nhật
 * edge2
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị cho cạnh hình chữ nhật
 * B2: Tạo biến chứa độ dài cạnh hình chữ nhật
 * B3: Xây dựng công thức tính diện tích
 * area = edge1 * edge2
 * Xây dựng công thức tính chu vi
 * perimeter = (edge 1 + edge2 ) * 2
 * 
 * B4: 
 * B5: hiện kq lên console  
 * 
 * Khối 3: Output
 * Diện tích hình chữ nhật 
 * var area
 * Chu vi hình chữ nhật
 * var perimeter
 
 */
// Tạo và gán giá trị 
var edge1 = 5;
var edge2 = 4;
var area = edge1 * edge2;
console.log("Diện tích hình chữ nhật:" + area);
var perimeter = (edge1 + edge2) * 2;
console.log("Chu vi hình chữ nhật:" + perimeter);