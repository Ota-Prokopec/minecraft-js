

const kamen = {name:"stone", value:4}
const drevo = {name:"drevo", value:4}
const zelezo = {name:"vlna", value:8}
const vlna = {name:"vlna", value:4}
let stone = 0;
let wool = 0;
let wheel = 0;
let iron = 0;
let krumpac = false;
let sekera = false;
let array = true;
let wood = 0;
let thisobject = "";
let ahojpos = 0;
let topgg = 4;
let x = 0;
let y = 0;
let xggpos = 0;
function nas() {
  krumpac = false;
  sekera = false;
}
function ahoj() {
  document.getElementById('play').style.animationName="up";

}
window.addEventListener("contextmenu", function (event) {
  const xg = Math.ceil(event.y / 44);
  const gygg = Math.ceil(event.x / 44);
  console.log(gygg * 44 , xg * 44 );
  var node = document.createElement("div");
  var textnode = document.createTextNode("");
  node.appendChild(textnode);
  if (wheel == 4) {
    if (stone > 0) {
      node.className = "stone";
         stone --;
    }
  }
  if (wheel == 5) {
    if (iron > 0) {
      node.className = "iron";
         iron --;
    }
  }
  if (wheel == 6) {
    if (wool > 0) {
      node.className = "wool";
         wool --;
    }
  }
  if (wheel == 7) {
    if (wood > 0) {
      node.className = "wood";
         wood --;
    }
  }

  node.style.left = gygg * 44 - 44 + "px";
  node.style.top = xg * 44 - 44 + "px";
  document.body.appendChild(node);
  console.log(event.x + "px");
  event.preventDefault();
})
window.addEventListener("keydown", function (event) {
  console.log(event);
  if("ArrowRight" == event.key) {
    console.log("right");
    xggpos = y;
    y ++;
  }
  else if ("ArrowLeft" == event.key) {
    console.log("left");
    xggpos = y;
    y --;
  }
  else if ("ArrowDown" == event.key) {
    document.getElementById("play").style.height="79px";
    document.getElementById('play').style.top = "132px";

    setTimeout(function(){ document.getElementById("play").style.height="100px";  document.getElementById('play').style.top = 2*44 + "px";
 }, 444);


  }



  else if ("ArrowUp" == event.key) {
    console.log(event.key);
  document.getElementById('play').style.animationName="up";
  setTimeout(function(){ document.getElementById('play').style.animationName=""; }, 504);
  }
  console.log("for");
  const element = document.getElementsByTagName('div');
      for(let pos = 0; pos < element.length; pos ++) {
        const elleft = element[pos].style.left;
        const elementleft = document.getElementById("play").style.left;
        //console.log(document.getElementById('play').style.left);
        if (elementleft == elleft ) {
          //console.log("false");
          stred(false);
          array = false;
        }
        else {
           stred(true);
        }
      }
      function stred(value) {
        if (value == false) {
          document.getElementById('play').style.left = xggpos*44+"px";
          //console.log(y*44-44);
             //console.log("ne");
                 array = false;
               y == xggpos;
             console.log(y, xggpos);
         }
        else if (value == true) {
          //console.log("ano");
          document.getElementById('play').style.left = y*44 + "px";
          document.getElementById('play').style.top = 2*44 + "px";
        }
      }

})
window.addEventListener("mousewheel", function (event) {
  wheel ++;
  if (wheel == 1) {
    nas();
        document.body.style.cursor="url(pickaxe.ICO) 5 5, auto";
    krumpac = true;
    document.getElementById('playgg').innerHTML="";

  }
  if (wheel == 2) {
    nas();
    document.getElementById('playgg').innerHTML="";

    sekera = true;
    document.body.style.cursor="url(axe.ICO) 5 5, auto";
    document.body.style.cursor="url(axe.ICO) 5 5, auto";
  }
  if (wheel == 3) {


    document.getElementById('playgg').innerHTML="";

    document.body.style.cursor="url(gg.ICO) 5 5, auto";
  }
  if (wheel == 4) {
     document.getElementById('playgg').innerHTML="stone"+stone;

    if (stone > 0) {
      console.log("stone");

      document.body.style.cursor="url(stone.ICO) 5 5, auto";

    }

  }
  if (wheel == 5) {
    document.getElementById('playgg').innerHTML="iron" + iron;
    if (stone > 0) {
      console.log("stone");
      document.body.style.cursor="url(iron.ICO) 5 5, auto";
      document.getElementById('playgg').innerHTML="iron";
    }

  }
  if (wheel == 6) {
    document.getElementById('playgg').innerHTML="wool" + wool;
    if (stone > 0) {
      console.log("stone");
      document.body.style.cursor="url(wool.ICO) 5 5, auto";
    }
  }
  if (wheel == 7) {
    document.getElementById('playgg').innerHTML="wood" + wood;
    if (stone > 0) {
      console.log("stone");
      document.body.style.cursor="url(wood.ICO) 5 5, auto";
    }
  }
  if (wheel == 8) {
    wheel = 0;
    }




        console.log(wheel);
});




window.addEventListener("load", function () {
    for (let pos = 0; pos < 270; pos ++) {
      var node = document.createElement("div");
    var textnode = document.createTextNode("");
    node.appendChild(textnode);
    const gg = Math.floor(Math.random()*4);
    node.id=""
    if (gg == 0) {
      node.className="stone";
    }
    else if (gg == 1) {
      node.className="wood";
    }
    else if (gg == 2) {
      node.className="iron";
    }
    else if (gg == 3) {
      node.className="wool";
    }
    node.style.left=ahojpos * 44 + "px";
      node.style.top=topgg * 44 + "px";
    if (ahojpos > 28) {
      topgg ++;
      //node.style.position = "relative";
      ahojpos = -1;
    }
      ahojpos ++;
    document.body.appendChild(node);
    }


  window.addEventListener("click", function (event) {
   const element = event.path;
   if (element.length == 3) {
     console.log("ahoj");

   }
   else
   {
     const object = event.target.getAttribute("class");
     if (object == "stone") {
       if (krumpac == true) {
         kamen.value -= 4;
       }
       else
       {
         kamen.value --;
       }

     }
     if (object == "iron") {
       if (krumpac == true) {
         zelezo.value -= 4;
       }
       else
       {
         zelezo.value --;
       }

     }
     if (object == "wool") {
         vlna.value --;
       }

     if (object == "wood") {
       if (sekera == true) {
         drevo.value -= 4;
       }
       else
       {
         drevo.value --;
       }

     }
       if (thisobject != object) {
         console.log("ahoj");
         kamen.value = 4;
         drevo.value = 4;
         zelezo.value = 8;
            vlna.value=4;



       }
       thisobject = object;
       if (drevo.value == 0) {
         wood ++;
         moje_veci_kamen_drevo();
         event.target.remove();
         drevo.value = 4;
       }
       if (vlna.value == 0) {
         wool ++;
         moje_veci_kamen_drevo();
         event.target.remove();
         vlna.value = 4;
       }





       if (zelezo.value == 0) {
         iron ++;
         moje_veci_kamen_drevo();
         event.target.remove();
         zelezo.value = 4;
       }
     if (kamen.value == 0) {
       stone ++;
       moje_veci_kamen_drevo();
       event.target.remove();
       kamen.value = 4;
     }
     function moje_veci_kamen_drevo() {
                  console.log("drevo", wood,"vlna",wool,"kov",iron,"kamen" + "" +  stone);
     }
   }
  })
})
