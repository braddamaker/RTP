var x = [
  0, 429, 504, 986, 470, 736, 441, 660, 539, 670, 438, 102, 44, 605, 996, 85, 449, 396, 135, 407, 611, 886, 368, 197, 897, 341, 651, 767, 364, 752, 803, 518, 838, 369, 591, 204, 279, 630, 982, 367, 934, 222, 682, 957, 909, 618, 904, 400,
  963, 777, 522, 398, 229, 864, 792, 321, 638, 205, 841, 972, 330, 734, 545, 654, 428, 875, 735, 251, 787, 691, 730, 664, 110, 332, 1, 308, 346, 665, 606, 566, 965, 220, 289, 516, 809, 288, 93, 581, 335, 190, 69, 425, 656, 40, 41, 274, 27,
  946, 706, 187, 551, 709, 435, 804, 650, 519, 770, 488, 255, 568, 357, 183, 892, 487, 750, 529, 868, 639, 318, 226, 640, 333, 690, 101, 191, 234, 51, 409, 976, 28, 130, 268, 452, 817, 652, 975, 885, 246, 940, 302, 584, 808, 863, 178, 115,
  77, 696, 657, 244, 337, 381, 105, 336, 760, 47, 937, 314, 943, 776, 401, 733, 155, 668, 434, 123, 416, 203, 173, 761, 79, 510, 165, 442, 329, 11, 880, 380, 198, 356, 525, 92, 458, 949, 901, 578, 57, 932, 874, 461, 857, 106, 782, 592, 790,
  295, 145, 446, 786, 824, 230, 137,
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

  if (i == 112 || i == 36 || i == 117 || i == 143 || i == 55 || i == 137 || i == 85) {
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
