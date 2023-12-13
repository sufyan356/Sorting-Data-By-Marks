var icon = document.getElementsByClassName("sortingIcon")[0];
icon.addEventListener("click" , bothMarksAndNamesSortingByAscendingOrder);

function sortByMArksByAscendingOrder(){
    
    var tdSort = document.getElementsByClassName("tdsort");
   
    var newArray = [];
    for(var i = 0 ; i<tdSort.length; i++){
       newArray.push(tdSort[i].textContent);
    }

    var z = newArray.sort(function(a , b){
        return a - b;
    });
        
    for(var i = 0 ; i<tdSort.length; i++){
        tdSort[i].innerHTML = z[i];
     }
}

function sortByNamesByAscendingOrder(){
    
    var sortingNames = document.getElementsByClassName("sortingNames");
   
    var newArray = [];
    for(var i = 0 ; i<sortingNames.length; i++){
       newArray.push(sortingNames[i].textContent);
    }
    var q = newArray.sort();
    // console.log(q);
   
    for(var i = 0 ; i<sortingNames.length; i++){
        sortingNames[i].innerHTML = q[i];
     }
}

function bothMarksAndNamesSortingByAscendingOrder(){
    sortByMArksByAscendingOrder();
    sortByNamesByAscendingOrder();
}




var descendingIcon = document.getElementsByClassName("sortingIconDescending")[0];
descendingIcon.addEventListener("click" , bothMarksAndNamesSortingByDescendingOrder);

function sortByMArksByDescendingOrder(){
    var tdSort = document.getElementsByClassName("tdsort");
    var newArray = [];
    for(var i = 0 ; i<tdSort.length; i++){
       newArray.push(tdSort[i].textContent);
    }

    var z = newArray.sort(function(a , b){
        return b - a;
    });
        
    for(var i = 0 ; i<tdSort.length; i++){
        tdSort[i].innerHTML = z[i];
     }

}

function sortByNameByDescendingOrder(){
    var sortingNames = document.getElementsByClassName("sortingNames");
   
    var newArray = [];
    for(var i = 0 ; i<sortingNames.length; i++){
       newArray.push(sortingNames[i].textContent);
    }
    var z = newArray.sort(function(a , b){
        return b.localeCompare (a);
    });
     
    for(var i = 0 ; i<sortingNames.length; i++){
        sortingNames[i].innerHTML = z[i];
     }

}


function bothMarksAndNamesSortingByDescendingOrder(){
    sortByMArksByDescendingOrder();
    sortByNameByDescendingOrder();
}



var changeColor = document.getElementById("changeColor");
var body = document.getElementById("body");

changeColor.addEventListener("click" , changeThemeColor);
 function changeThemeColor(){
    body.classList.toggle("changeColor");
    
    
    var tr = document.querySelectorAll("tr");
    tr.forEach(function(ele){
        ele.classList.toggle("whiteColorClass");
    });
    
    
 }


