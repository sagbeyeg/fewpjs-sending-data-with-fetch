function submitData (name, email) {
  let formData = {
    name: name,
    email: email
  };
  
  
  let configObj = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
}


  return fetch('http://localhost:3000/users', configObj)
  .then(function (resp) { 
    return resp.json()
  })
  .then(function (obj) {
     console.log(obj)
     document.body.innerHTML = obj.id + ' - ' + obj.name + ' - ' + obj.email
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
    document.body.innerHTML = error.message
  });
}

//test
// submitData("Sisan", "sisan@sisan.com")