/*
R
G -> 0,255
B
*/

function getRandomGreen() {	return Math.floor(Math.random() * 256);}

function getRandomChar() {	//380-640 
	return '&#' + (400 + Math.floor(Math.random() * (47))) + ';';}

function getChar(posX, posY, white) {
	var newChar = getRandomChar();
	//	newChar = "0";
	//	newChar = "&#643;";
	var newGreen = getRandomGreen();
 
	if (white === 1) {
		return "<span style='color:rgb(255,255,255); font-weight:bold;' >" + newChar + "</span>";
	} else {
		return "<span style='color:rgb(0," + newGreen + ",0)' >" + newChar + "</span>";
	}
}


function print(str) {
	document.write(str);
}

function main()
{ 
 
	var matrixString = '';
	var width = window.innerWidth;
	var height = window.innerHeight;
	//charinpixel 14x20 = 480px^2
	var pixelWidth = 14;
	var pixelHeight = 20;
	//1024x768= 786432px^2 
	var prob = 50;
	var hChars = width / pixelWidth;
	var vChars = height / pixelHeight;
	var flag = true;

	for (var j = 0; j < vChars; j++) {
		flag = true;
		matrixString += '<p>';

		for (var i = 0; i < hChars && flag; i++) {
			var v = Math.floor(Math.random() * 500);

			if (v == prob) {
				matrixString += getChar(i, j, 1) + ' ';
				flag = false;
			} else
				matrixString += getChar(i, j, 0) + ' ';
			//matrixString  += "000";
		}
		matrixString += '</p>';
	}

	print(matrixString);
}


main();

/*
window.onload = function(event) {
    //print(matrixString);
	main();
};
*/
/*
window.onresize = function(event) {
    //print(matrixString);
	
	//clean body 
	document.body.innerHTML = "<div style='background: #000; line-height: 5px;'>...</div>";
	main();
};*/