function getTableData() {
//#region Blue
const Blue1 = document.getElementById("Blue1");
const Blue2 = document.getElementById("Blue2");
const Blue3 = document.getElementById("Blue3");
const Blue4 = document.getElementById("Blue4");
const Blue5 = document.getElementById("Blue5");
const Blue6 = document.getElementById("Blue6");
const Blue7 = document.getElementById("Blue7");
const Blue8 = document.getElementById("Blue8");
const Blue9 = document.getElementById("Blue9");
const Blue10 = document.getElementById("Blue10");
const Blue11 = document.getElementById("Blue11");
const Blue12 = document.getElementById("Blue12");
const Blue13 = document.getElementById("Blue13");
const Blue14 = document.getElementById("Blue14");
const Blue15 = document.getElementById("Blue15");
const Blue16 = document.getElementById("Blue16");
const Blue17 = document.getElementById("Blue17");
const Blue18 = document.getElementById("Blue18");
const InBlue = document.getElementById("InBlue");
const OutBlue = document.getElementById("OutBlue");
const TotBlue = document.getElementById("TotBlue");
//#endregion
//#region White
const White1 = document.getElementById("White1");
const White2 = document.getElementById("White2");
const White3 = document.getElementById("White3");
const White4 = document.getElementById("White4");
const White5 = document.getElementById("White5");
const White6 = document.getElementById("White6");
const White7 = document.getElementById("White7");
const White8 = document.getElementById("White8");
const White9 = document.getElementById("White9");
const White10 = document.getElementById("White10");
const White11 = document.getElementById("White11");
const White12 = document.getElementById("White12");
const White13 = document.getElementById("White13");
const White14 = document.getElementById("White14");
const White15 = document.getElementById("White15");
const White16 = document.getElementById("White16");
const White17 = document.getElementById("White17");
const White18 = document.getElementById("White18");
const InWhite = document.getElementById("InWhite");
const OutWhite = document.getElementById("OutWhite");
const TotWhite = document.getElementById("TotWhite");
//#endregion
//#region Red
const Red1 = document.getElementById('Red1');
const Red2 = document.getElementById('Red2');
const Red3 = document.getElementById('Red3');
const Red4 = document.getElementById('Red4');
const Red5 = document.getElementById('Red5');
const Red6 = document.getElementById('Red6');
const Red7 = document.getElementById('Red7');
const Red8 = document.getElementById('Red8');
const Red9 = document.getElementById('Red9');
const Red10 = document.getElementById('Red10');
const Red11 = document.getElementById('Red11');
const Red12 = document.getElementById('Red12');
const Red13 = document.getElementById('Red13');
const Red14 = document.getElementById('Red14');
const Red15 = document.getElementById('Red15');
const Red16 = document.getElementById('Red16');
const Red17 = document.getElementById('Red17');
const Red18 = document.getElementById('Red18');
const InRed = document.getElementById('InRed');
const OutRed = document.getElementById('OutRed');
const TotRed = document.getElementById('TotRed');
//#endregion
//#region Par
const Par1 = document.getElementById('Par1');
const Par2 = document.getElementById('Par2');
const Par3 = document.getElementById('Par3');
const Par4 = document.getElementById('Par4');
const Par5 = document.getElementById('Par5');
const Par6 = document.getElementById('Par6');
const Par7 = document.getElementById('Par7');
const Par8 = document.getElementById('Par8');
const Par9 = document.getElementById('Par9');
const Par10 = document.getElementById('Par10');
const Par11 = document.getElementById('Par11');
const Par12 = document.getElementById('Par12');
const Par13 = document.getElementById('Par13');
const Par14 = document.getElementById('Par14');
const Par15 = document.getElementById('Par15');
const Par16 = document.getElementById('Par16');
const Par17 = document.getElementById('Par17');
const Par18 = document.getElementById('Par18');
const InPar = document.getElementById('InPar');
const OutPar = document.getElementById('OutPar');
const TotPar = document.getElementById('TotPar');
//#endregion
//#region Black
const Black1 = document.getElementById('Black1');
const Black2 = document.getElementById('Black2');
const Black3 = document.getElementById('Black3');
const Black4 = document.getElementById('Black4');
const Black5 = document.getElementById('Black5');
const Black6 = document.getElementById('Black6');
const Black7 = document.getElementById('Black7');
const Black8 = document.getElementById('Black8');
const Black9 = document.getElementById('Black9');
const Black10 = document.getElementById('Black10');
const Black11 = document.getElementById('Black11');
const Black12 = document.getElementById('Black12');
const Black13 = document.getElementById('Black13');
const Black14 = document.getElementById('Black14');
const Black15 = document.getElementById('Black15');
const Black16 = document.getElementById('Black16');
const Black17 = document.getElementById('Black17');
const Black18 = document.getElementById('Black18');
const InBlack = document.getElementById('InBlack');
const OutBlack = document.getElementById('OutBlack');
const TotBlack = document.getElementById('TotBlack');
//#endregion
//#region Yellow
const Yellow1 = document.getElementById('Yellow1');
const Yellow2 = document.getElementById('Yellow2');
const Yellow3 = document.getElementById('Yellow3');
const Yellow4 = document.getElementById('Yellow4');
const Yellow5 = document.getElementById('Yellow5');
const Yellow6 = document.getElementById('Yellow6');
const Yellow7 = document.getElementById('Yellow7');
const Yellow8 = document.getElementById('Yellow8');
const Yellow9 = document.getElementById('Yellow9');
const Yellow10 = document.getElementById('Yellow10');
const Yellow11 = document.getElementById('Yellow11');
const Yellow12 = document.getElementById('Yellow12');
const Yellow13 = document.getElementById('Yellow13');
const Yellow14 = document.getElementById('Yellow14');
const Yellow15 = document.getElementById('Yellow15');
const Yellow16 = document.getElementById('Yellow16');
const Yellow17 = document.getElementById('Yellow17');
const Yellow18 = document.getElementById('Yellow18');
const InYellow = document.getElementById('InYellow');
const OutYellow = document.getElementById('OutYellow');
const TotYellow = document.getElementById('TotYellow');
//#endregion
//#region Player1
let One1 = document.getElementById('One1')
let One2 = document.getElementById('One2')
let One3 = document.getElementById('One3')
let One4 = document.getElementById('One4')
let One5 = document.getElementById('One5')
let One6 = document.getElementById('One6')
let One7 = document.getElementById('One7')
let One8 = document.getElementById('One8')
let One9 = document.getElementById('One9')
let One10 = document.getElementById('One10')
let One11 = document.getElementById('One11')
let One12 = document.getElementById('One12')
let One13 = document.getElementById('One13')
let One14 = document.getElementById('One14')
let One15 = document.getElementById('One15')
let One16 = document.getElementById('One16')
let One17 = document.getElementById('One17')
let One18 = document.getElementById('One18')
let InOne = document.getElementById('InOne')
let OutOne = document.getElementById('OutOne')
let TotOne = document.getElementById('TotOne')
//#endregion
//#region Player2
let Two1 = document.getElementById('Two1')
let Two2 = document.getElementById('Two2')
let Two3 = document.getElementById('Two3')
let Two4 = document.getElementById('Two4')
let Two5 = document.getElementById('Two5')
let Two6 = document.getElementById('Two6')
let Two7 = document.getElementById('Two7')
let Two8 = document.getElementById('Two8')
let Two9 = document.getElementById('Two9')
let Two10 = document.getElementById('Two10')
let Two11 = document.getElementById('Two11')
let Two12 = document.getElementById('Two12')
let Two13 = document.getElementById('Two13')
let Two14 = document.getElementById('Two14')
let Two15 = document.getElementById('Two15')
let Two16 = document.getElementById('Two16')
let Two17 = document.getElementById('Two17')
let Two18 = document.getElementById('Two18')
let InTwo = document.getElementById('InTwo')
let OutTwo = document.getElementById('OutTwo')
let TotTwo = document.getElementById('TotTwo')
//#endregion
//#region Player3
let Three1 = document.getElementById('Three1')
let Three2 = document.getElementById('Three2')
let Three3 = document.getElementById('Three3')
let Three4 = document.getElementById('Three4')
let Three5 = document.getElementById('Three5')
let Three6 = document.getElementById('Three6')
let Three7 = document.getElementById('Three7')
let Three8 = document.getElementById('Three8')
let Three9 = document.getElementById('Three9')
let Three10 = document.getElementById('Three10')
let Three11 = document.getElementById('Three11')
let Three12 = document.getElementById('Three12')
let Three13 = document.getElementById('Three13')
let Three14 = document.getElementById('Three14')
let Three15 = document.getElementById('Three15')
let Three16 = document.getElementById('Three16')
let Three17 = document.getElementById('Three17')
let Three18 = document.getElementById('Three18')
let InThree = document.getElementById('InThree')
let OutThree = document.getElementById('OutThree')
let TotThree = document.getElementById('TotThree')
//#endregion
//#region Player4
let Four1 = document.getElementById('Four1')
let Four2 = document.getElementById('Four2')
let Four3 = document.getElementById('Four3')
let Four4 = document.getElementById('Four4')
let Four5 = document.getElementById('Four5')
let Four6 = document.getElementById('Four6')
let Four7 = document.getElementById('Four7')
let Four8 = document.getElementById('Four8')
let Four9 = document.getElementById('Four9')
let Four10 = document.getElementById('Four10')
let Four11 = document.getElementById('Four11')
let Four12 = document.getElementById('Four12')
let Four13 = document.getElementById('Four13')
let Four14 = document.getElementById('Four14')
let Four15 = document.getElementById('Four15')
let Four16 = document.getElementById('Four16')
let Four17 = document.getElementById('Four17')
let Four18 = document.getElementById('Four18')
let InFour = document.getElementById('InFour')
let OutFour = document.getElementById('OutFour')
let TotFour = document.getElementById('TotFour')
//#endregion
//#region Player5
let Five1 = document.getElementById('Five1')
let Five2 = document.getElementById('Five2')
let Five3 = document.getElementById('Five3')
let Five4 = document.getElementById('Five4')
let Five5 = document.getElementById('Five5')
let Five6 = document.getElementById('Five6')
let Five7 = document.getElementById('Five7')
let Five8 = document.getElementById('Five8')
let Five9 = document.getElementById('Five9')
let Five10 = document.getElementById('Five10')
let Five11 = document.getElementById('Five11')
let Five12 = document.getElementById('Five12')
let Five13 = document.getElementById('Five13')
let Five14 = document.getElementById('Five14')
let Five15 = document.getElementById('Five15')
let Five16 = document.getElementById('Five16')
let Five17 = document.getElementById('Five17')
let Five18 = document.getElementById('Five18')
let InFive = document.getElementById('InFive')
let OutFive = document.getElementById('OutFive')
let TotFive = document.getElementById('TotFive')
//#endregion
//#region Player6
let Six1 = document.getElementById('Six1')
let Six2 = document.getElementById('Six2')
let Six3 = document.getElementById('Six3')
let Six4 = document.getElementById('Six4')
let Six5 = document.getElementById('Six5')
let Six6 = document.getElementById('Six6')
let Six7 = document.getElementById('Six7')
let Six8 = document.getElementById('Six8')
let Six9 = document.getElementById('Six9')
let Six10 = document.getElementById('Six10')
let Six11 = document.getElementById('Six11')
let Six12 = document.getElementById('Six12')
let Six13 = document.getElementById('Six13')
let Six14 = document.getElementById('Six14')
let Six15 = document.getElementById('Six15')
let Six16 = document.getElementById('Six16')
let Six17 = document.getElementById('Six17')
let Six18 = document.getElementById('Six18')
let InSix = document.getElementById('InSix')
let OutSix = document.getElementById('OutSix')
let TotSix = document.getElementById('TotSix')
//#endregion
//#region Player7
let Seven1 = document.getElementById('Seven1')
let Seven2 = document.getElementById('Seven2')
let Seven3 = document.getElementById('Seven3')
let Seven4 = document.getElementById('Seven4')
let Seven5 = document.getElementById('Seven5')
let Seven6 = document.getElementById('Seven6')
let Seven7 = document.getElementById('Seven7')
let Seven8 = document.getElementById('Seven8')
let Seven9 = document.getElementById('Seven9')
let Seven10 = document.getElementById('Seven10')
let Seven11 = document.getElementById('Seven11')
let Seven12 = document.getElementById('Seven12')
let Seven13 = document.getElementById('Seven13')
let Seven14 = document.getElementById('Seven14')
let Seven15 = document.getElementById('Seven15')
let Seven16 = document.getElementById('Seven16')
let Seven17 = document.getElementById('Seven17')
let Seven18 = document.getElementById('Seven18')
let InSeven = document.getElementById('InSeven')
let OutSeven = document.getElementById('OutSeven')
let TotSeven = document.getElementById('TotSeven')
//#endregion
//#region Player8
let Eight1 = document.getElementById('Eight1')
let Eight2 = document.getElementById('Eight2')
let Eight3 = document.getElementById('Eight3')
let Eight4 = document.getElementById('Eight4')
let Eight5 = document.getElementById('Eight5')
let Eight6 = document.getElementById('Eight6')
let Eight7 = document.getElementById('Eight7')
let Eight8 = document.getElementById('Eight8')
let Eight9 = document.getElementById('Eight9')
let Eight10 = document.getElementById('Eight10')
let Eight11 = document.getElementById('Eight11')
let Eight12 = document.getElementById('Eight12')
let Eight13 = document.getElementById('Eight13')
let Eight14 = document.getElementById('Eight14')
let Eight15 = document.getElementById('Eight15')
let Eight16 = document.getElementById('Eight16')
let Eight17 = document.getElementById('Eight17')
let Eight18 = document.getElementById('Eight18')
let InEight = document.getElementById('InEight')
let OutEight = document.getElementById('OutEight')
let TotEight = document.getElementById('TotEight')
//#endregion
}

