var user={
	"name":"nguyen phu thai",
	"age":"16",
	"address":"gia lap",
	"marital_status":"ALONE",
	"in_the_epidemic_area":"no",
};
document.write("tên: " + user.name);
document.write("<br>");
document.write("tuổi: " + user.age);
document.write("<br>");
document.write("địa chỉ: " + user.address);
document.write("<br>");
document.write("tình trạng hôn nhân: " + user.marital_status);
document.write("<br>");
document.write("nằm trong vùng dịch: " + user.in_the_epidemic_area);
document.write("<br>");
var number="92";
number = parseInt(number)
var type_number= typeof number;
document.write("number: " + type_number);
document.write("<br>");
user.age = parseInt(user.age)
var type_user_age = typeof user.age
document.write("tuổi: " + type_user_age);