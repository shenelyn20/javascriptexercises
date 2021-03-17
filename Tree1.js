/*


// only for odd buildTree(5)
   *
  ***
 *****


buildTree(4);

*/


/*

*
**
***
****
*****

*/
function makeLine(nRow){
    var tString = ""; 
	for(var j=0;j<=nRow;j++){
	    tString+="*";
	}
	console.log(tString);    
}

function buildTree(nInput){
	for(var i=0;i<nInput;i++){
        makeLine(i);
	}

}

buildTree(5);

/*


****
***
**
*

*/

function makeLine(nRow,nInput){
    var tString = ""; 
	for(var j=0;;j++){
	    tString+="*";
	}
	console.log(tString);    
}

function buildTree(nInput){
	for(var i=0;i<nInput;i++){
        makeLine(i,nInput);
	}

}

buildTree(5);


/*


   *
  **
 ***
****


*/

function makeLine(nRow,nInput){
    var tString = ""; 
	for(var j=0;(j+nRow)<=(nInput-1+nRow);j++){
	    if(j+nRow < nInput-1)
	        tString+=" ";
	   else
	        tString+='*';
	}
	console.log(tString);    
}

function buildTree(nInput){
	for(var i=0;i<nInput;i++){
        makeLine(i,nInput);
	}

}

buildTree(5);



/* 


****
 ***
  **
   *

*/


function makeLine(nRow,nInput){
    var tString = ""; 
	for(var j=0;(j+nRow)<=(nInput-1+nRow);j++){
	    if(nRow>j)
	        tString+=" ";
	   else
	        tString+='*';
	}
	console.log(tString);    
}

function buildTree(nInput){
	for(var i=0;i<nInput;i++){
        makeLine(i,nInput);
	}

}

buildTree(5);
