const num_mp4 = 4
const num_jpg = 38
const num_gif = 2

function photos() {
  var container = document.getElementById("coreyPics");
  //mp4s
  /*for (let i = 1; i < num_mp4+1; i++) {
    let vid = document.createElement("video", {autoplay:true,loop:true,muted:true,inline:true,height:200})
    vid.setAttribute("autoplay","")
    vid.setAttribute("loop","")
    vid.setAttribute("muted","")
    vid.setAttribute("inline","")
    vid.setAttribute("height",200)
    vid.setAttribute("id","vid"+i)
    vid.setAttribute("src","corey/"+i+".mp4")
    vid.setAttribute("type","video/mp4")
    container.appendChild(vid)
  }*/
  //gifs
  for (let i = 1; i < num_gif+1; i++) {
    let el = document.createElement("img")
    el.setAttribute("src", "corey/" + i + ".gif")
    el.setAttribute("height", 200)
    console.log(el)
    container.appendChild(el)
  }
  //jpgs
  for (let i = 1; i < num_jpg+1; i++) {
    let el = document.createElement("img")
    el.setAttribute("src", "corey/" + i + ".jpg")
    el.setAttribute("height", 200)
    console.log(el)
    container.appendChild(el)
  }

}
window.addEventListener("load", function() {
  photos()
});
