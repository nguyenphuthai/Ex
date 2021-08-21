var sv={
	"tên":"Linh Voi",
	"tuổi":"1",
	"địa_chỉ":"123",
	"đi_từ_hà_nội_về_ngày_nào":4,
	"số_ngày_đang_cách_ly":"321",
	"tình_trạng_sức_khỏe":"dương tính",
	"địa_chỉ_cách_ly":"231",
	"địa_chỉ_sẽ_trung_chuyển_nếu_dương_tính":"213",
};

document.write("tên: " + sv.tên);
document.write("<br>");
document.write("tuổi: " + sv.tuổi);
document.write("<br>");
document.write("địa chỉ: " + sv.địa_chỉ);
document.write("<br>");
document.write("đi từ hà nội về ngày nào: " + sv.đi_từ_hà_nội_về_ngày_nào);
document.write("<br>");
document.write("số ngày đang cách ly: " + sv.số_ngày_đang_cách_ly);
document.write("<br>");
document.write("tình trạng sức khỏe: " + sv.tình_trạng_sức_khỏe);
document.write("<br>");
document.write("địa chỉ cách ly: " + sv.địa_chỉ_cách_ly);
document.write("<br>");
document.write("địa chỉ sẽ trung chuyển nếu dương tính: " + sv.địa_chỉ_sẽ_trung_chuyển_nếu_dương_tính);
document.write("<br>");
document.write("<br>")
document.write("trả lời câu hỏi: ");
document.write("<br>")
document.write("<br>");
document.write("tên sv đó là: " + sv.tên);
document.write("<br>");
document.write("sv đó dã về đc "+(sv.đi_từ_hà_nội_về_ngày_nào - 3)+" ngày")
document.write("<br>");
if (sv.tình_trạng_sức_khỏe == "âm tính") {
	if ((sv.đi_từ_hà_nội_về_ngày_nào + 21) > 31) {
			document.write("sv có thể về vào ngày: "+(21-(31-sv.đi_từ_hà_nội_về_ngày_nào))+" tháng 9");	
			document.write("<br>");
			document.write("sv sẽ về "+sv.địa_chỉ+" khi hết cách ly");
			document.write("<br>")
	}else
	{
			document.write("sv có thể về vào ngày: "+(21+sv.đi_từ_hà_nội_về_ngày_nào)+" tháng 8");
			document.write("<br>");
			document.write("sv sẽ về "+sv.địa_chỉ+" khi hết cách ly");
			document.write("<br>")
	}
}else
{
	document.write("sv đó dương tính")
	document.write("<br>")
}
document.write("sv hiện đang ở: "+ sv.địa_chỉ_cách_ly);
document.write("<br>");

if (sv.tình_trạng_sức_khỏe =="dương tính") {
	document.write("sv sẽ bị chuyển tới "+sv.địa_chỉ_sẽ_trung_chuyển_nếu_dương_tính)
}else
{
	document.write("sv đó âm tính");
}