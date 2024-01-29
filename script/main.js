// Scroll to the bottom the page when it loads
window.onload = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

let friendName;
const copyAlert = document.getElementById("copyAlert");
const previewName = document.getElementById("previewName");
var personalizedLink = "";

// Show and then hide the alert
const showHide = () => {
  copyAlert.classList.add("fade-in");
  setTimeout(() => {
    copyAlert.classList.remove("fade-in");
    copyAlert.classList.add("fade-in-out");
  }, 1000);
};

// Generate a personalized link based on the friend's name
const shareLinkfn = () => {
  personalizedLink =
    "https://dofknbest.netlify.app/atb?name=" + encodeURIComponent(friendName);
  document.getElementById("shareButtons").style.display = "flex";

  navigator.clipboard.writeText(personalizedLink);
  copyAlert.textContent = "Link Copied";
  previewName.textContent = friendName.split(" ")[0];
  showHide();

  document
    .getElementById("telegram")
    .setAttribute(
      "href",
      "https://telegram.me/share/url?url=" +
        encodeURIComponent(personalizedLink)
    );
  document
    .getElementById("whatsapp")
    .setAttribute(
      "href",
      "whatsapp://send?text=" + encodeURIComponent(personalizedLink)
    );

  document.getElementById("preview").setAttribute("href", personalizedLink);

  document.getElementById("generateLinkForm").reset();
};

//Validate Input
document
  .getElementById("generateLinkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    friendName = document.getElementById("friendName").value.trim();
    if (friendName === "") {
      copyAlert.textContent = "Enter Name";
      showHide();
    } else {
      shareLinkfn();
    }
  });

// Copy Button Function
document.getElementById("copy").addEventListener("click", function () {
  navigator.clipboard.writeText(personalizedLink);
  showHide();
});
