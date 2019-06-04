// Write your solution in this file!
const driver = { 
	key: "value" 
};
 
function updateDriverWithKeyAndValue(driver, key, value) {
 const newDriver = { ...driver };
 
  newDriver[key] = value;
 
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;

	return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = { ...driver };
 
  newDriver[key] = undefined
 
  return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
	driver[key] = undefined;
	return driver;
	}