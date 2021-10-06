// Use the functions eatBreakfast, eatLunch, eatDinner, and eatDessert to eat your meals in the traditional order.

eatBreakfast(function(){
    eatLunch(function(){
      eatDinner(function(){
        eatDessert()
      })
    })
  })
  
  
  // Do NOT modify below this line until instructed to do so.
  function eatBreakfast(callback) {
    console.log("The eatBreakfast function started executing.")
    setTimeout(function() {
      addText("You just ate breakfast.")
      if (callback) callback()
    }, 800)
  }
  
  function eatLunch(callback) {
    console.log("The eatLunch function started executing.")
    setTimeout(function() {
      addText("You just ate lunch.")
      if (callback) callback()
    }, 300)
  }
  
  function eatDinner(callback) {
    console.log("The eatDinner function started executing.")
    setTimeout(function() {
      addText("You just ate dinner.")
      if (callback) callback()
    }, 600)
  }
  
  function eatDessert(callback) {
    console.log("The eatDessert function started executing.")
    setTimeout(function() {
      addText("You just ate dessert.")
      if (callback) callback()
    }, 40)
  }
  
  const textDiv = document.getElementById("text")
  function addText(x) {
    textDiv.insertAdjacentHTML('beforeend', `<p>${x}</p>`)
  }