let resume={
    skills:[]
    ,hobbies:[],
    languages:[],
    personel_details:{},
    education:[
        {
            institute_name:"",
            percentage:"",
            year:"",
        },
        {
            institute_name:"",
            percentage:"",
            year:"",
        },
        {
            institute_name:"",
            percentage:"",
            year:"",
        }
    ],
    project:[
        {
            tittle:"",
            role:"",
            year:"",
        },
        {
            tittle:"",
            role:"",
            year:"",
        },
        {
            tittle:"",
            role:"",
            year:"",
        }
    ],
    experiance:[
        {
            company_name:"",
            jobrole:"",
            year:"",
        },
        {
            company_name:"",
            jobrole:"",
            year:"",
        },
        {
            company_name:"",
            jobrole:"",
            year:"",
        }
    ],

}
function box1(ele,key,p_key,index,edu_key){
    if(p_key){
        resume[p_key][key]=ele.value}
    else if(edu_key){
        resume[key][index][edu_key]=ele.value
    }
    else{
        resume[key]=ele.value
    }
    

    preview()
}
function skills(key,id){
    let value=document.getElementById(id).value
    resume[key].push(value)
    document.getElementById(id).value=""
    preview()
}

function preview(){
    document.getElementById("review").innerHTML=JSON.stringify(resume,null,4)
    
 
 }
                         // to save the resume
function saveresume(){
    if(!localStorage.getItem("resume_details")){
        let data=[]
        localStorage.setItem("resume_details",JSON.stringify(data))
    }

   let getdata=localStorage.getItem("resume_details")
   let parsedata=JSON.parse(getdata)
   let updatedata=[ ...parsedata,resume]

   localStorage.setItem("resume_details",JSON.stringify(updatedata))
   window.location="listpractice.html"
    
}
function listresume(){
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)

    let li_empty=''
    for(const input in updateparasdata){
        li_empty=li_empty+`<li><a href="viewpractice.html?index=${input}">${updateparasdata[input].name}</a><button onclick="del('${input}')">delete</button>
        <a href="editpractice.html?index=${input}"><button type="button" onclick="edit('${input}')">edit</button></a></li>`
        
    }
    document.getElementById("list").innerHTML=li_empty
}
function del(name_del){
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)
    let storedata=[]
    for(let each in updateparasdata){
         if(each!=name_del){
             storedata.push(updateparasdata[each])
         }
    }
localStorage.setItem("resume_details",JSON.stringify(storedata))
window.location="listpractice.html"

}
function view(){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")

    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)

    document.getElementById("tittle1").innerHTML=`tittle:${updateparasdata[index].project_tittle}`
    document.getElementById("name1").innerHTML=`name:${updateparasdata[index].name}`
    document.getElementById("email1").innerHTML=`email:${updateparasdata[index].email}`
    document.getElementById("age1").innerHTML=`age:${updateparasdata[index].age}`
    document.getElementById("contact1").innerHTML=`contact:${updateparasdata[index].contact}`
    document.getElementById("fathername1").innerHTML=`fathername:${updateparasdata[index].personel_details.fathername}`
    document.getElementById("mothername1").innerHTML=`mothername:${updateparasdata[index].personel_details.mother_name}`

    
    // create skills loop
    let loopskill=""
    for(let each of updateparasdata[index].skills){
        loopskill=loopskill+` <tr>
        <td>${each}</td> 
      </tr>`
    }
    document.getElementById("tableskills").innerHTML=loopskill

    // ctreatetable table loop for hobbies
    let loophobbies=""
    for(let each of updateparasdata[index].hobbies){
        loophobbies=loophobbies+` <tr>
        <td>${each}</td> 
      </tr>`
    }
    document.getElementById("tablehobbies").innerHTML=loophobbies

    // to createloop for languages
    let looplanguages=""
    for(let each of updateparasdata[index].languages){
        looplanguages=looplanguages+` <tr>
        <td>${each}</td> 
      </tr>`
    }
    document.getElementById("tablelanguages").innerHTML=looplanguages


    // create table loop for project
    let project_tabl=""
    for(let each of updateparasdata[index].project){
        project_tabl=project_tabl+` <tr>
        <td>${each.tittle}</td>
        <td>${each.role}</td>
        <td>${each.year}</td>  
      </tr>`
    }
    document.getElementById("projectbody").innerHTML=project_tabl

    // create table loop for education
    let edu_tabl=""
   for(let each of updateparasdata[index].education){
        edu_tabl=edu_tabl+` <tr>
        <td>${each.institute_name}</td>
        <td>${each.percentage}</td>
        <td>${each.year}</td>  
      </tr>`
    }
    document.getElementById("educationbody").innerHTML=edu_tabl 

    // create table loop for experiance
    
    let experiance_table=""
   for(let each of updateparasdata[index].experiance){
        experiance_table=experiance_table+` <tr>
        <td>${each.company_name}</td>
        <td>${each.jobrole}</td>
        <td>${each.year}</td>  
      </tr>`
    }
    document.getElementById("experiancebody").innerHTML=experiance_table
}
function editupdate(){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")   
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)
    document.getElementById("inputtext").value=updateparasdata[index].name
    document.getElementById("emails").value=updateparasdata[index].email
    document.getElementById("project_tittles").value=updateparasdata[index].project_tittle
    document.getElementById("ages").value=updateparasdata[index].age
    document.getElementById("contacts").value=updateparasdata[index].contact
    document.getElementById("fathername_").value=updateparasdata[index].personel_details.fathername
    document.getElementById("mothername_").value=updateparasdata[index].personel_details.mother_name
}


function update(){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")   
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)
    updateparasdata[index].project_tittle=document.getElementById("project_tittles").value
    updateparasdata[index].name=document.getElementById("inputtext").value
    updateparasdata[index].email=document.getElementById("emails").value
    updateparasdata[index].age=document.getElementById("ages").value
    updateparasdata[index].contact=document.getElementById("contacts").value
    updateparasdata[index].personel_details.fathername=document.getElementById("fathername_").value
    updateparasdata[index].personel_details.mother_name=document.getElementById("mothername_").value
    
    

    

    localStorage.setItem("resume_details",JSON.stringify(updateparasdata))
    window.location="listpractice.html"

}
