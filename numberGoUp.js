time = 0
test = 0
timeup = 1

totalTime = 169000
document.getElementById("totaltime").innerHTML = "Total time: " + Math.floor(totalTime / 6000) + "m " + Math.ceil((totalTime / 100) % 60) + "s"

function update() {
  document.getElementById("number").innerHTML = timeToNumber(time)
  time += timeup
}

function timeToNumber(x) {
  //0 < x < 1e15
  if (x < 10888) {
    return Math.floor((1.001 + x / 5e6) ** x + 0.01 * x - 1).toLocaleString()
  }
  //1e15 < x < 1e100
  else if (x < 13166) {
    return "10<sup>" + ((1 + x / 7e6) ** (x - 10803) + 0.0006 * x + 7.3).toFixed(1)
  }
  //1e100 < x < 1e1e6
  else if (x < 16627) {
    return "10<sup>" + (Math.floor((1 + x / 7e6) ** (x - 10803) + 0.0006 * x + 7.3)).toLocaleString()
  }
  //1e1e6 < x < 10^^9
  else if (x < 52011) {
    return "10<sup>" + timeToNumber(x * 1.2 - 13769)
  }
  //10^^9 < x < 10^^100
  else if (x < 55512) {
    return "10^^" + (1.002 ** (x - 52055) + 0.00008 * x + 3.85).toFixed(2)
  }
  //10^^100 < x < 10^^^4
  else if (x < 80120) {
    return "10^^" + timeToNumber((x - 53690) ** 1.1)
  }
  //10^^^4 < x < 10^^^100
  else if (x < 89783){
    return "10^^^" + (1.002 ** (x - 87500) + 0.00004 * x + 0.795).toFixed(3)
  }
  //10^^^100 < x < 10^^^^5
  else if (x < 119522) {
    return "10^^^" + timeToNumber((x - 88671) ** 1.13)
  }
  //10^^^^5 < x < 10^^^^100
  else if (x < 130277) {
    return "10^^^^" + (1.002 ** (x - 128000) + 0.00004 * x + 0.219).toFixed(3)
  }
  //10^^^^100 < x < 10{5}5
  else if (x < 163228) {
    return "10^^^^" + timeToNumber((x - 129292) ** 1.15)
  }
  //10{5}5 < x < 10{5}10
  else if (x < 169000) {
    return "10{5}" + (1.002 ** (x - 165000) + 0.00003 * x + 1).toFixed(3)
  }
  //10{5}10 < x
  else {
    return "10{5}10"
  }
}

setInterval(update, 10)

function minsToTime(x,y) {
  time = x * 6000 + y * 100
}