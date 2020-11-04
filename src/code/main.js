function getTableData() {
//#region BLUE
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
//#region GREEN
const Green1 = document.getElementById("Green1");
const Green2 = document.getElementById("Green2");
const Green3 = document.getElementById("Green3");
const Green4 = document.getElementById("Green4");
const Green5 = document.getElementById("Green5");
const Green6 = document.getElementById("Green6");
const Green7 = document.getElementById("Green7");
const Green8 = document.getElementById("Green8");
const Green9 = document.getElementById("Green9");
const Green10 = document.getElementById("Green10");
const Green11 = document.getElementById("Green11");
const Green12 = document.getElementById("Green12");
const Green13 = document.getElementById("Green13");
const Green14 = document.getElementById("Green14");
const Green15 = document.getElementById("Green15");
const Green16 = document.getElementById("Green16");
const Green17 = document.getElementById("Green17");
const Green18 = document.getElementById("Green18");
const InGreen = document.getElementById("InGreen");
const OutGreen = document.getElementById("OutGreen");
const TotGreen = document.getElementById("TotGreen");
//#endregion
//#region GRAY
const Gray1 = document.getElementById('Gray1');
const Gray2 = document.getElementById('Gray2');
const Gray3 = document.getElementById('Gray3');
const Gray4 = document.getElementById('Gray4');
const Gray5 = document.getElementById('Gray5');
const Gray6 = document.getElementById('Gray6');
const Gray7 = document.getElementById('Gray7');
const Gray8 = document.getElementById('Gray8');
const Gray9 = document.getElementById('Gray9');
const Gray10 = document.getElementById('Gray10');
const Gray11 = document.getElementById('Gray11');
const Gray12 = document.getElementById('Gray12');
const Gray13 = document.getElementById('Gray13');
const Gray14 = document.getElementById('Gray14');
const Gray15 = document.getElementById('Gray15');
const Gray16 = document.getElementById('Gray16');
const Gray17 = document.getElementById('Gray17');
const Gray18 = document.getElementById('Gray18');
const InGray = document.getElementById('InGray');
const OutGray = document.getElementById('OutGray');
const TotGray = document.getElementById('TotGray');
//#endregion
//#region PAR
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
//#region LIGHT GREEN
const LGreen1 = document.getElementById('LGreen1');
const LGreen2 = document.getElementById('LGreen2');
const LGreen3 = document.getElementById('LGreen3');
const LGreen4 = document.getElementById('LGreen4');
const LGreen5 = document.getElementById('LGreen5');
const LGreen6 = document.getElementById('LGreen6');
const LGreen7 = document.getElementById('LGreen7');
const LGreen8 = document.getElementById('LGreen8');
const LGreen9 = document.getElementById('LGreen9');
const LGreen10 = document.getElementById('LGreen10');
const LGreen11 = document.getElementById('LGreen11');
const LGreen12 = document.getElementById('LGreen12');
const LGreen13 = document.getElementById('LGreen13');
const LGreen14 = document.getElementById('LGreen14');
const LGreen15 = document.getElementById('LGreen15');
const LGreen16 = document.getElementById('LGreen16');
const LGreen17 = document.getElementById('LGreen17');
const LGreen18 = document.getElementById('LGreen18');
const InLGreen = document.getElementById('InLGreen');
const OutLGreen = document.getElementById('OutLGreen');
const TotLGreen = document.getElementById('TotLGreen');
//#endregion
//#region HANDICAP
const Handi1 = document.getElementById('Handi1');
const Handi2 = document.getElementById('Handi2');
const Handi3 = document.getElementById('Handi3');
const Handi4 = document.getElementById('Handi4');
const Handi5 = document.getElementById('Handi5');
const Handi6 = document.getElementById('Handi6');
const Handi7 = document.getElementById('Handi7');
const Handi8 = document.getElementById('Handi8');
const Handi9 = document.getElementById('Handi9');
const Handi10 = document.getElementById('Handi10');
const Handi11 = document.getElementById('Handi11');
const Handi12 = document.getElementById('Handi12');
const Handi13 = document.getElementById('Handi13');
const Handi14 = document.getElementById('Handi14');
const Handi15 = document.getElementById('Handi15');
const Handi16 = document.getElementById('Handi16');
const Handi17 = document.getElementById('Handi17');
const Handi18 = document.getElementById('Handi18');
//#endregion
//#region LADIES' HANDICAP
const LHandi1 = document.getElementById('LHandi1');
const LHandi2 = document.getElementById('LHandi2');
const LHandi3 = document.getElementById('LHandi3');
const LHandi4 = document.getElementById('LHandi4');
const LHandi5 = document.getElementById('LHandi5');
const LHandi6 = document.getElementById('LHandi6');
const LHandi7 = document.getElementById('LHandi7');
const LHandi8 = document.getElementById('LHandi8');
const LHandi9 = document.getElementById('LHandi9');
const LHandi10 = document.getElementById('LHandi10');
const LHandi11 = document.getElementById('LHandi11');
const LHandi12 = document.getElementById('LHandi12');
const LHandi13 = document.getElementById('LHandi13');
const LHandi14 = document.getElementById('LHandi14');
const LHandi15 = document.getElementById('LHandi15');
const LHandi16 = document.getElementById('LHandi16');
const LHandi17 = document.getElementById('LHandi17');
const LHandi18 = document.getElementById('LHandi18');
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
<td><input type="number" id="${numbword}1" /></td>
<td><input type="number" id="${numbword}2" /></td>
<td><input type="number" id="${numbword}3" /></td>
<td><input type="number" id="${numbword}4" /></td>
<td><input type="number" id="${numbword}5" /></td>
<td><input type="number" id="${numbword}6" /></td>
<td><input type="number" id="${numbword}7" /></td>
<td><input type="number" id="${numbword}8" /></td>
<td><input type="number" id="${numbword}9" /></td>
<th id="Out${numbword}"></th>
<td><input type="number" id="${numbword}10" /></td>
<td><input type="number" id="${numbword}11" /></td>
<td><input type="number" id="${numbword}12" /></td>
<td><input type="number" id="${numbword}13" /></td>
<td><input type="number" id="${numbword}14" /></td>
<td><input type="number" id="${numbword}15" /></td>
<td><input type="number" id="${numbword}16" /></td>
<td><input type="number" id="${numbword}17" /></td>
<td><input type="number" id="${numbword}18" /></td>
<th id="In${numbword}"></th>
<th id="Tot${numbword}"></th>
</tr>`
}


let playerRowsEarly = null;
let playerRowsLater = null;

let setTableHTML = function (EarlyRows, LateRows) {
return `<table>
<tr>
  <th colspan="100%" id="title">Golf Scorecard</th>
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
<tr id="BlueRow">
  <th>Blue</th>
  <th id="Blue1">356</th>
  <th id="Blue2">527</th>
  <th id="Blue3">194</th>
  <th id="Blue4">379</th>
  <th id="Blue5">427</th>
  <th id="Blue6">373</th>
  <th id="Blue7">615</th>
  <th id="Blue8">436</th>
  <th id="Blue9">204</th>
  <th id="OutBlue"></th>
  <th id="Blue10">524</th>
  <th id="Blue11">390</th>
  <th id="Blue12">397</th>
  <th id="Blue13">184</th>
  <th id="Blue14">551</th>
  <th id="Blue15">355</th>
  <th id="Blue16">461</th>
  <th id="Blue17">184</th>
  <th id="Blue18">405</th>
  <th id="InBlue"></th>
  <th id="TotBlue"></th>
</tr>
<tr id="GreenRow">
  <th>Green</th>
  <th id="Green1">332</th>
  <th id="Green2">518</th>
  <th id="Green3">163</th>
  <th id="Green4">344</th>
  <th id="Green5">405</th>
  <th id="Green6">357</th>
  <th id="Green7">548</th>
  <th id="Green8">402</th>
  <th id="Green9">174</th>
  <th id="OutGreen"></th>
  <th id="Green10">505</th>
  <th id="Green11">376</th>
  <th id="Green12">385</th>
  <th id="Green13">143</th>
  <th id="Green14">513</th>
  <th id="Green15">354</th>
  <th id="Green16">419</th>
  <th id="Green17">146</th>
  <th id="Green18">381</th>
  <th id="InGreen"></th>
  <th id="TotGreen"></th>
</tr>
<tr id="GrayRow">
  <th>Gray</th>
  <th id="Gray1">314</th>
  <th id="Gray2">506</th>
  <th id="Gray3">136</th>
  <th id="Gray4">296</th>
  <th id="Gray5">329</th>
  <th id="Gray6">341</th>
  <th id="Gray7">498</th>
  <th id="Gray8">369</th>
  <th id="Gray9">137</th>
  <th id="OutGray"></th>
  <th id="Gray10">435</th>
  <th id="Gray11">342</th>
  <th id="Gray12">337</th>
  <th id="Gray13">128</th>
  <th id="Gray14">458</th>
  <th id="Gray15">337</th>
  <th id="Gray16">343</th>
  <th id="Gray17">119</th>
  <th id="Gray18">366</th>
  <th id="InGray"></th>
  <th id="TotGray"></th>
</tr>
<tr id="HandiRow">
  <th>Handicap</th>
  <th id="Handi1">13</th>
  <th id="Handi2">3</th>
  <th id="Handi3">15</th>
  <th id="Handi4">11</th>
  <th id="Handi5">7</th>
  <th id="Handi6">9</th>
  <th id="Handi7">5</th>
  <th id="Handi8">1</th>
  <th id="Handi9">17</th>
  <th id="OutHandi">N/A</th>
  <th id="Handi10">6</th>
  <th id="Handi11">12</th>
  <th id="Handi12">10</th>
  <th id="Handi13">18</th>
  <th id="Handi14">4</th>
  <th id="Handi15">14</th>
  <th id="Handi16">2</th>
  <th id="Handi17">16</th>
  <th id="Handi18">8</th>
  <th id="InHandi">N/A</th>
  <th id="TotHandi">N/A</th>
</tr>
${EarlyRows}
<tr id="ParRow">
  <th>PAR</th>
  <th id="Par1">4</th>
  <th id="Par2">5</th>
  <th id="Par3">3</th>
  <th id="Par4">4</th>
  <th id="Par5">4</th>
  <th id="Par6">4</th>
  <th id="Par7">5</th>
  <th id="Par8">4</th>
  <th id="Par9">3</th>
  <th id="OutPar"></th>
  <th id="Par10">5</th>
  <th id="Par11">4</th>
  <th id="Par12">4</th>
  <th id="Par13">3</th>
  <th id="Par14">5</th>
  <th id="Par15">4</th>
  <th id="Par16">4</th>
  <th id="Par17">3</th>
  <th id="Par18">4</th>
  <th id="InPar"></th>
  <th id="TotPar"></th>
</tr>
${LateRows}
<tr id="LGreenRow">
  <th>Light Green</th>
  <th id="LGreen1">311</th>
  <th id="LGreen2">418</th>
  <th id="LGreen3">118</th>
  <th id="LGreen4">282</th>
  <th id="LGreen5">326</th>
  <th id="LGreen6">289</th>
  <th id="LGreen7">488</th>
  <th id="LGreen8">295</th>
  <th id="LGreen9">128</th>
  <th id="OutLGreen"></th>
  <th id="LGreen10">425</th>
  <th id="LGreen11">331</th>
  <th id="LGreen12">325</th>
  <th id="LGreen13">117</th>
  <th id="LGreen14">450</th>
  <th id="LGreen15">285</th>
  <th id="LGreen16">339</th>
  <th id="LGreen17">110</th>
  <th id="LGreen18">315</th>
  <th id="InLGreen"></th>
  <th id="TotLGreen"></th>
</tr>
<tr id="LHandiRow">
  <th>Ladies' Handicap</th>
  <th id="LHandi1">13</th>
  <th id="LHandi2">3</th>
  <th id="LHandi3">15</th>
  <th id="LHandi4">11</th>
  <th id="LHandi5">9</th>
  <th id="LHandi6">5</th>
  <th id="LHandi7">1</th>
  <th id="LHandi8">7</th>
  <th id="LHandi9">17</th>
  <th id="OutLHandi">N/A</th>
  <th id="LHandi10">4</th>
  <th id="LHandi11">12</th>
  <th id="LHandi12">6</th>
  <th id="LHandi13">18</th>
  <th id="LHandi14">2</th>
  <th id="LHandi15">14</th>
  <th id="LHandi16">8</th>
  <th id="LHandi17">16</th>
  <th id="LHandi18">10</th>
  <th id="InLHandi">N/A</th>
  <th id="TotLHandi">N/A</th>
</tr>

</table>`
}



function makeTable(GolfingObject){
  newApiURL = GolfingObject.courseAPI;
  let playerCount = GolfingObject.playerCount;
  let golfAPI = new XMLHttpRequest();
  golfAPI.open('GET', newApiURL, true);
  golfAPI.send();
  golfAPI.onload = function () {
    if (golfAPI.status === 200) {
      let golfObj = JSON.parse(golfAPI.responseText).data;
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
        if(i <= 4){
          playerRowsEarly += makePlayerRow(numbnumb, numbword);
        } else if(i >= 5){
          playerRowsLater += makePlayerRow(numbnumb, numbword);
        }
      }
      golfTableObj.innerHTML = setTableHTML(playerRowsEarly, playerRowsLater);
      getTableData();
      setOutInTotal();

    }
  } 
}

let setColorData = function (golfObj, ObjEdit, holeNumb, ) {
 if (color === "Blue") {
  ObjEdit.innerText = golfObj.holes[holeNumb-1].teeBoxes[0].meters;
 } else if (color === "Gray") {
  ObjEdit.innerText = golfObj.holes[holeNumb-1].teeBoxes[1].meters;
 } 
}




let setOutInTotal = function(playerCount) {
  let outBlueValue = 0;
  outBlueValue = (Blue1.innerText * 1) + (Blue2.innerText * 1) + (Blue3.innerText * 1) + (Blue4.innerText * 1) + (Blue5.innerText * 1) + (Blue6.innerText * 1) + (Blue7.innerText * 1) + (Blue8.innerText * 1) + (Blue9.innerText * 1);
  OutBlue.innerText = outBlueValue;
  let inBlueValue = 0;
  inBlueValue = (Blue10.innerText * 1) + (Blue11.innerText * 1) + (Blue12.innerText * 1) + (Blue13.innerText * 1) + (Blue14.innerText * 1) + (Blue15.innerText * 1) + (Blue16.innerText * 1) + (Blue17.innerText * 1) + (Blue18.innerText * 1);
  InBlue.innerText = inBlueValue;
  TotBlue.innerText = inBlueValue + outBlueValue;

  let outGreenValue = 0;
  outGreenValue = (Green1.innerText * 1) + (Green2.innerText * 1) + (Green3.innerText * 1) + (Green4.innerText * 1) + (Green5.innerText * 1) + (Green6.innerText * 1) + (Green7.innerText * 1) + (Green8.innerText * 1) + (Green9.innerText * 1);
  OutGreen.innerText = outGreenValue;
  let inGreenValue = 0;
  inGreenValue = (Green10.innerText * 1) + (Green11.innerText * 1) + (Green12.innerText * 1) + (Green13.innerText * 1) + (Green14.innerText * 1) + (Green15.innerText * 1) + (Green16.innerText * 1) + (Green17.innerText * 1) + (Green18.innerText * 1);
  InGreen.innerText = inGreenValue;
  TotGreen.innerText = inGreenValue + outGreenValue;

  let outGrayValue = 0;
  outGrayValue = (Gray1.innerText * 1) + (Gray2.innerText * 1) + (Gray3.innerText * 1) + (Gray4.innerText * 1) + (Gray5.innerText * 1) + (Gray6.innerText * 1) + (Gray7.innerText * 1) + (Gray8.innerText * 1) + (Gray9.innerText * 1);
  OutGray.innerText = outGrayValue;
  let inGrayValue = 0;
  inGrayValue = (Gray10.innerText * 1) + (Gray11.innerText * 1) + (Gray12.innerText * 1) + (Gray13.innerText * 1) + (Gray14.innerText * 1) + (Gray15.innerText * 1) + (Gray16.innerText * 1) + (Gray17.innerText * 1) + (Gray18.innerText * 1);
  InGray.innerText = inGrayValue;
  TotGray.innerText = inGrayValue + outGrayValue;

  let outParValue = 0;
  outParValue = (Par1.innerText * 1) + (Par2.innerText * 1) + (Par3.innerText * 1) + (Par4.innerText * 1) + (Par5.innerText * 1) + (Par6.innerText * 1) + (Par7.innerText * 1) + (Par8.innerText * 1) + (Par9.innerText * 1);
  OutPar.innerText = outParValue;
  let inParValue = 0;
  inParValue = (Par10.innerText * 1) + (Par11.innerText * 1) + (Par12.innerText * 1) + (Par13.innerText * 1) + (Par14.innerText * 1) + (Par15.innerText * 1) + (Par16.innerText * 1) + (Par17.innerText * 1) + (Par18.innerText * 1);
  InPar.innerText = inParValue;
  TotPar.innerText = inParValue + outParValue;

  let outLGreenValue = 0;
  outLGreenValue = (LGreen1.innerText * 1) + (LGreen2.innerText * 1) + (LGreen3.innerText * 1) + (LGreen4.innerText * 1) + (LGreen5.innerText * 1) + (LGreen6.innerText * 1) + (LGreen7.innerText * 1) + (LGreen8.innerText * 1) + (LGreen9.innerText * 1);
  OutLGreen.innerText = outLGreenValue;
  let inLGreenValue = 0;
  inLGreenValue = (LGreen10.innerText * 1) + (LGreen11.innerText * 1) + (LGreen12.innerText * 1) + (LGreen13.innerText * 1) + (LGreen14.innerText * 1) + (LGreen15.innerText * 1) + (LGreen16.innerText * 1) + (LGreen17.innerText * 1) + (LGreen18.innerText * 1);
  InLGreen.innerText = inLGreenValue;
  TotLGreen.innerText = inLGreenValue + outLGreenValue;

  let outOneValue = 0;
  outOneValue = (One1.value * 1) + (One2.value * 1) + (One3.value * 1) + (One4.value * 1) + (One5.value * 1) + (One6.value * 1) + (One7.value * 1) + (One8.value * 1) + (One9.value * 1);
  OutOne.innerText = outOneValue;
  let inOneValue = 0;
  inOneValue = (One10.value * 1) + (One11.value * 1) + (One12.value * 1) + (One13.value * 1) + (One14.value * 1) + (One15.value * 1) + (One16.value * 1) + (One17.value * 1) + (One18.value * 1);
  InOne.innerText = inOneValue;
  TotOne.innerText = inOneValue + outOneValue;

  if(playerCount >= 2){
    let outTwoValue = 0;
    outTwoValue = (Two1.value * 1) + (Two2.value * 1) + (Two3.value * 1) + (Two4.value * 1) + (Two5.value * 1) + (Two6.value * 1) + (Two7.value * 1) + (Two8.value * 1) + (Two9.value * 1);
    OutTwo.innerText = outTwoValue;
    let inTwoValue = 0;
    inTwoValue = (Two10.value * 1) + (Two11.value * 1) + (Two12.value * 1) + (Two13.value * 1) + (Two14.value * 1) + (Two15.value * 1) + (Two16.value * 1) + (Two17.value * 1) + (Two18.value * 1);
    InTwo.innerText = inTwoValue;
    TotTwo.innerText = inTwoValue + outTwoValue;
  }   if(playerCount >= 3){
    let outThreeValue = 0;
    outThreeValue = (Three1.value * 1) + (Three2.value * 1) + (Three3.value * 1) + (Three4.value * 1) + (Three5.value * 1) + (Three6.value * 1) + (Three7.value * 1) + (Three8.value * 1) + (Three9.value * 1);
    OutThree.innerText = outThreeValue;
    let inThreeValue = 0;
    inThreeValue = (Three10.value * 1) + (Three11.value * 1) + (Three12.value * 1) + (Three13.value * 1) + (Three14.value * 1) + (Three15.value * 1) + (Three16.value * 1) + (Three17.value * 1) + (Three18.value * 1);
    InThree.innerText = inThreeValue;
    TotThree.innerText = inThreeValue + outThreeValue;
  }  if(playerCount >= 4){
    let outFourValue = 0;
    outFourValue = (Four1.value * 1) + (Four2.value * 1) + (Four3.value * 1) + (Four4.value * 1) + (Four5.value * 1) + (Four6.value * 1) + (Four7.value * 1) + (Four8.value * 1) + (Four9.value * 1);
    OutFour.innerText = outFourValue;
    let inFourValue = 0;
    inFourValue = (Four10.value * 1) + (Four11.value * 1) + (Four12.value * 1) + (Four13.value * 1) + (Four14.value * 1) + (Four15.value * 1) + (Four16.value * 1) + (Four17.value * 1) + (Four18.value * 1);
    InFour.innerText = inFourValue;
    TotFour.innerText = inFourValue + outFourValue;
  }  if(playerCount >= 5){
    let outFiveValue = 0;
    outFiveValue = (Five1.value * 1) + (Five2.value * 1) + (Five3.value * 1) + (Five4.value * 1) + (Five5.value * 1) + (Five6.value * 1) + (Five7.value * 1) + (Five8.value * 1) + (Five9.value * 1);
    OutFive.innerText = outFiveValue;
    let inFiveValue = 0;
    inFiveValue = (Five10.value * 1) + (Five11.value * 1) + (Five12.value * 1) + (Five13.value * 1) + (Five14.value * 1) + (Five15.value * 1) + (Five16.value * 1) + (Five17.value * 1) + (Five18.value * 1);
    InFive.innerText = inFiveValue;
    TotFive.innerText = inFiveValue + outFiveValue;
  }  if(playerCount >= 6){
    let outSixValue = 0;
    outSixValue = (Six1.value * 1) + (Six2.value * 1) + (Six3.value * 1) + (Six4.value * 1) + (Six5.value * 1) + (Six6.value * 1) + (Six7.value * 1) + (Six8.value * 1) + (Six9.value * 1);
    OutSix.innerText = outSixValue;
    let inSixValue = 0;
    inSixValue = (Six10.value * 1) + (Six11.value * 1) + (Six12.value * 1) + (Six13.value * 1) + (Six14.value * 1) + (Six15.value * 1) + (Six16.value * 1) + (Six17.value * 1) + (Six18.value * 1);
    InSix.innerText = inSixValue;
    TotSix.innerText = inSixValue + outSixValue;
  }  if(playerCount >= 7){
    let outSevenValue = 0;
    outSevenValue = (Seven1.value * 1) + (Seven2.value * 1) + (Seven3.value * 1) + (Seven4.value * 1) + (Seven5.value * 1) + (Seven6.value * 1) + (Seven7.value * 1) + (Seven8.value * 1) + (Seven9.value * 1);
    OutSeven.innerText = outSevenValue;
    let inSevenValue = 0;
    inSevenValue = (Seven10.value * 1) + (Seven11.value * 1) + (Seven12.value * 1) + (Seven13.value * 1) + (Seven14.value * 1) + (Seven15.value * 1) + (Seven16.value * 1) + (Seven17.value * 1) + (Seven18.value * 1);
    InSeven.innerText = inSevenValue;
    TotSeven.innerText = inSevenValue + outSevenValue;
  }  if(playerCount >= 8){
    let outEightValue = 0;
    outEightValue = (Eight1.value * 1) + (Eight2.value * 1) + (Eight3.value * 1) + (Eight4.value * 1) + (Eight5.value * 1) + (Eight6.value * 1) + (Eight7.value * 1) + (Eight8.value * 1) + (Eight9.value * 1);
    OutEight.innerText = outEightValue;
    let inEightValue = 0;
    inEightValue = (Eight10.value * 1) + (Eight11.value * 1) + (Eight12.value * 1) + (Eight13.value * 1) + (Eight14.value * 1) + (Eight15.value * 1) + (Eight16.value * 1) + (Eight17.value * 1) + (Eight18.value * 1);
    InEight.innerText = inEightValue;
    TotEight.innerText = inEightValue + outEightValue;
  }
}