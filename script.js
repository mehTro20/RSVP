
const displayOptions = () => {
    let disp = document.getElementById("foo");
    
    return (disp.style.display === "none") ?  disp.style.display = "block"
    : disp.style.display = "block";
};

const hideOptions = () => {
    let hide = document.getElementById("foo");
    
    return (hide.style.display === "none") ?  hide.style.display = "none"
    : hide.style.display = "none";
};

let form = "";
let fname = "";
let lname = "";
let email = "";
let dob = "";
let contacts = ""; 
let host = "";
let vegan = "";
let fcombo = "";
var checkedValues = [];

const mySubmit = (event) => {
    
    event.preventDefault();
    form = document.getElementById("form")
    
    fname = document.getElementById("name").value;
    lname = document.getElementById("surname").value;
    email = document.getElementById("email").value;
    dob = document.getElementById("DOB").value;
    contacts = document.getElementById("phone-numbers").value;
    host = document.getElementById("dropdown").value;
    vegan = radioValues();
    fcombo = test(event);
    if (fname === "" || lname === "" || email === ""|| dob === ""|| contacts === "") {
          return alert('Fill up maan!')
    } else {
        myDisplay()
    }
    
};    

const myDisplay = () => {
    

    if (document.getElementById("yes").checked){
    document.getElementById("list").innerHTML += `<ul>
    
    <li>Name: ${fname}</li>
    <li>Surname: ${lname}</li>
    <li>Email: ${email}</li>
    <li>Birthday: ${dob}</li>
    <li>Numbers: ${contacts}</li>
    <li>Host: ${host}</li>
    <li>Vegan?: ${vegan}</li> 
    <li>Food: ${fcombo}</li>
    </ul>`;   
    } else {
        document.getElementById("list").innerHTML += `<ul>
    
    <li>Name: ${fname}</li>
    <li>Surname: ${lname}</li>
    <li>Email: ${email}</li>
    <li>Birthday: ${dob}</li>
    <li>Numbers: ${contacts}</li>
    <p>${fname} will not be attending</p>
    </ul>`
}
}; 

const radioValues = () => {
    let rv = "";
    
    return (document.getElementById("jradio1").checked) ? rv = document.getElementById("jradio1").value
     : (document.getElementById("jradio2").checked) ? rv = document.getElementById("jradio2").value
     : rv = "Not selected";
}

// const checkboxValues = () => {
//     let cv = "";

//     return (document.getElementById("traditional").checked) ? cv = document.getElementById("traditional").value
//         : (document.getElementById("english").checked) ? cv = document.getElementById("english").value
//         : cv
// };

const test = (event) => {
    var value = event.target.value
    var index = checkedValues.indexOf(value)  //indexOf means accessing the value
    if(event.target.checked == false && index > -1){  
        checkedValues.splice(index,1); 
    }else{
        checkedValues.push(value)
        return checkedValues
    }
     
};

// const attend = () => {

//     if (document.getElementById("no").checked){
//         document.getElementById("list").innerHTML = `
//         <p>${fname} will not be attending</p>`;
//     }
// };