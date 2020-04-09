/* get minimum and maximum numbers */
function minMax(intArray){
	let resultArray = []
	let lower= intArray[0];
	let largest= intArray[0];
	for (let i=0; i<=largest;i++){
    if (intArray[i]>largest) {
         largest=intArray[i];
    }else if(intArray[i]<lower){
		lower=intArray[i];
		//outputArray.push(lower)
	}
}
resultArray.push(lower)
resultArray.push(largest)
	return resultArray;
}



/* get filtered array between string and number */
function filterArray(combineArray){
	let resultArray = []
	for(let i=0; i<combineArray.length; i++){ 
		if(typeof combineArray[i] !== 'number') continue; 
		//console.log(combineArray[i])
		resultArray.push(combineArray[i])
	}
	return resultArray
}



/* get only student name from an array of object */
function getStudentNames(studentArray){
	var studentNameList = []
	var nameArray = studentArray.map(function (el) { return el.name; });
	studentNameList.push(nameArray)
	return studentNameList;
}



/* return true if object contain the specified key  */
function hasKey(obj, checkKey){
    var isKeyFound = false;
    for (let [key, value] of Object.entries(obj)) {
        console.log(key);
        if(key === checkKey){
            return true;
        }
    }
    return isKeyFound;
}

/* get user full name  */
function fullName(e){
	let firstName, lastName, fullName;
	firstName = document.getElementById('firstName').value;
	lastName = document.getElementById('lastName').value;
	fullName = firstName + ' ' + lastName;
	//fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
	function makeUpperCase(str) {
	   var splitStr = str.toLowerCase().split(' ');
	   for (var i = 0; i < splitStr.length; i++) {
		   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	   }
	   return splitStr.join(' '); 
	}
	//titleCase(fullName)
	document.getElementById('fullName').innerHTML = makeUpperCase(fullName);
}




