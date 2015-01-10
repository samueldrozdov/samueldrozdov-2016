// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$(function() {
  //Title, Description, Technologies, Image (optional link w/ buttons)
  var selected_project = 0;
  var selected_project_name = 'project1';

  var projects = {
      'project1': {
        'project' : 'Stitch',
        'slogan' : 'Read, Remember Together',
        'description' : 'News Aggregator that allows you to highlight and save text while you read. Saved highlights can easily be shared with other users and act as links to highlighted articles.',
        'technologies' : ["Core Data", "MWFeedParser", "AFNetworking"],
        'image' : 'imgs/projects/StitchDemo.png'
      },
      'project2': {
        'project' : 'Depo',
        'slogan' : 'The Easiest Way to Buy Bitcoin',
        'description' : 'Simply buy Bitcoin for a specific wallet using your PayPal account.',
        'technologies' : ["PayPal API", "BlockChain API"],
        'image' : 'imgs/projects/depoImage.png'
      },
      'project3': {
        'project' : 'iKnow',
        'slogan' : 'Remember Everything',
        'description' : 'Keep track of all the random pieces of information you pick up everyday by easily adding them to organized categories.',
        'technologies' : ["Parse"],
        'image' : 'imgs/projects/iKnowImage.png'
      },
      'project4': {
        'project' : 'Happy Place',
        'slogan' : 'All Your Happy Memories in One Place',
        'description' : 'Add and take photos that make you happy so that at a later point you can be cheered up by a random one of those photos.',
        'technologies' : ["Core Data"],
        'image' : 'imgs/projects/smileImage.PNG'
      },
      'project5': {
        'project' : 'Stay Green',
        'slogan' : 'How Long Can You Stay Green?',
        'description' : 'Easy to play, hard to master style of game. A white bar moves up and down on the screen, passing over a green zone. Click the screen when the white bar is over the green zone to score a point.',
        'technologies' : ["Cocos2D", "SpriteBuilder", "Game Center"],
        'image' : 'imgs/projects/stayGreenImage.jpeg'
      },
      'project6': {
        'project' : 'Tilt And Shoot',
        'slogan' : "Don't Hit The Walls",
        'description' : 'Use the accelerometer to shoot a ball and move it around the screen without touching the walls. Play for a high score or collects stars that can be spent on customizations in the in­game store.',
        'technologies' : ["Cocos2D", "SpriteBuilder", "Game Center"],
        'image' : 'imgs/projects/tiltAndShootImage.jpeg'
      }
  };

  $( ".project" ).click(
    function() {
      //Unhighlight previously selected project
      $('#'+selected_project_name).css({'background-color':'white','color':'black'});
      //Highlight clicked project and update project view
      $(this).css({'background-color':'#2c87c4','color':'white'});
      selected_project_name = $(this).attr('id');
      updateProjectView();
    }
  );

  function updateProjectView() {
    var currentProject = projects[selected_project_name];

    //Replace project image
    $('.project-image').attr("src", currentProject['image']);

    //Replace project header
    $('.project-name').text(currentProject["project"]);

    //Replace project slogan
    $('.project-slogan').text(currentProject["slogan"]);

    //Replace project description
    $('.project-description').text(currentProject["description"]);

    //Replace list of used technologies
    var technologyList = $('.project-technologies-wrapper');
    technologyList.empty();
    for (t in currentProject['technologies']) {
      var items = currentProject['technologies'];
      technologyList.append('<li>' + items[t] + '</li>');
    }
  }

  //Scroll the window to the bottom half of the page
  $('.tab-label').on('click', function(){
    $('html,body').animate({scrollTop: $(this).offset().top}, 500);
  });

  //Scroll the window to the top half of the page
  $('#name-btn').on('click', function(){
    $('html,body').animate({scrollTop: $(this).offset().top
      + $(this).outerHeight(true) - $(window).height()}, 500);
  });


  updateProjectView();

});
