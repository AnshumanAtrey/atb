window.onload = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var friendName = getParameterByName("name");
if (friendName) {
  document.getElementById("friendName").textContent = friendName;
} else {
  window.location.href = "/";
}

function startGifAnimation() {
  const gifUrl = "https://i.giphy.com/WXjuxv5mGZXqg.webp";
  const foregroundLayer = document.getElementById("foregroundLayer");
  foregroundLayer.style.backgroundImage = `url(${gifUrl})`;
  foregroundLayer.style.backgroundRepeat = "repeat";
}

function activateForeground() {
  const audio = document.getElementById("backgroundAudio");
  const promise = audio.play();
  document.getElementById("foregroundLayer").style.display = "block";
  document.getElementById("foreground2Layer").style.display = "flex";
  startGifAnimation();
}
