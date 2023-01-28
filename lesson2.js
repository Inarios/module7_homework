const string = "property1";
const object = {
    property1: "lalala",
    property2: "hohoho"
}

function checkInsideElem(str, obj){
    return (str in obj)
}

checkInsideElem(string, object)