time = 0
test = 0
timeup = 1

totalTime = 200000
function update() {
  document.getElementById("totaltime").innerHTML = "Total time: " + Math.floor(totalTime / 6000) + "m " + Math.ceil((totalTime / 100) % 60) + "s"
  document.getElementById("number").innerHTML = timeToNumber(time)
  document.getElementById("timedisplay").innerHTML = "Ticks: " + time
  document.getElementById("timeupdisplay").innerHTML = "Ticks per second: " + timeup
  time += timeup
}

/*
Stages:
Stage 1: Beginning
Stage 2: Exponentiation
Stage 3: Tetration
Stage 4: More Hyperoperators
Stage 5: Mega-addition
Stage 6: End (for now)
*/

function timeToNumber(x) {
  //0 < x < 1e15
  //Stage 1
  if (x < 10888) {
    return Math.floor((1.001 + x / 5e6) ** x + 0.01 * x - 1).toLocaleString()
  }
  //1e15 < x < 1e100
  //Stage 2
  else if (x < 13166) {
    return "10<sup>" + ((1 + x / 7e6) ** (x - 10803) + 0.0006 * x + 7.3).toFixed(1) + "</sup>"
  }
  //1e100 < x < 1e1e6
  //Stage 2
  else if (x < 16627) {
    return "10<sup>" + (Math.floor((1 + x / 7e6) ** (x - 10803) + 0.0006 * x + 7.3)).toLocaleString() + "</sup>"
  }
  //1e1e6 < x < 10^^9
  //Stage 2
  else if (x < 52011) {
    return "10<sup>" + timeToNumber(x * 1.2 - 13769) + "</sup>"
  }
  //10^^9 < x < 10^^100
  //Stage 3
  else if (x < 55512) {
    return "10^^" + (1.002 ** (x - 52055) + 0.00008 * x + 3.85).toFixed(2)
  }
  //10^^100 < x < 10^^^4
  //Stage 3
  else if (x < 80120) {
    return "10^^" + timeToNumber((x - 53690) ** 1.1)
  }
  //10^^^4 < x < 10^^^100
  //Stage 4
  else if (x < 89783){
    return "10^^^" + (1.002 ** (x - 87500) + 0.00004 * x + 0.795).toFixed(3)
  }
  //10^^^100 < x < 10^^^^5
  //Stage 4
  else if (x < 119522) {
    return "10^^^" + timeToNumber((x - 88671) ** 1.13)
  }
  //10^^^^5 < x < 10^^^^100
  //Stage 4
  else if (x < 130277) {
    return "10^^^^" + (1.002 ** (x - 128000) + 0.00004 * x + 0.219).toFixed(3)
  }
  //10^^^^100 < x < 10{5}5
  //Stage 4
  else if (x < 163228) {
    return "10^^^^" + timeToNumber((x - 129292) ** 1.15)
  }
  //10{5}5 < x < 10{5}10
  //Stage 4
  else if (x < 166796) {
    return "10{5}" + (1.002 ** (x - 166000) + 0.00003 * x + 0.099).toFixed(3)
  }
  //10{5}10 < x < 10{{1}}4
  //Stage 4
  else if (x < 196785) {
    return "10{" + timeToNumber((x - 166600) ** 1.18) + "}10"
  }
  //10{{1}}4 < x < 10{{1}}100
  //Stage 5
  else if (x < 200000) {
    return "10{{1}}" + (1.002 ** (x - 196700) + 0.00003 * x + 0.3).toFixed(3)
  }
  //10{{1}}100 < x
  //Stage 6
  else {
    return "10{{1}}100"
  }
}

setInterval(update, 10)

function minsToTime(x,y) {
  time = x * 6000 + y * 100
}

function skipTicks(x) {
  time += x
}

function goBackTicks(x) {
  time -= x
  if (time < 0) {
    time = 0
  }
}

function speedUp(x) {
  timeup += x
}

function speedUpMult(x) {
  timeup *= x
}

function slowDown(x) {
  timeup -= x
}

function slowDownDivide(x) {
  timeup /= x
}

function goToStart() {
  time = 0
}

function goToEnd() {
  time = totalTime
}