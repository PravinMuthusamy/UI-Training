
function createElement(element, attributes, text) {
    const tag = document.createElement(element);
    for (let attr in attributes) {
        tag.setAttribute(attr, attributes[attr]);
    }
    if (text) {
        tag.textContent = text;
    }
    return tag;
}
  
  // Define a function to create a comment element with specified data
  function createCommentElement(commentData) {
    const comment = createElement('div', { class: 'comments' });
    const commentImg = createElement('img', { src: commentData.image });
    const commentInfo = createElement('div', { class: 'commentsInfo' });
    const commentName = createElement('div', { class: 'name' }, commentData.name);
    const desc = createElement('div', { class: 'desc' }, commentData.comment);
  
    commentInfo.appendChild(commentName);
    commentInfo.appendChild(desc);
    comment.appendChild(commentImg);
    comment.appendChild(commentInfo);
  
    return comment;
  }
  
  // Define a function to create a poster element with specified data
  function createPosterElement(posterData) {
    const poster = createElement('img', { src: posterData.imageUrl });
    return poster;
  }
  
  // Main code
  import videodata from "./video.json" assert { type: "json" };
  import posterdata from "./posters.json" assert { type: "json" };
  
  const leftContainer = document.querySelector(".leftContainer");
  const video = createElement('video', {
    src: videodata.videoUrl,
    controls: true,
    poster: "sprite_fright1-16857_PIC1.jpg"
  });
  const title = createElement('h3', {}, videodata.title);
  const description = createElement('p', {}, videodata.description);
  const line = createElement('div', { class: 'line' });
  const commentsTitle = createElement('h4', {}, "Comments");
  
  leftContainer.append(video, title, description, line, commentsTitle);
  
  for (const commentData of videodata.comments) {
    const comment = createCommentElement(commentData);
    leftContainer.appendChild(comment);
  }
  
  const rightContainer = document.querySelector(".rightContainer");
  for (const posterData of posterdata) {
    const poster = createPosterElement(posterData);
    rightContainer.append(poster);
  }
