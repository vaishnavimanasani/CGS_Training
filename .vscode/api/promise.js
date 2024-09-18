var result = fetch("https://randomuser.me/api/") 
result.then(function(res){ 
    console.log(res) 
    var data=res.json(); 
    console.log(data) 
    data.then((userData)=>{ 
        console.log(userData) 
    }) 
}) 
 
result.catch(function(err){ 
    console.log(err) 
})