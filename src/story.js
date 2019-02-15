const formStoryInput = document.getElementById('form-story');

formStoryInput.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formStoryInput);
    // section where input title and story are stored

    const story = {
        title: formData.get('title-input'),
        story: formData.get('story-input')
    };

    const newStorySection = document.getElementById('new-story-display');
    
    // creating new story title
    const newTitle = story.title;
    console.log(story.title);

    newStorySection.appendChild(newTitle);
    
    //newTitle.textContent = newStoryTitleInput.value;
   
    // titleLegend.appendChild(newTitle);
    // newStorySection.appendChild(titleLegend);

    // // creating new p element to place story input into
    // const newStoryInput = document.getElementById('new-story-input');
    // const newStory = document.createElement('p');
    // newStory.textContent = newStoryInput.value;

    // newStorySection.appendChild(newStory);
    
}); 