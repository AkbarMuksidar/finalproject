let pemain = "X";
let jmlKlik = 1;
function kliktombol(noBtn) {
	document.getElementById("btn" + noBtn + "D").style.transform = "perspective(500px)rotateY(-180deg)";
	document.getElementById("btn" + noBtn + "B").style.transform = "perspective(500px)rotateY(0deg)";
	document.getElementById("btn" + noBtn + "B").innerHTML = pemain;
	document.getElementById("btn" + noBtn + "B").Value = pemain;
	document.getElementById("btn" + noBtn + "B").disabled = "disabled"
	
	if (pemain === "X") {
			document.getElementById("btn" + noBtn + "B").style.color = "red";
			cekPemenang ();
			pemain = "O";
			jmlKlik +=1
	} else {
			document.getElementById("btn" + noBtn + "B").style.color = "green";
			cekPemenang ();
			pemain = "X";
			jmlKlik +=1
	}

	if (jmlKlik === 26) {
	document.getElementById("cek").innerHTML = "Hasil Permainan";
	} else {
	document.getElementById("cek").innerHTML = "Giliran Pemain: " + pemain;
	}
}
let panjang = document.getElementsByClassName('depan');
function cekPemenang() {
	let hitung = 0;
	for (let i = 4; i < panjang.length-4; i=i+5) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+1) + "B").Value === pemain && document.getElementById("btn" + (i+2) + "B").Value === pemain ) {
					hitung -= 1
			}
	}

	for (let i = 5; i < panjang.length-5; i=i+5) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+1) + "B").Value === pemain && document.getElementById("btn" + (i+2) + "B").Value === pemain ) {
					hitung -= 1
			}
	}
	for (let i = 1; i <= 15; i++) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+5) + "B").Value === pemain && document.getElementById("btn" + (i+10) + "B").Value === pemain ) {
					hitung += 1
			}
	}
	for (let i = 3; i <= 15; i++) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+4) + "B").Value === pemain && document.getElementById("btn" + (i+8) + "B").Value === pemain ) {
					hitung += 1
			}
	}
	for (let i = 7; i <= 15; i= i+5) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+4) + "B").Value === pemain && document.getElementById("btn" + (i+8) + "B").Value === pemain ) {
					hitung -= 1
			}
	}
	for (let i = 6; i <= 15; i= i+5) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+4) + "B").Value === pemain && document.getElementById("btn" + (i+8) + "B").Value === pemain ) {
					hitung -= 1
			}
	}

	for (let i = 1; i <= 13; i++) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+6) + "B").Value === pemain && document.getElementById("btn" + (i+12) + "B").Value === pemain ) {
					hitung += 1
			}
	}
	for (let i = 4; i <= 13; i=i+5) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+6) + "B").Value === pemain && document.getElementById("btn" + (i+12) + "B").Value === pemain ) {
					hitung -= 1
			}
	}
	for (let i = 5; i <= 13; i=i+5) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+6) + "B").Value === pemain && document.getElementById("btn" + (i+12) + "B").Value === pemain ) {
					hitung -= 1
			}
	}

	for (let i = 1; i < panjang.length-1; i++) {
			if (document.getElementById("btn" + i + "B").Value === pemain && document.getElementById("btn" + (i+1) + "B").Value === pemain && document.getElementById("btn" + (i+2) + "B").Value === pemain) {
					hitung += 1
			}
	}
	let jmlMenangX = 0;
	let jmlMenangO = 0;
	if (pemain === "X") {
			document.getElementById("skorX").innerHTML = "Skor " + pemain + " = " + hitung;
			jmlMenangX = hitung

	} else {
			document.getElementById("skorO").innerHTML = " - VS - "+ hitung + " = " + pemain + " Skor";
			jmlMenangO = hitung

	}

	if (jmlMenangX > jmlMenangO && jmlKlik === 25 ) {
			document.getElementById("jmlKlik").innerHTML = "Pemenangnya Adalah Pemain X"
	} else if (jmlMenangX < jmlMenangO && jmlKlik === 25)
			document.getElementById("jmlKlik").innerHTML = "Pemenangnya Adalah Pemain Y"
	
	


}
function menang() {
			
}