const url = "https://kontests.net/api/v1/all"

let response=fetch(url)
response.then((v)=>{
  return v.json()
}).then((contests)=>{
   console.log(contests)
    ihtml = ""
  for (item in contests){
    console.log(contests[item])
    ihtml += ` <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"><a href="${contests[item].url}">visit here</p>
          <p>Start at: ${contests[item].start_time}
          <p>Start at: ${contests[item].end_time}
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
  }
  cardcontainer.innerHTML= ihtml
})

