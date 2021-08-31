for (let i=0;i<= users.length;i++) {
	document.write("Mã người dùng: "+ users[i].user_id+"<br>")
	document.write("Tên: "+ users[i].name+"<br>")
	document.write("Tuổi: "+ users[i].age+"<br>")
	if (users[i].role == 1){
		document.write("Vai trò: user")
	}else{document.write("Vai trò: admin")}
	document.write("<br>")
	if (users[i].gender == 1) {
		document.write("Giới tính: nam"+"<br>")
	}else{document.write("Giới tính: nữ"+"<br>")}
	document.write("Fb: "+ users[i].fb+"<br>")
	if (users[i].status == 1) {
		document.write("Trạng thái: active"+"<br>")
	}else{document.write("Trạng thái: inactive"+"<br>")}
	document.write("Khoá học: "+"<br>"+
		"Tiểu học: "+ users[i].course.primary +"<br>"+
		"Trung học: "+ users[i].course.secondary +"<br>"+
		"Cao học: "+ users[i].course.high +"<br>")
	document.write("<br>")
}