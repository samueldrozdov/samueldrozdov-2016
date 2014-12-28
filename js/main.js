// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$(function() {
  //Title, Description, Technologies, Image (optional link w/ buttons)
  var selected_project = 0;
  var select_project_name = 'line2';

  var projects = {
      'line1': {
        'project' : 'Stitch',
        'description' : 'News Aggregator that allows you to highlight and save text while you read. Saved highlights can easily be shared with other users and act as links to highlighted articles.',
        'technologies' : ["Core Data", "MWFeedParser", "AFNetworking"],
        'image' : 'imgs/projects/StitchDemo.png'
      },
      'line2': {
        'project' : 'Depo',
        'description' : 'Simply buy Bitcoin for a specific wallet using your PayPal account.',
        'technologies' : ["PayPal API", "BlockChain API"],
        'image' : 'imgs/projects/depoImage.png'
      },
      'line3': {
        'project' : 'iKnow',
        'description' : 'Keep track of all the random pieces of information you pick up everyday by easily adding them to organized categories.',
        'technologies' : ["Parse"],
        'image' : 'imgs/projects/iKnowImage.png'
      },
      'line4': {
        'project' : 'Happy Place',
        'description' : 'Add and take photos that make you happy so that at a later point you can be cheered up by a random one of those photos.',
        'technologies' : ["Core Data"],
        'image' : 'imgs/projects/smileImage.PNG'
      },
      'line5': {
        'project' : 'Stay Green',
        'description' : 'Easy to play, hard to master style of game. A white bar moves up and down on the screen, passing over a green zone. Click the screen when the white bar is over the green zone to score a point.',
        'technologies' : ["Cocos2D", "SpriteBuilder", "Game Center"],
        'image' : 'imgs/projects/stayGreenImage.jpeg'
      },
      'line6': {
        'project' : 'Tilt And Shoot',
        'description' : 'Use the accelerometer to shoot a ball and move it around the screen without touching the walls. Play for a high score or collects stars that can be spent on customizations in the in­game store.',
        'technologies' : ["Cocos2D", "SpriteBuilder", "Game Center"],
        'image' : 'imgs/projects/tiltAndShootImage.jpeg'
      }
  };


  $( ".project-item" ).hover(
    function(){
      $(this).css({'background-color':'#2c87c4','color':'white'});
      select_project_name = $(this).attr('id');
      updateDescription();
    },
    function(){
      $(this).css({'background-color':'#fafafa','color':'black'});
    }
  );

  //Update Project Description
  function updateDescription() {
    var currentProject = projects[select_project_name];
    //Replace project header
    $('.project-description-header').text(currentProject["project"]);

    //Replace project description
    $('.project-desciption-paragraph').text(currentProject["description"]);

    //Replace list of used technologies
    var technologyList = $('.project-technologies-list');
    technologyList.empty();
    for (t in currentProject['technologies']) {
      var items = currentProject['technologies'];
      technologyList.append('<li>' + items[t] + '</li>');
    }

    //Replace project image
    $('.projects-image').attr("src", currentProject['image']);
  }


  $('#projects-btn').on('click', function(){
    $('html,body').animate({scrollTop: $(this).offset().top}, 500);
  });

  $('#name-btn').on('click', function(){
    $('html,body').animate({scrollTop: $(this).offset().top
      + $(this).outerHeight(true) - $(window).height()}, 500);
  });

  //Scroll to id
  function goToByScroll(id){
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
      scrollTop: $("#"+id).offset().top},
      'slow');
  }


});
