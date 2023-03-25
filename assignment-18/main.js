$.get('https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0', function(videodata) {
  console.log(videodata); 

  let left = $('.leftContainer');
let video = $('<video>').attr('src', videodata.videoUrl).attr('controls', true).attr('poster', 'https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg');
left.append(video);

let title = $('<h3>').text(videodata.title);
left.append(title);

let desc = $('<p>').text(videodata.description);
left.append(desc);

let line = $('<div>').addClass('line');
left.append(line);

let commentsTitle = $('<h4>').text('Comments');
left.append(commentsTitle);

for (let comment of videodata.comments) {
  let comments = $('<div>').addClass('comments');
  left.append(comments);

  let commentImg = $('<img>').attr('src', comment.image);
  comments.append(commentImg);

  let commentInfo = $('<div>').addClass('commentsInfo');
  comments.append(commentInfo);

  let commentName = $('<div>').addClass('name').text(comment.name);
  commentInfo.append(commentName);

  let desc = $('<div>').addClass('desc').text(comment.comment);
  commentInfo.append(desc);
}
});



//poster.json
    
$.get('https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346', function(data) {
    console.log(data); 
    
    let right = $('.rightContainer');

    for (let temp of data) {
    let poster = $('<img>').attr('src', temp.imageUrl);
    right.append(poster);
    }

});