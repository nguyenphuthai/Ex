for (let i=0;i<= users.length;i++) {
	document.write("user id: "+ users[i].user_id+"<br>")
	document.write("name: "+ users[i].name+"<br>")
	document.write("age: "+ users[i].age+"<br>")
	if (users[i].role=1){
		document.write("role: user")
	}else{document.write("role: admin")}
	document.write("<br>")
	document.write("gender: "+ users[i].gender +"<br>")
	document.write("fb: "+ users[i].fb+"<br>")
	document.write("status: "+ users[i].status +"<br>")
	document.write("course: "+"<br>"+
		"primary: "+ users[i].course.primary +"<br>"+
		"secondary: "+ users[i].course.secondary +"<br>"+
		"high: "+ users[i].course.high +"<br>")
	document.write("<br>")
}