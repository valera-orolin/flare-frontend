var links = document.querySelectorAll('.nav-link'); // TODO объединить эти части
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(function(otherLink) {
      if (otherLink !== link) {
        otherLink.classList.remove('clicked');
      }
    });
    this.classList.toggle('clicked');
  });
});

var feedsChoice = document.querySelectorAll('.feeds-choice');
feedsChoice.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    feedsChoice.forEach(function(otherLink) {
      if (otherLink !== link) {
        otherLink.classList.remove('clicked');
      }
    });
    this.classList.toggle('clicked');
  });
});

autosize(document.querySelector('#post-area'));

document.getElementById('post-media-icon').addEventListener('click', function() {
    document.getElementById('post-media').click();
});

document.getElementById('visibility-select').addEventListener('change', function(event) {
    if (event.target.value === 'public') {
        document.getElementById('globe-icon').classList.remove('hidden');
        document.getElementById('users-icon').classList.add('hidden');
    } else if (event.target.value === 'friends') {
        document.getElementById('globe-icon').classList.add('hidden');
        document.getElementById('users-icon').classList.remove('hidden');
    }
});

const picker = document.querySelector('emoji-picker')
const textarea = document.querySelector('#post-area')
picker.addEventListener('emoji-click', event => {
    textarea.value += event.detail.unicode
})

document.getElementById('emoji-icon').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.classList.toggle('hidden');
});