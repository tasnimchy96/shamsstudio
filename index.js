const tabLinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link")
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}