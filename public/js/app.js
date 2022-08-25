document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  const button=document.getElementById("trybutton");
  button.addEventListener("click",function(){
    const postImages=document.getElementsByClassName("postImage");
    for(let i=0;i<postImages.length;i++){
    postImages[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  })
});

// document.getElementsByClassName()
// document.getElementsByTag()

// {style: (buttonstyle)...}

// [{style: divstyle}, {style: divstyle}]