let golfTableObj = document.getElementById("GolfTable");
let newApiURL = "";

let makePlayerRow = function (numbnumb, numbword) {
  return `<tr class="PlayerRow" id="Player${numbnumb}Row">
<th><input type="text" id="player${numbnumb}Name" placeholder="Player ${numbnumb}"></th>
<td><input type="number" id="${numbword}1" onChange="updatePlayerScore()"/></td>
<td><input type="number" id="${numbword}2" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}3" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}4" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}5" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}6" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}7" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}8" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}9" onChange="updatePlayerScore()" /></td>
<th id="Out${numbword}"></th>
<td><input type="number" id="${numbword}10" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}11" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}12" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}13" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}14" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}15" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}16" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}17" onChange="updatePlayerScore()" /></td>
<td><input type="number" id="${numbword}18" onChange="updatePlayerScore()" /></td>
<th id="In${numbword}"></th>
<th id="Tot${numbword}"></th>
</tr>`
}

let playerRowsEarly = null;
let playerRowsLater = null;

let setTableHTML = function (TeeBoxRows, EarlyRows, LateRows, courseInfo, courseWeb) {
return `<table>
<tr>
  <th colspan="100%" id="title">Golf Scorecard -- ${courseInfo} <a href='${courseWeb}' target='_blank'>${courseWeb}</th>
</tr>
<tr id="HoleRow">
  <th>Hole</th>
  <th>1</th>
  <th>2</th>
  <th>3</th>
  <th>4</th>
  <th>5</th>
  <th>6</th>
  <th>7</th>
  <th>8</th>
  <th>9</th>
  <th>OUT</th>
  <td rowspan="100%"></td>
  <th>10</th>
  <th>11</th>
  <th>12</th>
  <th>13</th>
  <th>14</th>
  <th>15</th>
  <th>16</th>
  <th>17</th>
  <th>18</th>
  <th>IN</th>
  <th>TOT</th>
</tr>
${TeeBoxRows}
${EarlyRows}
<tr id="ParRow">
  <th>PAR</th>
  <th id="Par1"></th>
  <th id="Par2"></th>
  <th id="Par3"></th>
  <th id="Par4"></th>
  <th id="Par5"></th>
  <th id="Par6"></th>
  <th id="Par7"></th>
  <th id="Par8"></th>
  <th id="Par9"></th>
  <th id="OutPar"></th>
  <th id="Par10"></th>
  <th id="Par11"></th>
  <th id="Par12"></th>
  <th id="Par13"></th>
  <th id="Par14"></th>
  <th id="Par15"></th>
  <th id="Par16"></th>
  <th id="Par17"></th>
  <th id="Par18"></th>
  <th id="InPar"></th>
  <th id="TotPar"></th>
</tr>
${LateRows}
</table>

<div id="playerResponses"></div>`


}

