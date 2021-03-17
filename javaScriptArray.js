/*TO-DO-LIST JAVASCRIPT ARRAY*/


/*Global Initialization of Array*/
var toDos= [];


/*Display Choices for to Do*/
function displayOptions(){
	console.log("1. Display TO-DO-LIST\n2. Add TO-DO-LIST\n3. Change TO-DO-LIST\n4. Delete TO-DO-LIST\n5. Exit\n");
	/*Prompt to get option number of user*/
	var valOption=prompt("Please Enter Option Number(e.g. 1): ");
	getInputVal(valOption);
}

/*Display list of To Dos in an Array*/
function displayToDos(){
	console.log("My To-Dos:\n");
	for (var i=0;i<toDos.length;i++){
		/*index added by one for readability of user since normal user is not familiar that list/array starts with index 0*/
		console.log("[" +(i+1)+ "]", toDos[i]);
	}
}

/*Add new todo using push method*/
function addToDos(newToDo){
	toDos.push(newToDo);
}

/*Change todo by assigning new todo value to position specified by user*/
function changeToDos(nPosition, newToDo){
	/*Check if there's existing to do to be changed*/
	for(var i=nPosition-1;i>=0;i--){
		if(toDos[i]=="" || toDos[i]==null || toDos[i]==undefined){
			console.log("NO EXISTING TO -DO TO BE CHANGED!!!");
			return;
		}
	}	
	/*position subtracted by one since display starts with 1 and not 0 for user readability*/
	toDos[nPosition-1] = newToDo;
}

/*Delete todo specified by user*/
function deleteToDos(deleteToDo){
	/*position subtracted by one since display starts with 1 and not 0 for user readability*/
	toDos.splice((deleteToDo-1), 1);
}

/*Function that calls specified function chosen by user */
function getInputVal(iOption){
	if (iOption == 1) displayToDos();
	else if (iOption == 2){
		/*getting vallue of added todo using prompt*/
		var addNewToDo=prompt("ADD To-Do: ");
		if(addNewToDo == "") console.log("NO NEW TO-DO LIST");
		else addToDos(addNewToDo);
	}else if(iOption == 3){
		var changeToDoPos=prompt("Enter number of to-do you want to CHANGE: ");
		var changeToDoVal=prompt("Enter New To-Do: ");
		changeToDos(changeToDoPos, changeToDoVal);
	}else if (iOption == 4){
		var deleteToDo=prompt("Enter number of To-Do to be DELETED: ");
		deleteToDos(deleteToDo);
	}else if (iOption == 5){
		return;
	}else console.log("INCORRECT VALUE");

	displayToDos();
	displayOptions();
}

displayOptions();
