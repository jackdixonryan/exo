// optional params s = seconds to completion
function calcJump(d, g, s = 1) {
  // where d = distance in meters .. g is gravity
  const earthg = 9.8;
  const percentG = g / earthg;
  const newHeight = d / percentG;
  const newHangTime = s / percentG; // ? maybe
  return {
    height: newHeight,
    duration: newHangTime,
  }
}

console.log(calcJump(0.45, .27));