let setColorData = function (golfObj) {
  getTableData();
  for (let i = 0; i < golfObj.holes.length; i++) {
    for(let j =0; j < golfObj.holes[i].teeBoxes.length; j++){
      if(j < 4) {
      let value = golfObj.holes[i].teeBoxes[j].meters;
      // console.log("Hole: "+(i+1) + "| Row: "+(j+1) + "| Data: "+value);
      if(golfObj.holes[i].teeBoxes[j].teeColorType.toLowerCase() == "black"){setBlack((i+1), value);
      } else if(golfObj.holes[i].teeBoxes[j].teeColorType.toLowerCase() == "blue"){setBlue((i+1), value);
      } else if(golfObj.holes[i].teeBoxes[j].teeColorType.toLowerCase() == "red"){setRed((i+1), value);
      } else if(golfObj.holes[i].teeBoxes[j].teeColorType.toLowerCase() == "yellow"){setYellow((i+1), value);
      } else if(golfObj.holes[i].teeBoxes[j].teeColorType.toLowerCase() == "white"){setWhite((i+1), value);
      }
    }
  }
    let parValue = golfObj.holes[i].teeBoxes[0].par;
    setPar((i+1), parValue);
  }
}

let setBlack = function(number, value){
switch (number) {
  case 1:
    Black1.innerText = value;
  case 2:
    Black2.innerText = value;
    break;
  case 3:
    Black3.innerText = value;
    break;
  case 4:
    Black4.innerText = value;
    break;
  case 5:
    Black5.innerText = value;
    break;
  case 6:
    Black6.innerText = value;
    break;
  case 7:
    Black7.innerText = value;
    break;
  case 8:
    Black8.innerText = value;
    break;
  case 9:
    Black9.innerText = value;
    break;
  case 10:
    Black10.innerText = value;
    break;
  case 11:
    Black11.innerText = value;
    break;
  case 12:
    Black12.innerText = value;
    break;
  case 13:
    Black13.innerText = value;
    break;
  case 14:
    Black14.innerText = value;
    break;
  case 15:
    Black15.innerText = value;
    break;
  case 16:
    Black16.innerText = value;
    break;
  case 17:
    Black17.innerText = value;
    break;
  case 18:
    Black18.innerText = value;
    break;
  default:
    break;
}
}
let setBlue = function(number, value){
  switch (number) {
    case 1:
      Blue1.innerText = value;
      break;
    case 2:
      Blue2.innerText = value;
      break;
    case 3:
      Blue3.innerText = value;
      break;
    case 4:
      Blue4.innerText = value;
      break;
    case 5:
      Blue5.innerText = value;
      break;
    case 6:
      Blue6.innerText = value;
      break;
    case 7:
      Blue7.innerText = value;
      break;
    case 8:
      Blue8.innerText = value;
      break;
    case 9:
      Blue9.innerText = value;
      break;
    case 10:
      Blue10.innerText = value;
      break;
    case 11:
      Blue11.innerText = value;
      break;
    case 12:
      Blue12.innerText = value;
      break;
    case 13:
      Blue13.innerText = value;
      break;
    case 14:
      Blue14.innerText = value;
      break;
    case 15:
      Blue15.innerText = value;
      break;
    case 16:
      Blue16.innerText = value;
      break;
    case 17:
      Blue17.innerText = value;
      break;
    case 18:
      Blue18.innerText = value;
      break;
    default:
      break;
  }
}
let setRed = function(number, value){
    switch (number) {
      case 1:
        Red1.innerText = value;
        break;
      case 2:
        Red2.innerText = value;
        break;
      case 3:
        Red3.innerText = value;
        break;
      case 4:
        Red4.innerText = value;
        break;
      case 5:
        Red5.innerText = value;
        break;
      case 6:
        Red6.innerText = value;
        break;
      case 7:
        Red7.innerText = value;
        break;
      case 8:
        Red8.innerText = value;
        break;
      case 9:
        Red9.innerText = value;
        break;
      case 10:
        Red10.innerText = value;
        break;
      case 11:
        Red11.innerText = value;
        break;
      case 12:
        Red12.innerText = value;
        break;
      case 13:
        Red13.innerText = value;
        break;
      case 14:
        Red14.innerText = value;
        break;
      case 15:
        Red15.innerText = value;
        break;
      case 16:
        Red16.innerText = value;
        break;
      case 17:
        Red17.innerText = value;
        break;
      case 18:
        Red18.innerText = value;
        break;
      default:
        break;
    }
}
let setYellow = function(number, value){
      switch (number) {
        case 1:
          Yellow1.innerText = value;
          break;
        case 2:
          Yellow2.innerText = value;
          break;
        case 3:
          Yellow3.innerText = value;
          break;
        case 4:
          Yellow4.innerText = value;
          break;
        case 5:
          Yellow5.innerText = value;
          break;
        case 6:
          Yellow6.innerText = value;
          break;
        case 7:
          Yellow7.innerText = value;
          break;
        case 8:
          Yellow8.innerText = value;
          break;
        case 9:
          Yellow9.innerText = value;
          break;
        case 10:
          Yellow10.innerText = value;
          break;
        case 11:
          Yellow11.innerText = value;
          break;
        case 12:
          Yellow12.innerText = value;
          break;
        case 13:
          Yellow13.innerText = value;
          break;
        case 14:
          Yellow14.innerText = value;
          break;
        case 15:
          Yellow15.innerText = value;
          break;
        case 16:
          Yellow16.innerText = value;
          break;
        case 17:
          Yellow17.innerText = value;
          break;
        case 18:
          Yellow18.innerText = value;
          break;
        default:
          break;
      }
}
let setWhite = function(number, value){
        switch (number) {
          case 1:
            White1.innerText = value;
            break;
          case 2:
            White2.innerText = value;
            break;
          case 3:
            White3.innerText = value;
            break;
          case 4:
            White4.innerText = value;
            break;
          case 5:
            White5.innerText = value;
            break;
          case 6:
            White6.innerText = value;
            break;
          case 7:
            White7.innerText = value;
            break;
          case 8:
            White8.innerText = value;
            break;
          case 9:
            White9.innerText = value;
            break;
          case 10:
            White10.innerText = value;
            break;
          case 11:
            White11.innerText = value;
            break;
          case 12:
            White12.innerText = value;
            break;
          case 13:
            White13.innerText = value;
            break;
          case 14:
            White14.innerText = value;
            break;
          case 15:
            White15.innerText = value;
            break;
          case 16:
            White16.innerText = value;
            break;
          case 17:
            White17.innerText = value;
            break;
          case 18:
            White18.innerText = value;
            break;
          default:
            break;
        }
}
let setPar = function(number, value){
  switch (number) {
    case 1:
      Par1.innerText = value;
      break;
    case 2:
      Par2.innerText = value;
      break;
    case 3:
      Par3.innerText = value;
      break;
    case 4:
      Par4.innerText = value;
      break;
    case 5:
      Par5.innerText = value;
      break;
    case 6:
      Par6.innerText = value;
      break;
    case 7:
      Par7.innerText = value;
      break;
    case 8:
      Par8.innerText = value;
      break;
    case 9:
      Par9.innerText = value;
      break;
    case 10:
      Par10.innerText = value;
      break;
    case 11:
      Par11.innerText = value;
      break;
    case 12:
      Par12.innerText = value;
      break;
    case 13:
      Par13.innerText = value;
      break;
    case 14:
      Par14.innerText = value;
      break;
    case 15:
      Par15.innerText = value;
      break;
    case 16:
      Par16.innerText = value;
      break;
    case 17:
      Par17.innerText = value;
      break;
    case 18:
      Par18.innerText = value;
      break;
    default:
      break;
  }
}

