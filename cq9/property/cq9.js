var x = [
  0, 33, 1119, 1474, 585, 1062, 714, 1038, 1241, 1091, 218, 403, 132, 1302, 1027, 1108, 129, 1462, 210, 527, 1236, 196, 1096, 558, 513, 992, 1082, 671, 1279, 665, 1057, 627, 710, 1316, 641, 1250, 324, 88, 448, 753, 1398, 443, 818, 173, 54,
  1187, 1205, 441, 144, 1242, 147, 1166, 1042, 212, 1023, 1424, 1392, 705, 260, 929, 1030, 186, 1115, 957, 1216, 134, 881, 810, 4, 911, 512, 1010, 357, 754, 1285, 1325, 1246, 1045, 79, 674, 851, 430, 873, 24, 1284, 200, 588, 764, 1168, 711,
  17, 1121, 1476, 307, 1395, 32, 1192, 1028, 1437, 310, 1407, 1377, 655, 1374, 1079, 323, 803, 347, 1397, 56, 1458, 538, 943, 906, 546, 1153, 1422, 847, 736, 795, 1304, 1230, 170, 804, 773, 1133, 800, 717, 971, 895, 1255, 118, 1239, 955,
  277, 1331, 574, 1281, 742, 214, 857, 320, 423, 1479, 1151, 1468, 114, 244, 749, 962, 412, 263, 151, 1015, 161, 460, 575, 115, 690, 46, 191, 442, 1237, 799, 1007, 478, 40, 571, 369, 688, 909, 1401, 1464, 1311, 841, 856, 796, 1097, 1149,
  1269, 832, 566, 997, 288, 171, 1432, 837, 1089, 502, 828, 1208, 563, 242, 699, 1011, 300, 1352, 1414, 771, 327, 358,
];
for (let i = 1; i <= 200; i++) {
  const d = new Date();
  var date = d.getUTCDate();
  var day = d.getUTCDay() + 1;
  var year = d.getUTCFullYear();
  var month = d.getUTCMonth() + 1;
  var hour = d.getUTCHours();
  var min = d.getMinutes();
  if (min < 30) {
    min = 1;
  } else {
    min = 2;
  }
  var xx = day + year * month * date;
  xx = Math.pow(xx, hour * min);
  xx = xx * x[i];
  // xx = xx * 2 - 1;
  // xx = xx/2;

  if (i == 135 || i == 89 || i == 110 || i == 63 || i == 52 || i == 126) {
    xx = xx % 27;
    xx += 65;
  } else {
    xx = xx % 83;
    xx += 8;
  }
  const as = "percent-bar-" + i;
  const asd = "percent-txt-" + i;
  var percentTxt = document.getElementById("percent-txt-" + i);
  var bar = document.getElementById("percent-bar-" + i);
  const bartext = document.getElementById("card-title" + i);
  percentTxt.innerHTML = xx + "%";
  $("#percent-bar-" + i)
    .attr("aria-valuenow", xx)
    .css("width", xx + "%");
  if (xx < 30) {
    bar.classList.add("red");
  } else if (xx > 70) {
    bar.classList.add("green");
  } else {
    bar.classList.add("yellow");
  }
}
