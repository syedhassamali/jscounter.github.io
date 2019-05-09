var outPut = 0;
function increase() {
    ++outPut;
    document.getElementById('result').innerHTML = outPut;
}
function decrease() {
    --outPut;
    document.getElementById('result').innerHTML = outPut;

}
function reset(){
    var outPut = 0;
    document.getElementById('result').innerHTML = outPut;
}