let setOutInTotal = function(golfObj) {
  let golfShort = golfObj.holes[0].teeBoxes;
  let boxArray = [];
  for (let i = 0; i < golfShort.length; i++) {
    if(golfShort[i].teeColorType == 'black'){boxArray.push("black");}
    if(golfShort[i].teeColorType == 'blue'){boxArray.push("blue");}
    if(golfShort[i].teeColorType == 'white'){boxArray.push("white");}
    if(golfShort[i].teeColorType == 'red'){boxArray.push("red");}
    if(golfShort[i].teeColorType == 'yellow'){boxArray.push("yellow");}
  }

  if(boxArray.includes('blue')){
    let outBlueValue = 0;
    outBlueValue = (Blue1.innerText * 1) + (Blue2.innerText * 1) + (Blue3.innerText * 1) + (Blue4.innerText * 1) + (Blue5.innerText * 1) + (Blue6.innerText * 1) + (Blue7.innerText * 1) + (Blue8.innerText * 1) + (Blue9.innerText * 1);
    OutBlue.innerText = outBlueValue;
    let inBlueValue = 0;
    inBlueValue = (Blue10.innerText * 1) + (Blue11.innerText * 1) + (Blue12.innerText * 1) + (Blue13.innerText * 1) + (Blue14.innerText * 1) + (Blue15.innerText * 1) + (Blue16.innerText * 1) + (Blue17.innerText * 1) + (Blue18.innerText * 1);
    InBlue.innerText = inBlueValue;
    TotBlue.innerText = inBlueValue + outBlueValue;
  }
  if(boxArray.includes('yellow')){
    let outYellowValue = 0;
    outYellowValue = (Yellow1.innerText * 1) + (Yellow2.innerText * 1) + (Yellow3.innerText * 1) + (Yellow4.innerText * 1) + (Yellow5.innerText * 1) + (Yellow6.innerText * 1) + (Yellow7.innerText * 1) + (Yellow8.innerText * 1) + (Yellow9.innerText * 1);
    OutYellow.innerText = outYellowValue;
    let inYellowValue = 0;
    inYellowValue = (Yellow10.innerText * 1) + (Yellow11.innerText * 1) + (Yellow12.innerText * 1) + (Yellow13.innerText * 1) + (Yellow14.innerText * 1) + (Yellow15.innerText * 1) + (Yellow16.innerText * 1) + (Yellow17.innerText * 1) + (Yellow18.innerText * 1);
    InYellow.innerText = inYellowValue;
    TotYellow.innerText = inYellowValue + outYellowValue;
  }
  if(boxArray.includes('white')){
    let outWhiteValue = 0;
    outWhiteValue = (White1.innerText * 1) + (White2.innerText * 1) + (White3.innerText * 1) + (White4.innerText * 1) + (White5.innerText * 1) + (White6.innerText * 1) + (White7.innerText * 1) + (White8.innerText * 1) + (White9.innerText * 1);
    OutWhite.innerText = outWhiteValue;
    let inWhiteValue = 0;
    inWhiteValue = (White10.innerText * 1) + (White11.innerText * 1) + (White12.innerText * 1) + (White13.innerText * 1) + (White14.innerText * 1) + (White15.innerText * 1) + (White16.innerText * 1) + (White17.innerText * 1) + (White18.innerText * 1);
    InWhite.innerText = inWhiteValue;
    TotWhite.innerText = inWhiteValue + outWhiteValue;
  }
  if(boxArray.includes('black')){
    let outBlackValue = 0;
    outBlackValue = (Black1.innerText * 1) + (Black2.innerText * 1) + (Black3.innerText * 1) + (Black4.innerText * 1) + (Black5.innerText * 1) + (Black6.innerText * 1) + (Black7.innerText * 1) + (Black8.innerText * 1) + (Black9.innerText * 1);
    OutBlack.innerText = outBlackValue;
    let inBlackValue = 0;
    inBlackValue = (Black10.innerText * 1) + (Black11.innerText * 1) + (Black12.innerText * 1) + (Black13.innerText * 1) + (Black14.innerText * 1) + (Black15.innerText * 1) + (Black16.innerText * 1) + (Black17.innerText * 1) + (Black18.innerText * 1);
    InBlack.innerText = inBlackValue;
    TotBlack.innerText = inBlackValue + outBlackValue;
  }
  if(boxArray.includes('red')){
    let outRedValue = 0;
    outRedValue = (Red1.innerText * 1) + (Red2.innerText * 1) + (Red3.innerText * 1) + (Red4.innerText * 1) + (Red5.innerText * 1) + (Red6.innerText * 1) + (Red7.innerText * 1) + (Red8.innerText * 1) + (Red9.innerText * 1);
    OutRed.innerText = outRedValue;
    let inRedValue = 0;
    inRedValue = (Red10.innerText * 1) + (Red11.innerText * 1) + (Red12.innerText * 1) + (Red13.innerText * 1) + (Red14.innerText * 1) + (Red15.innerText * 1) + (Red16.innerText * 1) + (Red17.innerText * 1) + (Red18.innerText * 1);
    InRed.innerText = inRedValue;
    TotRed.innerText = inRedValue + outRedValue;
  }

  let outParValue = 0;
  outParValue = (Par1.innerText * 1) + (Par2.innerText * 1) + (Par3.innerText * 1) + (Par4.innerText * 1) + (Par5.innerText * 1) + (Par6.innerText * 1) + (Par7.innerText * 1) + (Par8.innerText * 1) + (Par9.innerText * 1);
  OutPar.innerText = outParValue;
  let inParValue = 0;
  inParValue = (Par10.innerText * 1) + (Par11.innerText * 1) + (Par12.innerText * 1) + (Par13.innerText * 1) + (Par14.innerText * 1) + (Par15.innerText * 1) + (Par16.innerText * 1) + (Par17.innerText * 1) + (Par18.innerText * 1);
  InPar.innerText = inParValue;
  TotPar.innerText = inParValue + outParValue;

  updatePlayerScore();
}

