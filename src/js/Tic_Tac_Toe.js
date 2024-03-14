// taking names from the user 

function TakeName() {
  var user1 = prompt("User1 Name ( O ):");
  var user2 = prompt("User2 Name ( X ):");
  document.getElementById("user1").innerHTML = " :   " + user1.fontsize("5em");
  document.getElementById("user2").innerHTML = " :   " + user2.fontsize("5em");
}

var symbol = "X";

function whoWins(btnInfo) {
  // for reloading the name
  // TakeName();

  // for identifying position and puting the symbol , after
  //  that make the field disabled so that next time no other symbol can't access the same field
  if (btnInfo.id == "btn1") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn2") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn3") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn4") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn5") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn6") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn7") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn8") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  } else if (btnInfo.id == "btn9") {
    btnInfo.value = symbol;
    btnInfo.disabled = true;
    check_win();
  }

  //symbol toggler to toggle  X to O or viceversa
  if (symbol == "X") {
    document.getElementById("user1").style = "color:none;font-size:1em;";
    document.getElementById("user2").style = "color:red;font-size:2em:font-weight:bolder;";
    symbol = "O";
  } else {
    document.getElementById("user1").style = "color:red;font-size:2em;font-weight:bolder;";
    document.getElementById("user2").style = "color:none;font-size:1em;";
    symbol = "X";
  }
}

// for checking who is winning
function check_win() {
  // fetching the value from the feild
  b1 = document.getElementById("btn1").value;
  b2 = document.getElementById("btn2").value;
  b3 = document.getElementById("btn3").value;
  b4 = document.getElementById("btn4").value;
  b5 = document.getElementById("btn5").value;
  b6 = document.getElementById("btn6").value;
  b7 = document.getElementById("btn7").value;
  b8 = document.getElementById("btn8").value;
  b9 = document.getElementById("btn9").value;

  // fetching field id
  btn1Id = document.getElementById("btn1");
  btn2Id = document.getElementById("btn2");
  btn3Id = document.getElementById("btn3");
  btn4Id = document.getElementById("btn4");
  btn5Id = document.getElementById("btn5");
  btn6Id = document.getElementById("btn6");
  btn7Id = document.getElementById("btn7");
  btn8Id = document.getElementById("btn8");
  btn9Id = document.getElementById("btn9");

  // for displaying the result
  var result = document.getElementById("result");

  // this block checks who wins the match or tie

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    result.innerHTML = "X win";

    btn1Id.style.color = "red";
    btn2Id.style.color = "red";
    btn3Id.style.color = "red";
    btn4Id.disabled = true;
    btn5Id.disabled = true;
    btn6Id.disabled = true;
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    result.innerHTML = "X win";

    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.style.color = "red";
    btn5Id.style.color = "red";
    btn6Id.style.color = "red";
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    result.innerHTML = "X win";

    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.disabled = true;
    btn5Id.disabled = true;
    btn6Id.disabled = true;
    btn7Id.style.color = "red";
    btn8Id.style.color = "red";
    btn9Id.style.color = "red";
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    result.innerHTML = "X win";

    btn1Id.style.color = "red";
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.disabled = true;
    btn5Id.style.color = "red";
    btn6Id.disabled = true;
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.style.color = "red";
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    result.innerHTML = "X win";

    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.style.color = "red";
    btn4Id.disabled = true;
    btn5Id.style.color = "red";
    btn6Id.disabled = true;
    btn7Id.style.color = "red";
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    result.innerHTML = "X win";

    btn1Id.style.color = "red";
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.style.color = "red";
    btn5Id.disabled = true;
    btn6Id.disabled = true;
    btn7Id.style.color = "red";
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    result.innerHTML = "X win";
    btn1Id.disabled = true;
    btn2Id.style.color = "red";
    btn3Id.disabled = true;
    btn4Id.disabled = true;
    btn5Id.style.color = "red";
    btn6Id.disabled = true;
    btn7Id.disabled = true;
    btn8Id.style.color = "red";
    btn9Id.disabled = true;
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    result.innerHTML = "X win";

    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.style.color = "red";
    btn4Id.disabled = true;
    btn5Id.disabled = true;
    btn6Id.style.color = "red";
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.style.color = "red";
  }
  // x wining  possibilites finished
  else if (b1 == "O" && b2 == "O" && b3 == "O") {
    result.innerHTML = "O win";

    btn1Id.style.color = "red";
    btn2Id.style.color = "red";
    btn3Id.style.color = "red";
    btn4Id.disabled = true;
    btn5Id.disabled = true;
    btn6Id.disabled = true;
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b4 == "O" && b5 == "O" && b6 == "O") {
    result.innerHTML = "O win";
    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.style.color = "red";
    btn5Id.style.color = "red";
    btn6Id.style.color = "red";
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b7 == "O" && b8 == "O" && b9 == "O") {
    result.innerHTML = "O win";
    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.disabled = true;
    btn5Id.disabled = true;
    btn6Id.disabled = true;
    btn7Id.style.color = "red";
    btn8Id.style.color = "red";
    btn9Id.style.color = "red";
  } else if (b1 == "O" && b5 == "O" && b9 == "O") {
    result.innerHTML = "O win";
    btn1Id.style.color = "red";
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.disabled = true;
    btn5Id.style.color = "red";
    btn6Id.disabled = true;
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.style.color = "red";
  } else if (b3 == "O" && b5 == "O" && b7 == "O") {
    result.innerHTML = "O win";
    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.style.color = "red";
    btn4Id.disabled = true;
    btn5Id.style.color = "red";
    btn6Id.disabled = true;
    btn7Id.style.color = "red";
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    result.innerHTML = "O win";

    btn1Id.style.color = "red";
    btn2Id.disabled = true;
    btn3Id.disabled = true;
    btn4Id.style.color = "red";
    btn5Id.disabled = true;
    btn6Id.disabled = true;
    btn7Id.style.color = "red";
    btn8Id.disabled = true;
    btn9Id.disabled = true;
  } else if (b2 == "O" && b5 == "O" && b8 == "O") {
    result.innerHTML = "O win";
    btn1Id.disabled = true;
    btn2Id.style.color = "red";
    btn3Id.disabled = true;
    btn4Id.disabled = true;
    btn5Id.style.color = "red";
    btn6Id.disabled = true;
    btn7Id.disabled = true;
    btn8Id.style.color = "red";
    btn9Id.disabled = true;
  } else if (b3 == "O" && b6 == "O" && b9 == "O") {
    result.innerHTML = "O win";
    btn1Id.disabled = true;
    btn2Id.disabled = true;
    btn3Id.style.color = "red";
    btn4Id.disabled = true;
    btn5Id.disabled = true;
    btn6Id.style.color = "red";
    btn7Id.disabled = true;
    btn8Id.disabled = true;
    btn9Id.style.color = "red";
  }
  // O winning posibilities finished
  else if (
    (b1 == "X" || b1 == "O") &&
    (b2 == "X" || b2 == "O") &&
    (b3 == "X" || b3 == "O") &&
    (b4 == "X" || b4 == "O") &&
    (b5 == "X" || b5 == "O") &&
    (b6 == "X" || b6 == "O") &&
    (b7 == "X" || b7 == "O") &&
    (b8 == "X" || b8 == "O") &&
    (b9 == "X" || b9 == "O")
  ) {
    result.innerHTML = "Match tie";
  }
}

// for reset the value
function reset() {
  location.reload();
  // b1=b2=b3=b4=b5=b6=b7=b8=b9="";
}