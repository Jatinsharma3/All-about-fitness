let exercise = ""
let image= ""
let elements = document.querySelectorAll(".dropdown-item")
Array.from(elements).forEach(function(ele) {
  console.log(ele)
  ele.addEventListener("click", (e) => {
    exercise = ele.textContent
    if (exercise=="biceps"){
      image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7qTjgV4NWYcmb_jxIkjlhZCjE0dNuvsU-hz5iHKWLA&s"
    }
    else if(exercise=="chest"){
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIPwJMhg44J2Vfb01S8MIz6TIXag-o3_O5n9P88je&s"
    }
    console.log(exercise)
    api(exercise)
  })
});
let api = (exercise) => {

  const url = `https://api.api-ninjas.com/v1/exercises?muscle=${exercise}`;
  const options = {
    method: 'GET',
    url: `https://api.api-ninjas.com/v1/exercises?muscle=`,
    headers: { 'X-Api-Key': 'dvWkAjmQlNg4LRe48mC1q5ttXNIfFPcahy77LkO3' },
    contentType: 'application/json',
  };
  let response = fetch(url, options)
  response.then((v) => {
    return v.json()
  }).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
      console.log(contests[item])
      ihtml += ` <div class="card my-1 mx-1"  >
       
        <div class="card-body ">
          <h4 class="card-title">${contests[item].name}</h4>
          <p class="card-text">${contests[item].instructions}</p>
          <h5> ${contests[item].muscle}<h5>
          <h5> ${contests[item].difficulty}<h5>
          <a href="" class="btn btn-primary my-2">Visit here</a>
        </div>
      </div>
    `
    }
    cardcontainer.innerHTML = ihtml
  })

}

api("")