let updatePlayerScore = function () {
  getTableData();

  let outOneValue = 0;
  outOneValue = (One1.value * 1) + (One2.value * 1) + (One3.value * 1) + (One4.value * 1) + (One5.value * 1) + (One6.value * 1) + (One7.value * 1) + (One8.value * 1) + (One9.value * 1);
  OutOne.innerText = outOneValue;
  let inOneValue = 0;
  inOneValue = (One10.value * 1) + (One11.value * 1) + (One12.value * 1) + (One13.value * 1) + (One14.value * 1) + (One15.value * 1) + (One16.value * 1) + (One17.value * 1) + (One18.value * 1);
  InOne.innerText = inOneValue;
  TotOne.innerText = inOneValue + outOneValue;
  if(One1.value !== "" && One2.value !== "" && One3.value !== "" && One4.value !== "" && One5.value !== "" && One6.value !== "" && One7.value !== "" && One8.value !== "" && One9.value !== "" && One10.value !== "" && One11.value !== "" && One12.value !== "" && One13.value !== "" && One14.value !== "" && One15.value !== "" && One16.value !== "" && One17.value !== "" && One18.value !== ""){
    player1Name = document.getElementById("player1Name").value;
    playerResponse((player1Name == "" || player1Name == null) ? "Player 1" : player1Name, TotPar.innerText, TotOne.innerText);
  }  if(typeof Two1 != "undefined"){
    let outTwoValue = 0;
    outTwoValue = (Two1.value * 1) + (Two2.value * 1) + (Two3.value * 1) + (Two4.value * 1) + (Two5.value * 1) + (Two6.value * 1) + (Two7.value * 1) + (Two8.value * 1) + (Two9.value * 1);
    OutTwo.innerText = outTwoValue;
    let inTwoValue = 0;
    inTwoValue = (Two10.value * 1) + (Two11.value * 1) + (Two12.value * 1) + (Two13.value * 1) + (Two14.value * 1) + (Two15.value * 1) + (Two16.value * 1) + (Two17.value * 1) + (Two18.value * 1);
    InTwo.innerText = inTwoValue;
    TotTwo.innerText = inTwoValue + outTwoValue;
    if(Two1.value !== '' && Two2.value !== '' && Two3.value !== '' && Two4.value !== '' && Two5.value !== '' && Two6.value !== '' && Two7.value !== '' && Two8.value !== '' && Two9.value !== '' && Two10.value !== '' && Two11.value !== '' && Two12.value !== '' && Two13.value !== '' && Two14.value !== '' && Two15.value !== '' && Two16.value !== '' && Two17.value !== '' && Two18.value !== ''){
      player2Name = document.getElementById('player2Name').value;
      playerResponse((player2Name == '' || player2Name == null) ? 'Player 2' : player2Name, TotPar.innerText, TotTwo.innerText)
    }
  }  if(typeof Three1 !== "undefined"){
    let outThreeValue = 0;
    outThreeValue = (Three1.value * 1) + (Three2.value * 1) + (Three3.value * 1) + (Three4.value * 1) + (Three5.value * 1) + (Three6.value * 1) + (Three7.value * 1) + (Three8.value * 1) + (Three9.value * 1);
    OutThree.innerText = outThreeValue;
    let inThreeValue = 0;
    inThreeValue = (Three10.value * 1) + (Three11.value * 1) + (Three12.value * 1) + (Three13.value * 1) + (Three14.value * 1) + (Three15.value * 1) + (Three16.value * 1) + (Three17.value * 1) + (Three18.value * 1);
    InThree.innerText = inThreeValue;
    TotThree.innerText = inThreeValue + outThreeValue;
    if(Three1.value !== '' && Three2.value !== '' && Three3.value !== '' && Three4.value !== '' && Three5.value !== '' && Three6.value !== '' && Three7.value !== '' && Three8.value !== '' && Three9.value !== '' && Three10.value !== '' && Three11.value !== '' && Three12.value !== '' && Three13.value !== '' && Three14.value !== '' && Three15.value !== '' && Three16.value !== '' && Three17.value !== '' && Three18.value !== ''){
      player3Name = document.getElementById('player3Name').value;
      playerResponse((player3Name == '' || player3Name == null) ? 'Player 3' : player3Name, TotPar.innerText, TotThree.innerText)
    }
  }  if(typeof Four1 !== "undefined"){
    let outFourValue = 0;
    outFourValue = (Four1.value * 1) + (Four2.value * 1) + (Four3.value * 1) + (Four4.value * 1) + (Four5.value * 1) + (Four6.value * 1) + (Four7.value * 1) + (Four8.value * 1) + (Four9.value * 1);
    OutFour.innerText = outFourValue;
    let inFourValue = 0;
    inFourValue = (Four10.value * 1) + (Four11.value * 1) + (Four12.value * 1) + (Four13.value * 1) + (Four14.value * 1) + (Four15.value * 1) + (Four16.value * 1) + (Four17.value * 1) + (Four18.value * 1);
    InFour.innerText = inFourValue;
    TotFour.value = inFourValue + outFourValue;
    if(Four1.value !== '' && Four2.value !== '' && Four3.value !== '' && Four4.value !== '' && Four5.value !== '' && Four6.value !== '' && Four7.value !== '' && Four8.value !== '' && Four9.value !== '' && Four10.value !== '' && Four11.value !== '' && Four12.value !== '' && Four13.value !== '' && Four14.value !== '' && Four15.value !== '' && Four16.value !== '' && Four17.value !== '' && Four18.value !== ''){
      player4Name = document.getElementById('player4Name').value;
      playerResponse((player4Name == '' || player4Name == null) ? 'Player 4' : player4Name, TotPar.innerText, TotFour.innerText)
    }
  }  if(typeof Five1 !== "undefined"){
    let outFiveValue = 0;
    outFiveValue = (Five1.value * 1) + (Five2.value * 1) + (Five3.value * 1) + (Five4.value * 1) + (Five5.value * 1) + (Five6.value * 1) + (Five7.value * 1) + (Five8.value * 1) + (Five9.value * 1);
    OutFive.innerText = outFiveValue;
    let inFiveValue = 0;
    inFiveValue = (Five10.value * 1) + (Five11.value * 1) + (Five12.value * 1) + (Five13.value * 1) + (Five14.value * 1) + (Five15.value * 1) + (Five16.value * 1) + (Five17.value * 1) + (Five18.value * 1);
    InFive.innerText = inFiveValue;
    TotFive.innerText = inFiveValue + outFiveValue;
    if(Five1.value !== '' && Five2.value !== '' && Five3.value !== '' && Five4.value !== '' && Five5.value !== '' && Five6.value !== '' && Five7.value !== '' && Five8.value !== '' && Five9.value !== '' && Five10.value !== '' && Five11.value !== '' && Five12.value !== '' && Five13.value !== '' && Five14.value !== '' && Five15.value !== '' && Five16.value !== '' && Five17.value !== '' && Five18.value !== ''){
      player5Name = document.getElementById('player5Name').value;
      playerResponse((player5Name == '' || player5Name == null) ? 'Player 5' : player5Name, TotPar.innerText, TotFive.innerText)
    }
  }  if(typeof Six1 !== "undefined"){
    let outSixValue = 0;
    outSixValue = (Six1.value * 1) + (Six2.value * 1) + (Six3.value * 1) + (Six4.value * 1) + (Six5.value * 1) + (Six6.value * 1) + (Six7.value * 1) + (Six8.value * 1) + (Six9.value * 1);
    OutSix.innerText = outSixValue;
    let inSixValue = 0;
    inSixValue = (Six10.value * 1) + (Six11.value * 1) + (Six12.value * 1) + (Six13.value * 1) + (Six14.value * 1) + (Six15.value * 1) + (Six16.value * 1) + (Six17.value * 1) + (Six18.value * 1);
    InSix.innerText = inSixValue;
    TotSix.innerText = inSixValue + outSixValue;
    if(Six1.value !== '' && Six2.value !== '' && Six3.value !== '' && Six4.value !== '' && Six5.value !== '' && Six6.value !== '' && Six7.value !== '' && Six8.value !== '' && Six9.value !== '' && Six10.value !== '' && Six11.value !== '' && Six12.value !== '' && Six13.value !== '' && Six14.value !== '' && Six15.value !== '' && Six16.value !== '' && Six17.value !== '' && Six18.value !== ''){
      player6Name = document.getElementById('player6Name').value;
      playerResponse((player6Name == '' || player6Name == null) ? 'Player 6' : player6Name, TotPar.innerText, TotSix.innerText)
    }
  }  if(typeof Seven1 !== "undefined"){
    let outSevenValue = 0;
    outSevenValue = (Seven1.value * 1) + (Seven2.value * 1) + (Seven3.value * 1) + (Seven4.value * 1) + (Seven5.value * 1) + (Seven6.value * 1) + (Seven7.value * 1) + (Seven8.value * 1) + (Seven9.value * 1);
    OutSeven.innerText = outSevenValue;
    let inSevenValue = 0;
    inSevenValue = (Seven10.value * 1) + (Seven11.value * 1) + (Seven12.value * 1) + (Seven13.value * 1) + (Seven14.value * 1) + (Seven15.value * 1) + (Seven16.value * 1) + (Seven17.value * 1) + (Seven18.value * 1);
    InSeven.innerText = inSevenValue;
    TotSeven.innerText = inSevenValue + outSevenValue;
    if(Seven1.value !== '' && Seven2.value !== '' && Seven3.value !== '' && Seven4.value !== '' && Seven5.value !== '' && Seven6.value !== '' && Seven7.value !== '' && Seven8.value !== '' && Seven9.value !== '' && Seven10.value !== '' && Seven11.value !== '' && Seven12.value !== '' && Seven13.value !== '' && Seven14.value !== '' && Seven15.value !== '' && Seven16.value !== '' && Seven17.value !== '' && Seven18.value !== ''){
      player7Name = document.getElementById('player7Name').value;
      playerResponse((player7Name == '' || player7Name == null) ? 'Player 7' : player7Name, TotPar.innerText, TotSeven.innerText)
    }
  }  if(typeof Eight1 !== "undefined"){
    let outEightValue = 0;
    outEightValue = (Eight1.value * 1) + (Eight2.value * 1) + (Eight3.value * 1) + (Eight4.value * 1) + (Eight5.value * 1) + (Eight6.value * 1) + (Eight7.value * 1) + (Eight8.value * 1) + (Eight9.value * 1);
    OutEight.innerText = outEightValue;
    let inEightValue = 0;
    inEightValue = (Eight10.value * 1) + (Eight11.value * 1) + (Eight12.value * 1) + (Eight13.value * 1) + (Eight14.value * 1) + (Eight15.value * 1) + (Eight16.value * 1) + (Eight17.value * 1) + (Eight18.value * 1);
    InEight.innerText = inEightValue;
    TotEight.innerText = inEightValue + outEightValue;
    if(Eight1.value !== '' && Eight2.value !== '' && Eight3.value !== '' && Eight4.value !== '' && Eight5.value !== '' && Eight6.value !== '' && Eight7.value !== '' && Eight8.value !== '' && Eight9.value !== '' && Eight10.value !== '' && Eight11.value !== '' && Eight12.value !== '' && Eight13.value !== '' && Eight14.value !== '' && Eight15.value !== '' && Eight16.value !== '' && Eight17.value !== '' && Eight18.value !== ''){
      player8Name = document.getElementById('player8Name').value;
      playerResponse((player8Name == '' || player8Name == null) ? 'Player 8' : player8Name, TotPar.innerText, TotEight.innerText)
    }
  }
}


