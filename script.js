


    


    function shorten(){
        
        let inputUrl = document.getElementById("inputurl").value
   let spilitted = inputUrl.split(".")   
   let finalUrl =""
   
if(spilitted[0]=="https://www"){
    finalUrl = inputUrl
}else{
    finalUrl = "https://www."+inputUrl
}

    const encodedParams = new URLSearchParams();
    encodedParams.append("url", `${finalUrl}`);
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '4b7c2aa273mshb1dd4b16c24ce7fp1abcddjsn59b0d6a4bf22',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    

    fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
        .then(response => response.json())
        .then(response =>  document.getElementById("url").innerHTML = response.result_url)
        .catch(err => console.error(err))




    }
