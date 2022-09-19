'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('Up and runnsing!');
window.addEventListener('hashchange', doSomethingWithChangeFunction);
var prevHash = "";
function doSomethingWithChangeFunction() {
  var urlParam = window.location.hash; // Get new hash value

  var currHash = window.location.hash;

  console.debug("locationHashChanged!", prevHash, currHash);
  // ... Do something with new hash value

  prevHash = currHash;
};

function selectNavItem(positionId) {
  document.querySelector(".navImage #mainImage").classList = positionId;
  updateBreadCrumb(positionId === "position1" ? ['Select a category of your interest', 'Protect your work'] : positionId === "position2" ? ['Select a category of your interest', 'Using and reusing'] : positionId === "position3" ? ['Select a category of your interest', 'Enforcement'] : positionId === "position4" ? ['Select a category of your interest', 'Licensing and exploiting'] : ['Select a category of your interest']);
}

var TOWcontent = _defineProperty({
  "Film Maker": "Films often combine different creative contributions – such as storyboard, script, and music – each of which may attract copyright protection. On top of those creative contributions, the film itself is also protected by copyright. The first fixation of a film (‘master copy’) or a broadcast is protected by related rights. Not only traditional films and TV shows are protected under this category: short videos distributed through social media such as YouTube or TikTok can also be protected by copyright.",
  "Musician": "Music often involves different types of copyright works. A recorded song with lyrics will usually include three different types of protected works: the melody (musical work), the lyrics (literary work), and the recording itself (sound recording). Each of these elements are protected separately and may well have different owners (for more information about authorship and ownership, see LINK). However, while musical and artistic works enjoy full copyright protection, sound recordings only attract related rights.",
  "Writer": "Most forms of writing – such as novels, poetry, academic publications, lyrics or news articles – are protected by copyright if they can be considered ‘original’ (the ‘author’s own intellectual creation’). These are known as literary works and include computer programmes as well as databases.",
  "Performer": "There is an important distinction in the performative arts: while dramatic works such as plays or choreographics shows receive full copyright protection, the performance of a work (whether dramatic, musical or poetical, for example) attracts what are known as ‘related rights.",
  "Software Developer": "Computer programmes are protected as literary works. Software is often just one element of a creative work. For example, a video game may consist of software, images, music, and a story. All these elements are protected separately and may have different owners. Databases also attract copyright protection if they can be considered original. If they are not original, they may still attract sui generis database rights.",
  "Visual Artist": "Most works of visual art are protected by copyright if they are original. These are referred to as artistic works, a broad category that includes illustrations, paintings, drawings, graphics, sculptures, photographs, maps and works of architecture, among others."
}, 'Writer', "There is an important distinction in the performative arts: while dramatic works such as plays or choreographics shows receive full copyright protection, the performance of a work (whether dramatic, musical or poetical, for example) attracts what are known as ‘related rights’.");

function fillModal(TOW) {
  document.getElementById("modal-be0x6e8dukq-heading").innerHTML = TOW;
  document.getElementById("modal-be0x6e8dukq-content").innerHTML = "<p>" + TOWcontent[TOW] + "</p>";
}

function updateBreadCrumb(navArray) {
  var finalHtmlString = '';
  if (navArray.length < 3) {
    document.getElementById("leafCloseButton").click();
  };

  navArray.forEach(function (n, i) {
    console.debug("i+1 === navArray.length", i + 1 === navArray.length, i + 1, navArray.length);
    finalHtmlString += '<div onclick="' + (i === 0 ? 'selectNavItem(\'\')' : 'selectNavItem(\' position' + 2 + ' \')') + '" class="' + (i + 1 === navArray.length ? ' bx--breadcrumb-item--current ' : '') + 'bx--breadcrumb-item on"> <a href="#" class="bx--link"> ' + n + ' </a> </div>';
  });

  document.getElementById("breadcrumbMainNav").innerHTML = finalHtmlString;
}

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("breadcrumbMainNav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky - 47) {
    //     header.classList.add("sticky");
  } else {
      //     header.classList.remove("sticky");
    }
}