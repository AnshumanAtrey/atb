// Scroll to the bottom the page when it loads
window.onload = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

const copyAlert = document.getElementById("copyAlert");
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
    "https://dofknbest.netlify.app/atb?name=" +
    encodeURIComponent(document.getElementById("friendName").value);

  document.getElementById("shareButtons").style.display = "flex";

  navigator.clipboard.writeText(personalizedLink);
  copyAlert.textContent = "Link Copied";
  showHide();

  document
    .getElementById("instagram")
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
  document.getElementById("generateLinkForm").reset();
};

//Validate Input
document
  .getElementById("generateLinkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (document.getElementById("friendName").value.trim() === "") {
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
