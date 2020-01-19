function wakeDog(dogName,dogBreed){
	return(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName,dogBreed){
	return(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName,dogBreed){
	return(`Walk ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName,dogBreed){
	return(`Throw ${dogName} the ${dogBreed}`);
}

function walkHome(dogName,dogBreed){
	return(`Walk ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName,dogBreed){
	return (`Unleash ${dogName} the ${dogBreed}`);

}


let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName,dogBreed){
	let arr = [];
	for (let i=0; i <routine.length; i++){
		
		let dg = routine[i](dogName,dogBreed);
			
		arr.push(dg)	
	} return arr
}
