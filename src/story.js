const storyButton = document.getElementById('new-story-button');

storyButton.addEventListener('click', function(event) {
    event.preventDefault();

    // section where input title and story are stored
    const newStorySection = document.getElementById('new-story-display');

    // creating new story title
    const newStoryTitleInput = document.getElementById('new-story-title-input');
    const titleLegend = document.getElementById('new-story-title');
    const newTitle = document.createElement('legend');
    newTitle.textContent = newStoryTitleInput.value;
   
    titleLegend.appendChild(newTitle);
    newStorySection.appendChild(titleLegend);

    // creating new p element to place story input into
    const newStoryInput = document.getElementById('new-story-input');
    const newStory = document.createElement('p');
    newStory.textContent = newStoryInput.value;

    newStorySection.appendChild(newStory);
    
}); 