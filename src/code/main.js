const apiUrl = "https://golf-courses-api.herokuapp.com/courses";
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



//#region Out, In, Total
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
outOneValue = (One1.innerText * 1) + (One2.innerText * 1) + (One3.innerText * 1) + (One4.innerText * 1) + (One5.innerText * 1) + (One6.innerText * 1) + (One7.innerText * 1) + (One8.innerText * 1) + (One9.innerText * 1);
OutOne.innerText = outOneValue;
let inOneValue = 0;
inOneValue = (One10.innerText * 1) + (One11.innerText * 1) + (One12.innerText * 1) + (One13.innerText * 1) + (One14.innerText * 1) + (One15.innerText * 1) + (One16.innerText * 1) + (One17.innerText * 1) + (One18.innerText * 1);
InOne.innerText = inOneValue;
TotOne.innerText = inOneValue + outOneValue;

let outTwoValue = 0;
outTwoValue = (Two1.innerText * 1) + (Two2.innerText * 1) + (Two3.innerText * 1) + (Two4.innerText * 1) + (Two5.innerText * 1) + (Two6.innerText * 1) + (Two7.innerText * 1) + (Two8.innerText * 1) + (Two9.innerText * 1);
OutTwo.innerText = outTwoValue;
let inTwoValue = 0;
inTwoValue = (Two10.innerText * 1) + (Two11.innerText * 1) + (Two12.innerText * 1) + (Two13.innerText * 1) + (Two14.innerText * 1) + (Two15.innerText * 1) + (Two16.innerText * 1) + (Two17.innerText * 1) + (Two18.innerText * 1);
InTwo.innerText = inTwoValue;
TotTwo.innerText = inTwoValue + outTwoValue;

let outThreeValue = 0;
outThreeValue = (Three1.innerText * 1) + (Three2.innerText * 1) + (Three3.innerText * 1) + (Three4.innerText * 1) + (Three5.innerText * 1) + (Three6.innerText * 1) + (Three7.innerText * 1) + (Three8.innerText * 1) + (Three9.innerText * 1);
OutThree.innerText = outThreeValue;
let inThreeValue = 0;
inThreeValue = (Three10.innerText * 1) + (Three11.innerText * 1) + (Three12.innerText * 1) + (Three13.innerText * 1) + (Three14.innerText * 1) + (Three15.innerText * 1) + (Three16.innerText * 1) + (Three17.innerText * 1) + (Three18.innerText * 1);
InThree.innerText = inThreeValue;
TotThree.innerText = inThreeValue + outThreeValue;

let outFourValue = 0;
outFourValue = (Four1.innerText * 1) + (Four2.innerText * 1) + (Four3.innerText * 1) + (Four4.innerText * 1) + (Four5.innerText * 1) + (Four6.innerText * 1) + (Four7.innerText * 1) + (Four8.innerText * 1) + (Four9.innerText * 1);
OutFour.innerText = outFourValue;
let inFourValue = 0;
inFourValue = (Four10.innerText * 1) + (Four11.innerText * 1) + (Four12.innerText * 1) + (Four13.innerText * 1) + (Four14.innerText * 1) + (Four15.innerText * 1) + (Four16.innerText * 1) + (Four17.innerText * 1) + (Four18.innerText * 1);
InFour.innerText = inFourValue;
TotFour.innerText = inFourValue + outFourValue;

let outFiveValue = 0;
outFiveValue = (Five1.innerText * 1) + (Five2.innerText * 1) + (Five3.innerText * 1) + (Five4.innerText * 1) + (Five5.innerText * 1) + (Five6.innerText * 1) + (Five7.innerText * 1) + (Five8.innerText * 1) + (Five9.innerText * 1);
OutFive.innerText = outFiveValue;
let inFiveValue = 0;
inFiveValue = (Five10.innerText * 1) + (Five11.innerText * 1) + (Five12.innerText * 1) + (Five13.innerText * 1) + (Five14.innerText * 1) + (Five15.innerText * 1) + (Five16.innerText * 1) + (Five17.innerText * 1) + (Five18.innerText * 1);
InFive.innerText = inFiveValue;
TotFive.innerText = inFiveValue + outFiveValue;

let outSixValue = 0;
outSixValue = (Six1.innerText * 1) + (Six2.innerText * 1) + (Six3.innerText * 1) + (Six4.innerText * 1) + (Six5.innerText * 1) + (Six6.innerText * 1) + (Six7.innerText * 1) + (Six8.innerText * 1) + (Six9.innerText * 1);
OutSix.innerText = outSixValue;
let inSixValue = 0;
inSixValue = (Six10.innerText * 1) + (Six11.innerText * 1) + (Six12.innerText * 1) + (Six13.innerText * 1) + (Six14.innerText * 1) + (Six15.innerText * 1) + (Six16.innerText * 1) + (Six17.innerText * 1) + (Six18.innerText * 1);
InSix.innerText = inSixValue;
TotSix.innerText = inSixValue + outSixValue;

let outSevenValue = 0;
outSevenValue = (Seven1.innerText * 1) + (Seven2.innerText * 1) + (Seven3.innerText * 1) + (Seven4.innerText * 1) + (Seven5.innerText * 1) + (Seven6.innerText * 1) + (Seven7.innerText * 1) + (Seven8.innerText * 1) + (Seven9.innerText * 1);
OutSeven.innerText = outSevenValue;
let inSevenValue = 0;
inSevenValue = (Seven10.innerText * 1) + (Seven11.innerText * 1) + (Seven12.innerText * 1) + (Seven13.innerText * 1) + (Seven14.innerText * 1) + (Seven15.innerText * 1) + (Seven16.innerText * 1) + (Seven17.innerText * 1) + (Seven18.innerText * 1);
InSeven.innerText = inSevenValue;
TotSeven.innerText = inSevenValue + outSevenValue;

let outEightValue = 0;
outEightValue = (Eight1.innerText * 1) + (Eight2.innerText * 1) + (Eight3.innerText * 1) + (Eight4.innerText * 1) + (Eight5.innerText * 1) + (Eight6.innerText * 1) + (Eight7.innerText * 1) + (Eight8.innerText * 1) + (Eight9.innerText * 1);
OutEight.innerText = outEightValue;
let inEightValue = 0;
inEightValue = (Eight10.innerText * 1) + (Eight11.innerText * 1) + (Eight12.innerText * 1) + (Eight13.innerText * 1) + (Eight14.innerText * 1) + (Eight15.innerText * 1) + (Eight16.innerText * 1) + (Eight17.innerText * 1) + (Eight18.innerText * 1);
InEight.innerText = inEightValue;
TotEight.innerText = inEightValue + outEightValue;
//#endregion