
// method to calculate the force of gravity given the mass in kilograms and the radius of the body in meters. 
function gravity(mass, radius) {
  const gravitationalConstant = 6.67408e-11;
  const gravity = gravitationalConstant * mass / (radius * radius);
  return gravity;
}

const earthGravity = gravity(5.972e24, 6.371e6);
const marsGravity = gravity(6.39e23, 3.3896e6);
console.log(compareGravity(earthGravity, marsGravity));
// console.log(earthGravity);
// console.log(marsGravity);

// method to calculate what % of gravity another planete possesses. First mass will be the comparator; second the comparison. So, to work out what % of earth gravity you can expect on Mars, pass Earth into the first param. 
function compareGravity(baseGravity, comparator) {
  return comparator / baseGravity;
}

// console.log(`Mars has ${(compareGravity(earthGravity, marsGravity) * 100).toFixed(2)}% of Earth's Gravity.`)

// method 3: calculate relative weight of an object on another body: 

function calculateWeight(weight, baseGravity, comparator) {
  // step one: work out the item's mass at base gravity. 
  // where weight is KG
  // and I, like everyone else, do NOT think in metric, so we're going to convert into lbs for input/output.

  // could also have done this by using compareGravity and multiplying the original weight by the comparator, but whatever. That would have been the clever way to do it. 
  const mass = (weight * 0.453592) / baseGravity;
  const newWeight = (mass * comparator) * 2.20462;
  return newWeight.toFixed(2);
}

module.exports = {
  calculateGravity: gravity
}