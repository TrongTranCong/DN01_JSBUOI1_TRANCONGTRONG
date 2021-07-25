/**
 * Khối 1: Input
 * Lương 1 ngày: 100000
 * Số ngày làm
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và gán giá trị cho số ngày, tiền lương 1 ngày
 * B2: Tạo biến chứa số ngày, tiền lương
 * B3: Xây dựng công thức tính tiền lương ngày làm
 * Lương 1 ngày * số ngày làm = tổng tiền lương 
 * Chuyển sang lập trình:
 *  = edge1 * edge1 + edge2 * edge2 
 * B4: Lấy độ dài từ công thức
 * lấy căn bậc hai của cạnh huyền
 * edge3 = math.sqrt(edge3 * edge3);
 * B5: hiện kq lên console  
 * 
 * Khối 3: Output
 * Tiền lương ngày làm
 * 
 */
// Tạo và gán giá trị 
var salDay = 100000;
var day = 0;
// Viết công thức tính toán
sumSal = salDay * day;

// Hiện kq lên console
console.log("Tiền lương nhân viên:" + sumSal);