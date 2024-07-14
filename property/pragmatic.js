var x = [
  609, 1458, 1519, 2687, 826, 62, 722, 2425, 2120, 1089, 1708, 588, 786, 2378, 2765, 329, 1388, 1045, 1847, 2500, 1761, 2383, 271, 733, 2884, 2913, 1569, 1436, 1448, 1987, 410, 1585, 99, 1234, 572, 66, 1290, 2189, 2870, 369, 537, 1532,
  1570, 2125, 2947, 762, 580, 2567, 1041, 1573, 2783, 2608, 302, 1187, 2977, 2602, 890, 2816, 2378, 1452, 748, 757, 625, 2089, 1478, 563, 784, 539, 2092, 1240, 826, 2211, 837, 2673, 2233, 645, 1934, 105, 2036, 1554, 579, 1833, 2425, 1102,
  2391, 2913, 2143, 1044, 1461, 1997, 2424, 1934, 904, 2195, 2069, 2369, 1672, 1620, 2195, 1552, 2454, 578, 2164, 2416, 1051, 2449, 1009, 2940, 332, 848, 1310, 2882, 2952, 18, 550, 1773, 700, 1968, 1041, 1364, 1271, 865, 2211, 1707, 1866,
  2869, 1535, 2705, 2963, 918, 1316, 82, 34, 1352, 2622, 1662, 2490, 739, 2752, 2866, 1692, 1919, 1041, 821, 537, 2263, 1245, 317, 175, 16, 2638, 2155, 2110, 2468, 1713, 1428, 859, 834, 1510, 361, 285, 2681, 811, 242, 1758, 2741, 400, 615,
  1659, 296, 1864, 1647, 376, 501, 566, 2092, 294, 2809, 1142, 262, 958, 2979, 830, 151, 1659, 29, 1756, 351, 2075, 1171, 1642, 1818, 158, 2468, 2816, 2670, 291, 2407, 88, 153, 646, 280, 2824, 2803, 942, 106, 2611, 1399, 1839, 839, 953,
  1896, 235, 2566, 1673, 1074, 414, 1645, 1708, 2798, 1210, 287, 1275, 2234, 1760, 783, 1083, 2912, 800, 1110, 2976, 1838, 427, 2490, 2889, 2222, 2455, 199, 834, 2662, 1371, 1178, 2935, 2947, 2388, 516, 1688, 1858, 295, 2587, 2479, 2456,
  695, 2543, 2914, 2522, 1313, 1004, 605, 2039, 423, 1563, 1048, 1212, 1794, 2134, 625, 856, 1715, 340, 2891, 1018, 444, 2753, 1887, 903, 2842, 50, 785, 2889, 37, 1232, 63, 1540, 932, 1091, 2526, 1507, 2235, 2912, 526, 2490, 2798, 1270,
  1678, 269, 730, 61, 1450, 1025,
];
for (let i = 1; i <= 300; i++) {
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

  if (i == 6 || i == 8 || i == 79 || i == 104 || i == 4 || i == 5 || i == 35 || i == 77 || i == 1 || i == 18 || i == 96) {
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
