var x = [
  0, 550, 145, 113, 907, 326, 525, 346, 488, 909, 512, 388, 916, 548, 912, 793, 855, 904, 106, 121, 644, 802, 800, 654, 299, 518, 33, 427, 931, 255, 406, 276, 259, 261, 156, 928, 181, 746, 564, 71, 924, 878, 10, 838, 127, 485, 245, 991,
  513, 745, 597, 424, 116, 287, 74, 368, 460, 172, 131, 772, 959, 867, 218, 653, 24, 12, 453, 631, 790, 612, 325, 222, 698, 537, 692, 811, 718, 875, 372, 826, 998, 672, 779, 666, 730, 444, 462, 707, 869, 241, 507, 834, 179, 309, 625, 100,
  206, 699, 273, 552, 461, 566, 795, 423, 734, 4, 791, 971, 354, 19, 940, 150, 491, 236, 265, 679, 849, 58, 956, 329, 889, 777, 798, 899, 677, 583, 784, 436, 152, 370, 754, 701, 609, 350, 831, 178, 803, 90, 694, 973, 978, 553, 846, 589,
  429, 247, 810, 35, 278, 622, 987, 232, 56, 936, 616, 961, 996, 269, 585, 576, 482, 219, 825, 91, 205, 393, 2, 651, 428, 868, 712, 629, 581, 445, 920, 765, 342, 322, 560, 848, 711, 555, 582, 227, 173, 80, 14, 399, 643, 293, 397, 563, 69,
  778, 416, 418, 371, 284, 529, 830, 334,
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

  if (i == 39 || i == 92 || i == 85 || i == 52 || i == 31 || i == 97) {
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
