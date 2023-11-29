
var valueArray = [];
        function addToArray() {
            for (var i = 1; i <= 13; i++) {
                var inputElement = document.getElementById("c" + i);
                var textValue = inputElement.value.trim();
                
                if (textValue !== "") {
                    var elementId= inputElement.id
                    valueArray.push(elementId +"**"+textValue);
                    inputElement.value = "";
                }   
            }
                var selectElement = document.getElementById("selectBox")
                var selectValue = selectElement.value
                valueArray.push(selectValue)
                selectElement.value="";
                
                var comments = valueArray.join("||");
            document.getElementById("commentValues").textContent = valueArray.join("|| ");
        }
  



        " window.open('wpgPrtPrintlayoutall.asp?PrintLayoutName=tesingRPTt&PositionForTableName=WorkingDay&requestId=" & reqID & "&update=yes&valueArray=' + valueArray);"
