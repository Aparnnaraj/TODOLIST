function viewList() {
   const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200) {
            let mytable= JSON.parse(this.responseText);
            tableset(mytable);
       }

   };
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhr.send();

}
function tableset(item){
    document.getElementById("tasks").style.display="none"
   let table = "<thead><tr><th>TITLE</th><th>STATUS</th></tr></thead>";
    for(let i=0;i<item.length;i++) {
        table+="<tr>";
        if(item[i].completed==true) {
            table+="<td>"+item[i].title+"</td><td><input type =checkbox checked disabled></td>";
        }
       else {
           table+="<td>"+item[i].title+"</td><td><input type=checkbox name= check onclick=checkcounter()></td>";
        }
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("list").innerHTML=table;
}

function checklist() {
 var i=0;
    var count=0;
    check=document.getElementsByName("check");
   for(i=0;i<=check.length;i++) {
    if(count==true) {
    count++;
   alert("congratulations 5 tasks are completed");
    }
else {
alert("not eligible");
}
    }
}





//fetch("https://jsonplaceholder.typicode.com/todos")
//.then((data)=> {
   // return data.json();
//})
//.then((objectData)=> {
    //let tableData="";
    //objectData.map((values)=> {
       // tableData += `<tr>
        //<td>${values.id}</td>
        //<td>${values.title}</td>
        //<td><input type = "checkbox" id="item" onclick = "checklist()"></td>
        //<td>Remove<i class= "bibi-x-circle-fill remove_button"></i></td></tr>`
    //})
    //document.getElementById("table_body").innerHTML =tableData;
//})





















//function ajax() {
    //var xhttp = new XMLHttpRequest();
    //xhttp.onreadystatechange = function() {
       // if(this.readyState==4&&this.status==200){
           // var response = JSON.parse(this.responseText);
           // var output = "";
            //for(var i=0;i<response.length;i++) {
               // output+= "<li>" + response[i].title + "</li>";
            //}
            //document.getElementById("todo").innerHTML=output;
        //}

   // }
    //xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    //xhttp.send();
//}


