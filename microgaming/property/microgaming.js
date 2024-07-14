var x = [
  0, 65, 803, 83, 1232, 1437, 850, 98, 407, 1375, 596, 1238, 427, 335, 919, 862, 238, 1304, 773, 206, 411, 199, 1099, 1233, 126, 215, 805, 944, 821, 872, 697, 1493, 267, 435, 323, 831, 19, 1339, 89, 1128, 690, 723, 856, 868, 399, 1016,
  1328, 938, 1044, 1026, 1196, 566, 236, 1071, 1153, 593, 1315, 190, 1256, 885, 1459, 606, 1244, 1118, 1008, 1293, 1494, 970, 442, 620, 917, 1434, 1495, 196, 937, 1113, 184, 1053, 1413, 1261, 143, 1485, 132, 1269, 67, 477, 1300, 1030, 317,
  580, 1292, 347, 1416, 269, 1179, 80, 918, 760, 907, 913, 1070, 646, 108, 1217, 366, 97, 139, 704, 1382, 1187, 2, 1356, 756, 424, 420, 717, 373, 565, 1427, 284, 1183, 893, 1127, 421, 68, 942, 1316, 1469, 811, 1387, 770, 1086, 73, 1487,
  1025, 1389, 294, 119, 890, 793, 851, 662, 982, 740, 1205, 45, 1005, 341, 640, 939, 1445, 1152, 664, 680, 81, 187, 752, 1248, 666, 1377, 867, 1289, 624, 604, 360, 191, 1419, 170, 508, 395, 964, 1012, 577, 177, 310, 1270, 1169, 27, 123,
  372, 549, 1225, 448, 1321, 343, 931, 1170, 1032, 947, 305, 826, 128, 1414, 1010, 518, 523, 74, 626, 902, 1499, 988, 459, 814, 402, 639, 712, 503, 1046, 797, 997, 165, 949, 749, 142, 1117, 377, 412, 1388, 1227, 1332, 229, 1067, 182, 1299,
  1161, 7, 149, 350, 1151, 904, 941, 881, 969, 882, 672, 1336, 1262, 1102, 122, 845, 259, 511, 1359, 1453, 1296, 1202, 977, 1496, 562, 120, 1146, 431, 794, 295, 784, 37, 352, 145, 1391, 33, 222, 1323, 1288, 1043, 296, 1022, 114, 962, 1405,
  202, 1063, 1357, 1428, 689, 1379, 1092, 65, 803, 83, 1232, 1437, 850, 98, 407, 1375, 596, 1238, 427,
];
for (let i = 1; i <= 20; i++) {
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

  if (i == 33 || i == 36 || i == 63 || i == 40 || i == 20 || i == 94 || i == 4 || i == 273 || i == 144 || i == 258 || i == 229 || i == 144 || i == 165 || i == 234 || i == 62) {
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

for (let i = 26; i <= 300; i++) {
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
  var xx = day * year * month * date;
  xx = Math.pow(xx, hour * min);
  xx = xx * x[i];
  // xx = xx * 2 - 1;
  // xx = xx/2;

  if (i == 33 || i == 36 || i == 63 || i == 40 || i == 20 || i == 94 || i == 4 || i == 273 || i == 144 || i == 258 || i == 229 || i == 144 || i == 165 || i == 234 || i == 62) {
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
