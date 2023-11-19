const modal = document.querySelector("dialog");
const btnModal = document.getElementById("fechaMod");


/* inverter cores */
const btnCor = document.getElementById("cor");
const main = document.querySelector("main");
const header = document.getElementById("cabeca");
const modo = document.getElementById("modo");
const aside = document.querySelector("aside");
const footer = document.querySelector("footer");
const letHeader = document.querySelectorAll("li");
const blocos = document.getElementsByClassName("item");
const letFoot1 = document.querySelectorAll("h5");
const letFoot2 = document.querySelectorAll("h7");
const titulo = document.getElementsByClassName("titulo");



var cor = 1;


setTimeout(() => {
	modal.showModal();
  }, 500)


btnModal.onclick = function () {
	modal.close();
}

btnCor.onclick = function () {
	if (cor === 1) {
		cor = 2;
	}
	else {
		cor = 1;
	}

	if (cor === 1) {
		main.style.backgroundColor = "rgb(13,0,60)";
		header.style.backgroundColor = "rgb(44,29,97)";
		modo.style.backgroundColor = "rgb(44,29,97)";
		aside.style.backgroundColor = "rgb(104,69,230)";
		footer.style.backgroundColor = "rgb(41,29,97)";
		titulo[0].style.color = "white";
		titulo[0].style.backgroundColor = "black";
		titulo[0].style["boxShadow"] = "0px 0px 5px white"

		let i = 0
		while(i<letHeader.length){	
			letHeader[i].style.color = "white";
			i++;
		}
		let j=0;
		while(j<blocos.length){	
			blocos[j].style.backgroundColor = "rgb(44,29,97)";
			j++;
		}
		let k = 0
		while(k<letFoot1.length){	
			letFoot1[k].style.color = "white";
			k++;
		}
		let l = 0
		while(l<letFoot2.length){	
			letFoot2[l].style.color = "white";
			l++;
		}
	}
	else {
		main.style.backgroundColor = "rgb(242,255,195)";
		header.style.backgroundColor = "rgb(211,226,158)";
		modo.style.backgroundColor = "rgb(211,226,158)";
		aside.style.backgroundColor = "rgb(151,186,25)";
		footer.style.backgroundColor = "rgb(214,226,158)";
		titulo[0].style.color = "black";
		titulo[0].style.backgroundColor = "white";
		titulo[0].style["boxShadow"] = "0px 0px 5px black"

		let i = 0
		while(i<letHeader.length){	
			letHeader[i].style.color = "black";
			i++;
		}
		let j=0;
		while(j<blocos.length){	
			blocos[j].style.backgroundColor = "rgb(211,226,158)";
			j++;
		}
		let k = 0
		while(k<letFoot1.length){	
			letFoot1[k].style.color = "black";
			k++;
		}
		let l = 0
		while(l<letFoot2.length){	
			letFoot2[l].style.color = "black";
			l++;
		}
	}

}