function makeTable(GolfingObject){
  newApiURL = GolfingObject.courseAPI;
  let playerCount = GolfingObject.playerCount;
  let golfAPI = new XMLHttpRequest();
  golfAPI.open('GET', newApiURL, true);
  golfAPI.send();
  golfAPI.onload = function () {
    if (golfAPI.status === 200) {
      window.scrollTo(-10,-10);
      let golfObj = JSON.parse(golfAPI.responseText).data;
      let teeBoxRows = "";
      let playerRowsEarly = "";
      let playerRowsLater = "";
      console.log(golfObj);
      for (let i = 0; i < playerCount; i++) {
        let numbnumb = i+1;
        let numbword = "";
        switch (numbnumb) {
          case 1:
            numbword = "One";
            break;
          case 2:
            numbword = "Two";
            break;
          case 3:
            numbword = "Three";
            break;
          case 4:
            numbword = "Four";
            break;
          case 5:
            numbword = "Five";
            break;
          case 6:
            numbword = "Six";
            break;
          case 7:
            numbword = "Seven";
            break;
          case 8:
            numbword = "Eight";
            break;
          default:
            break;
        }
        if(i <= 3){
          playerRowsEarly += makePlayerRow(numbnumb, numbword);
        } else if(i >=4 ){
          playerRowsLater += makePlayerRow(numbnumb, numbword);
        }
      }
      for (let j = 0; j < golfObj.holes[0].teeBoxes.length; j++){
        if(j < 4){
          let AddRow = "";
          let teeBoxShortCut = golfObj.holes[0].teeBoxes[j].teeColorType.toLowerCase();
          if(teeBoxShortCut == "black"){
            AddRow = `<tr id="BlackRow">
            <th>Black</th>
            <th id="Black1"></th>
            <th id="Black2"></th>
            <th id="Black3"></th>
            <th id="Black4"></th>
            <th id="Black5"></th>
            <th id="Black6"></th>
            <th id="Black7"></th>
            <th id="Black8"></th>
            <th id="Black9"></th>
            <th id="OutBlack"></th>
            <th id="Black10"></th>
            <th id="Black11"></th>
            <th id="Black12"></th>
            <th id="Black13"></th>
            <th id="Black14"></th>
            <th id="Black15"></th>
            <th id="Black16"></th>
            <th id="Black17"></th>
            <th id="Black18"></th>
            <th id="InBlack"></th>
            <th id="TotBlack"></th>
          </tr>`
          } else if(teeBoxShortCut == "blue"){
            AddRow = `<tr id="BlueRow">
            <th>Blue</th>
            <th id="Blue1"></th>
            <th id="Blue2"></th>
            <th id="Blue3"></th>
            <th id="Blue4"></th>
            <th id="Blue5"></th>
            <th id="Blue6"></th>
            <th id="Blue7"></th>
            <th id="Blue8"></th>
            <th id="Blue9"></th>
            <th id="OutBlue"></th>
            <th id="Blue10"></th>
            <th id="Blue11"></th>
            <th id="Blue12"></th>
            <th id="Blue13"></th>
            <th id="Blue14"></th>
            <th id="Blue15"></th>
            <th id="Blue16"></th>
            <th id="Blue17"></th>
            <th id="Blue18"></th>
            <th id="InBlue"></th>
            <th id="TotBlue"></th>
          </tr>`
          } else if(teeBoxShortCut == "white"){
            AddRow = `<tr id="WhiteRow">
            <th>White</th>
            <th id="White1"></th>
            <th id="White2"></th>
            <th id="White3"></th>
            <th id="White4"></th>
            <th id="White5"></th>
            <th id="White6"></th>
            <th id="White7"></th>
            <th id="White8"></th>
            <th id="White9"></th>
            <th id="OutWhite"></th>
            <th id="White10"></th>
            <th id="White11"></th>
            <th id="White12"></th>
            <th id="White13"></th>
            <th id="White14"></th>
            <th id="White15"></th>
            <th id="White16"></th>
            <th id="White17"></th>
            <th id="White18"></th>
            <th id="InWhite"></th>
            <th id="TotWhite"></th>
          </tr>`
          } else if(teeBoxShortCut == "red"){
            AddRow = `<tr id="RedRow">
            <th>Red</th>
            <th id="Red1"></th>
            <th id="Red2"></th>
            <th id="Red3"></th>
            <th id="Red4"></th>
            <th id="Red5"></th>
            <th id="Red6"></th>
            <th id="Red7"></th>
            <th id="Red8"></th>
            <th id="Red9"></th>
            <th id="OutRed"></th>
            <th id="Red10"></th>
            <th id="Red11"></th>
            <th id="Red12"></th>
            <th id="Red13"></th>
            <th id="Red14"></th>
            <th id="Red15"></th>
            <th id="Red16"></th>
            <th id="Red17"></th>
            <th id="Red18"></th>
            <th id="InRed"></th>
            <th id="TotRed"></th>
          </tr>`
          } else if(teeBoxShortCut == "yellow"){
            AddRow = `<tr id="YellowRow">
            <th>Yellow</th>
            <th id="Yellow1"></th>
            <th id="Yellow2"></th>
            <th id="Yellow3"></th>
            <th id="Yellow4"></th>
            <th id="Yellow5"></th>
            <th id="Yellow6"></th>
            <th id="Yellow7"></th>
            <th id="Yellow8"></th>
            <th id="Yellow9"></th>
            <th id="OutYellow"></th>
            <th id="Yellow10"></th>
            <th id="Yellow11"></th>
            <th id="Yellow12"></th>
            <th id="Yellow13"></th>
            <th id="Yellow14"></th>
            <th id="Yellow15"></th>
            <th id="Yellow16"></th>
            <th id="Yellow17"></th>
            <th id="Yellow18"></th>
            <th id="InYellow"></th>
            <th id="TotYellow"></th>
          </tr>`
          }
          teeBoxRows += AddRow;
        }
      }
      let courseInfo = golfObj.name + " -- " + golfObj.addr1 + ", " + golfObj.city + " " + golfObj.stateOrProvince + " -- " + golfObj.phone + " -- ";
      let courseWeb = golfObj.website;
      golfTableObj.innerHTML = setTableHTML(teeBoxRows, playerRowsEarly, playerRowsLater, courseInfo, courseWeb);       //Fox Hollow (1:Black 2:Blue 3:White 4:Red 5:"Auto Change Location") Thxgiving (1:Black 2:Blue 3:White 4:Red) Spanish (1:Blue 2:White 3:Yellow)
      setColorData(golfObj);
      setOutInTotal(golfObj);
    }
    
  } 
}

function playerResponse(PlayerName, ParTotal, PlayerTotal) {
  let playerResponseElem = document.getElementById("playerResponses");
  playerResponseElem.innerText += "";
  let playerScore = PlayerTotal - ParTotal;
  console.log(playerScore + " = " + PlayerTotal + " - " + ParTotal);
  playerResponseElem.innerText += 'Good job '+ PlayerName + '! You finished! Your score was ' + playerScore + ', compared to the Par, ' + ParTotal + '.';
  if(playerScore > 0) {
    playerResponseElem.innerText += ' Better Luck Next Time!'
  } else if (playerScore == 0) {
    playerResponseElem.innerText += ' Right on Target!'
  } else {
    playerResponseElem.innerText += " Wow, that's amazing!"
  }
  playerResponseElem.innerHTML += `<br>`;
}