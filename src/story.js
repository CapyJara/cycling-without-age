const storyButton = document.getElementById('new-story-button');
const newStoryP = document.getElementById('new-story');

storyButton.addEventListener('click', function(event) {
    event.preventDefault();

    // const newStorySection = document.getElementById('new-story-section');

    // creating new p element to place story input into
    const newStoryInput = document.getElementById('new-story-input');

    const newStory = document.createElement('p');
    newStory.textContent = newStoryInput.value;

    newStoryP.appendChild(newStory);

    // creating new story title
    const newStoryTitleInput = document.getElementById('new-story-title-input');

    const newTitle = document.createElement('a');
    newTitle.textContent = newStoryTitleInput.value;
    // newTitle.href = 
        // dynamically create new entry


    console.log(newStoryInput.value);
    
}); 