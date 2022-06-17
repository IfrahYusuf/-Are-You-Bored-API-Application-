//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'http://api.aladhan.com/asmaAlHusna'
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        let random = (randomValue((data.data)))
        document.querySelector('.h2').innerText = random.name;
        document.querySelector('h3').innerText = random.en.meaning;
       
      
        
  
         console.log(random.name)
         console.log(random.en)
         console.log(random.transliteration)
        
        
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//function generateRandomName(){
  //let randomName = Math.random()
  //console.log(randomName)
//}

//generateRandomName()

const randomValue = (list) => {
  return list[Math.floor(Math.random() * list.length
    )];
}