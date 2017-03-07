
function findCyclicDependencies(definitions, identifier) {
  var stack = [];

  // Internal search function.
  var internalSearch = function(currentIdentifier) {

    // If we have visited this node, return whether or not it is the one we
    // are looking for.
    if (stack.indexOf(currentIdentifier) !== -1) {
      return currentIdentifier === identifier;
    }

    stack.push(currentIdentifier);

    // Check all of the child nodes to see if they contain the node we are
    // looking for.
    var found = definitions[currentIdentifier].some(internalSearch);

    // Remove the current node from the stack if it's children do not
    // contain the node we are looking for.
    if (!found) {
      stack.splice(stack.indexOf(currentIdentifier), 1);
    }

    return found;
  };

  // If there isn't a cyclic dependency then we return an empty array,
  // otherwise we return the stack.
  return internalSearch(identifier) ? stack.concat(identifier) : [];
}




function check(identifier, definitions)
{

    var result = findCyclicDependencies(definitions, identifier)

    //if zero, no cycle
    return result.length != 0;

}



var operators = ["+","-","*","/"];
var split_regex = /[\s,\+\-\*\/]+/;
 

//explode value, split value of element in single sub elements

function explode(val)
{
  /*????
   var elements = val.split(split_regex);
   var res = [];
    for(k=0;i<elements.length;k++)
    {
      if (elements[k]!="")
        res.push(elements[k]);
    }
    return res;
    */
    return val.split(split_regex);
}


function main()
{
  //create the list of the formulas
  var identifiersList = document.getElementsByClassName("identifier");
  var definitionsList = document.getElementsByClassName("definitions");
 

  if (identifiersList.length  == definitionsList.length)
  {
     
      var definitions = {}, l = [];
      

      for (i=0;i<definitionsList.length;i++)
    {
        identifier = identifiersList[i].value;
        l = explode(definitionsList[i].value);

        for (k = 0;k < l.length;k++)
          {
            if (l[k]=="")           
               l.splice(k, 1);        
          }
        
        definitions[identifier] = l;
        
         
    }
    console.log("checking " + identifiersList[0].value + " : " + definitions );

    var hasCycle;

    try {
        
        hasCycle = check(identifiersList[0].value,definitions);
        if (!hasCycle)
        {      
          checkResult = "OK";
        }  
        else 
        {      
          checkResult = "CYCLE";
        }
    }
    catch(err) {
         
         checkResult = "INPUT ERROR";
    }

  
    updateResult(checkResult);
    
  }

}

function updateResult(checkResult)
{
  console.log(checkResult);
  document.getElementById("checkResult").value = checkResult ;
}

 