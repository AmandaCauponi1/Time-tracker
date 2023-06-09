const main = document.getElementById('main')

window.addEventListener('DOMContentLoaded', () => {
    showBoxes()
})
function showBoxes() {
    fetch("data.json")
    .then((data)=> {
        return data.json()
    })
    .then((item) => {
        let displayBox = item.map((info)=>{
            return `  <section class="container">
      
            
      
      
      
      
            <section class="box2">
              <article class="content1">
               <article class="img">
                 
                 <img style="height: 43.45px;"  src=${info.img} alt="">
               </article>
                <div class="work">
      
                  <article class="elipse">
                    <p>${info.title}</p>
                    <img src="./images/icon-ellipsis.svg" alt="">
                  </article>
                  <h1>32hrs</h1> <!-- daily -->
                  <p style="color: hsl(236, 100%, 87%);">Previous - 7hrs </p>
                </div>
              </article>
      
      <!-- 
               <article class="content2">
                <img src="./images/icon-exercise.svg" alt="">
                <div class="exercise">
      
                  <article class="elipse">
                    <p>Exercise </p>
                    <img src="./images/icon-ellipsis.svg" alt="">
                  </article>
                  <h1>4hrs</h1>    daily-->
                  
              </article>  
            </section>
          </section>
      
      
      
      
      
           `
        });
        displayBox = displayBox.join("")
        main.innerHTML = displayBox
    })
}