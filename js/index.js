
let display = (val) => {
    document.getElementById("result").value += val;

}
//calculation
const calculate = () => {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;

}

const del = () => {
    document.getElementById("result").value = "";
    alert("Deleted succesfully!Enter new numbers")
    
}