function ans(){
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html + "<style>"+css+"</style>"; // for html and css
    output.contentWindow.eval(js); //  for js
}







// Test Code (Not in use)
 
// body{
//     background-color: black;
//     color: white;
// }

// .header-content{
//     font-weight: bolder;
// }

// .header{
//     padding: 10px;
//     border-bottom: 2px solid white;
// }

// .container{
//     margin-top: 10px;
//     display: flex;
// }

// .left , .right {
//     flex-basis: 50%;
//     padding: 10px;

// }

// textarea{
//     width: 100%;
//     height: 38%;
//     background-color: #161A19;
//     color: white;
//     padding: 10px 20px;
//     border: 0;
//     outline: 0;
//     font-size: 18px;
//     margin-bottom: 5%;
//     margin-top: 2%;
// }

// .row{
//     margin: 0%;
//     padding: 0%;
// }

// iframe{
//     width: 100%;
//     height: 95%;
//     background-color:white;
//     border: 0;
//     outline: 0;
// }

// label i{
//     display: flex;
//     align-items: center;
//     background-color: #000;
// }

// .col-md-6 > .right {
//     height: 90%;
// }

// .fa-html5{
//     color: #FF5722;
// }
// .fa-css3-alt{
//     color: #2196F3;
// }
// .fa-js{
//     color: #FFDF00;
// }

// span{
//     color: red;
// }

// a{
//     color: white;
// }

// a:hover{
//     color: white;
//     text-decoration: none;
// }
// body{
//     background-color: black;
//     color: white;
// }

// .header-content{
//     font-weight: bolder;
// }

// .header{
//     padding: 10px;
//     border-bottom: 2px solid white;
// }

// .container{
//     margin-top: 10px;
//     display: flex;
// }

// .left , .right {
//     flex-basis: 50%;
//     padding: 10px;

// }

// textarea{
//     width: 100%;
//     height: 38%;
//     background-color: #161A19;
//     color: white;
//     padding: 10px 20px;
//     border: 0;
//     outline: 0;
//     font-size: 18px;
//     margin-bottom: 5%;
//     margin-top: 2%;
// }

// .row{
//     margin: 0%;
//     padding: 0%;
// }

// iframe{
//     width: 100%;
//     height: 95%;
//     background-color:white;
//     border: 0;
//     outline: 0;
// }

// label i{
//     display: flex;
//     align-items: center;
//     background-color: #000;
// }

// .col-md-6 > .right {
//     height: 90%;
// }

// .fa-html5{
//     color: #FF5722;
// }
// .fa-css3-alt{
//     color: #2196F3;
// }
// .fa-js{
//     color: #FFDF00;
// }

// span{
//     color: red;
// }

// a{
//     color: white;
// }

// a:hover{
//     color: white;
//     text-decoration: none;
// }