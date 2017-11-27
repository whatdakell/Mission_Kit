
grading = [
		{score:'purist',
		quiztype:"PURIST TRICLIMATE",
		image: "https://images.thenorthface.com/is/image/TheNorthFaceBrand/M%5FTriclimate%5F%20Outfit%5FGroup?$natural%2Djpg$",
		 href: "#purist",
		copy:"If part of the joy of skiing and riding is going down, the other joyful part for you is charging up. You love nothing more than a cup of coffee followed by a sweaty dawn patrol skin up the face of your local front range, or working your way out to a remote hut for an epic weekend adventure. You love the simplicity of the sport and probably drive a Subaru with an old REI bag floating around the backseat. This kit will allow you to vent when the climbing gets warm, but layer up when it’s time to cruise down, without so much as taking off your pack."},


		{score:'fuse',
		quiztype:"FUSE BRIGANDINE ",
		image: "https://images.thenorthface.com/is/image/TheNorthFaceBrand/M%5FBrigandine%5FOutfit%5FGroup?$natural%2Djpg$",
		 href: "#fuse",
		copy:"You’re a Red Bull-chugging, cliff-hucking, adrenaline-seeking maniac who wants the rush of the gnarliest line you can get your sticks or board on. This kit is articulated specifically to crush those hard lines and allow you to speak clearly into your collar with a semi-gripped, “3, 2, 1, dropping…” call to the heli when you’re charging new terrain."}



		];
		function removeActive(){
			 change.removeClass('active');
		}

var answers = {
  'fuse': 0,
  'purist': 0,
};
var quiztype;
			 $('button')
			 .on('click', function() {
			   var $el = $(this),
			       answer = $el.data('answer');

			   answers[answer]++;

			 		var results = getMostAnswered();
			 	// resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
			 	//                 resultsDesc.replaceWith("<p class='desc'>" + resultOptions[n].desc + "</p>");
			 	for(i=0; i<grading.length; i++) {
			 		 if(results == grading[i].score) {
			 		 quiztype = grading[i].quiztype;
					 resultIMG = "<img src='" + grading[i].image + "'/>";
					 resultCOPY = grading[i].copy;
			 		 result3 = grading[i].href;
			 		 document.getElementById("result").innerHTML = quiztype;
					 // document.getElementById("myresult").innerHTML = quiztype;
					  document.getElementById("resultCopy").innerHTML = resultCOPY;
			 		 document.getElementById("resultIMG").innerHTML= resultIMG;

					 // document.getElementById("quiz_type_choice").value = quiztype;

					 // document.getElementById("show_down").href =  result3;
				 }
			 		 }
					 if (result3 == "#fuse"){
						 $("#fuse").addClass('current');

					 }
					 if (result3 == "#purist"){
									 $("#purist").addClass('current');

					 }
			 	// document.getElementById("result").innerHTML = results;
			 });


			 function getMostAnswered() {
			   // here we convert the object to an array we can use
			   var theAnswers = Object.keys(answers).map(function(key) {
			     var answer = {
			       count: answers[key],
			       key: key,
			     };

			     return answer;
			   });

			    // set some vars with -1 so we can do a good comparison
			    var currentMax = -1;
			    var currentIndex = -1;

			    // loop thru answers
			    theAnswers.forEach(function(answer, index) {
			      if (answer.count > currentMax) {
			        currentMax = answer.count;
			        currentIndex = index;
			      }
			    });

			   return theAnswers[currentIndex].key;
			 }


function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('GetKit').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}


function sendMail() {
    $("#GetKit").attr("action", 'mailto:kellylinehan2@gmail.com?subject= Get your ' + quiztype + ' kit');

}


var arrowdown = $('.arrow_down');
      var change = $('.onchange');

			 var quiz = $("#quiz-wrapper");

			 var show_down= $('.show_down');


arrowdown.click(function() {
	change.addClass('active');
	quiz.addClass('start');
	change.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',

	 function(e) {
   e.preventDefault();
		 $('html, body').animate({
 	 			 scrollTop: $("#quiz-wrapper").offset().top
 	 	 }, 500);

	 setTimeout(removeActive, 1000);
	 });
});

show_down.click(function() {

   e.preventDefault();
		 $('html, body').animate({
 	 			 scrollTop: $(".custom__content").offset().top
 	 	 }, 500);

	 setTimeout(removeActive, 1000);
});



$('.quiz-step').each(function() {
    var $step = $(this);
    // for each step, add click listener
    // apply current active class
		removeActive();

    $step.find('.quiz-answer').click(function () {
        var $this = $(this);
        // check to see if an answer was previously selected
        if ($step.children('.active').length > 0) {
            var wasActive = $step.children('.active');
            $step.children('.active').removeClass('active');
						// $bar.removeClass('active');
            $this.addClass('active');


						// $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        } else {
            $this.addClass('active');

            updateStep($step);
						showresult();
        }
    });
});

// show current step/hide other steps
function updateStep(n) {
    if (n.hasClass('current')) {
			$('current').fadeOut();
			//  $bar.removeClass('active');
			//  $bar.next().addClass('active');
        n.removeClass('current');
				// $bar.removeClass('active');

        n.next().addClass('current');
				$('current').fadeIn();
				$('.active').removeClass('active').next('li').addClass('active');
				console.log('Transition complete!  This is the callback, no library needed!');
    }
}

// var showdown = $('#showresult');
// showdown .click(function() {
// 	 function(e) {
//    e.preventDefault();
// 		 $('html, body').animate({
//  	 			 scrollTop: $("#quiz-wrapper").offset().top
//  	 	 }, 500);
//
// 	 setTimeout(removeActive, 1000);
// 	 });
// });
//

function showresult(){
  $("#showresult").click(function(){
		var $href= $(this).attr("href");

				$('html, body').animate({
						scrollTop: $($href).offset().top
				}, 500);

			// scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
		if ($href == "#fuse"){
			$("#fuse").addClass('current');

		}
		if ($href == "#purist"){
						$("#purist").addClass('current');

		}

});
}
