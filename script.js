document.getElementById('startJourney').addEventListener('click', function() {
    this.hidden = true; // Hide the start button
    document.getElementById('question').hidden = false; // Show the question
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('question').hidden = true;
    document.getElementById('success').hidden = false;
});

document.getElementById('no').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});
