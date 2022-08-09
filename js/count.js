function countWord() {
  const words = document.getElementById("word").value;
  let count = 0;
  const maxWords = document.getElementsByClassName("input-position")[0].value;
  // console.log(maxWords);
  textarea.onkeypress = (e) => {
    if (e.target.value.length >= maxWords) {
      e.preventDefault();
      
    }
  }
  
  const split = words.split(' ').filter(function (str) {
    return str !== 'the';
  });
  for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
          count += 1;
      }
  }
  document.getElementById("show").innerHTML = count;
  }