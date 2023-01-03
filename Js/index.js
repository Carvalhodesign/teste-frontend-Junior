
function carregaDrop(){
var coll = document.getElementsByClassName("arrow-down");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if(this.id=="1") {
      document.getElementById("mg2").src = "/img/svg/icon-arrow-down.svg";
      document.getElementById("2").style.backgroundColor = "#FFF";   
      document.getElementById("mg3").src = "/img/svg/icon-arrow-down.svg";
      document.getElementById("3").style.backgroundColor = "#FFF"; 
      document.getElementById("c2").style.display = "none";
      document.getElementById("c3").style.display = "none";
    }
    if(this.id=="2") {
      document.getElementById("mg1").src = "/img/svg/icon-arrow-down.svg";
      document.getElementById("1").style.backgroundColor = "#FFF";   
      document.getElementById("mg3").src = "/img/svg/icon-arrow-down.svg";
      document.getElementById("3").style.backgroundColor = "#FFF"; 
      document.getElementById("c1").style.display = "none";
      document.getElementById("c3").style.display = "none";
    }
    if(this.id=="3") {
      document.getElementById("mg1").src = "/img/svg/icon-arrow-down.svg";
      document.getElementById("1").style.backgroundColor = "#FFF";   
      document.getElementById("mg2").src = "/img/svg/icon-arrow-down.svg";
      document.getElementById("2").style.backgroundColor = "#FFF"; 
      document.getElementById("c1").style.display = "none";
      document.getElementById("c2").style.display = "none";
    }
    
    if (content.style.display === "block") {
      content.style.display = "none";
      document.getElementById("mg"+this.id).src = "/img/svg/icon-arrow-down.svg";
      document.getElementById(this.id).style.backgroundColor = "#FFF";    
    } else {
      content.style.display = "block";
      document.getElementById("mg"+this.id).src = "/img/svg/icon-arrow-up.svg";
      document.getElementById(this.id).style.backgroundColor = "#7A2B58";    
    }
  });
}
}


function selecionaOpcao(op){

  switch (op) {
    case "amarelo":
             document.getElementById("bt_cinza").src = "/img/svg/icon-plus.svg";
             document.getElementById("bt_vermelho").src = "/img/svg/icon-plus.svg";
             document.getElementById("bt2").className = "plus-1";
             document.getElementById("bt3").className = "plus-1";

             document.getElementById("bt3").className = "plus-1";

              if (document.getElementById("bt1").className == "plus-1"){
            document.getElementById("tx-circulo").innerHTML = "Texto com fundo <strong>amarelo!</strong>";
            document.getElementById("circulo").className = "circle-yellow";
            document.getElementById("circulo").style.display = "block";
            document.getElementById("bt_amarelo").src = "/img/svg/icon-minos.svg";
            document.getElementById("bt1").className = "plus-2";
          } else {
            document.getElementById("tx-circulo").innerHTML = "";
            document.getElementById("circulo").className = "circle-yellow";
            document.getElementById("circulo").style.display = "none";
            document.getElementById("bt_amarelo").src = "/img/svg/icon-plus.svg";
            document.getElementById("bt1").className = "plus-1";

          }
       break;
    case "cinza":
      document.getElementById("bt_amarelo").src = "/img/svg/icon-plus.svg";
      document.getElementById("bt_vermelho").src = "/img/svg/icon-plus.svg";
      document.getElementById("bt2").className = "plus-1";
      document.getElementById("bt1").className = "plus-1";
      if (document.getElementById("bt3").className == "plus-1"){
        document.getElementById("tx-circulo").innerHTML = "<font color='#FFF'>Texto com fundo <strong>cinza!</strong></font>";
        document.getElementById("circulo").className = "circle-cinza";
        document.getElementById("circulo").style.display = "block";
        document.getElementById("bt_cinza").src = "/img/svg/icon-minos.svg";
        document.getElementById("bt3").className = "plus-2";
      } else {
        document.getElementById("tx-circulo").innerHTML = "";
        document.getElementById("circulo").className = "circle-cinza";
        document.getElementById("circulo").style.display = "none";
        document.getElementById("bt_cinza").src = "/img/svg/icon-plus.svg";
        document.getElementById("bt3").className = "plus-1";

      }
      break;
    case "vermelho":
      document.getElementById("bt_amarelo").src = "/img/svg/icon-plus.svg";
      document.getElementById("bt_cinza").src = "/img/svg/icon-plus.svg";
      document.getElementById("bt3").className = "plus-1";
      document.getElementById("bt1").className = "plus-1";

      if (document.getElementById("bt2").className == "plus-1"){
        document.getElementById("tx-circulo").innerHTML = "<font color='#FFF'>Texto com fundo <strong>vermelho!</strong></font>";
        document.getElementById("circulo").className = "circle-vermelho";
        document.getElementById("circulo").style.display = "block";
        document.getElementById("bt_vermelho").src = "/img/svg/icon-minos.svg";
        document.getElementById("bt2").className = "plus-2";
      } else {
        document.getElementById("tx-circulo").innerHTML = "";
        document.getElementById("circulo").className = "circle-vermelho";
        document.getElementById("circulo").style.display = "none";
        document.getElementById("bt_vermelho").src = "/img/svg/icon-plus.svg";
        document.getElementById("bt2").className = "plus-1";

      }
      break;
    }





}