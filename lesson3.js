function newObj(){
    const emptyObj = Object.create(null);
    console.log(emptyObj.__proto__)
}
newObj()