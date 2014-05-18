$(document).ready(function() {

	var question_counter = 1;
		var introvert_cnt = 0;
		var extrovert_cnt = 0;
		var intuition_cnt = 0;
		var sensing_cnt = 0;
		var feeling_cnt = 0;
		var thinking_cnt = 0;
		var judging_cnt = 0;
		var perceiving_cnt = 0;
		var indicator_cnt = "";
		var introvert = "";
		var intuition = "";
		var feeling = "";
		var judging = "";
		var indicator = "";
		var results = "";
		var q1 = "";
		var q2 = "";
		var q3 = "";
		var q4 = "";
		
	$(".wrapper").fadeIn(1200);
	
	$(".start_quiz").on("click",function(){
		resetVariables();
		$(".questions").fadeIn();
		$("#1").fadeIn();
		$(".intro_page").hide();
		$(".result_page").hide();
	});
	
	$(".button").on("click",function(){
		var question_cnt = ($(this).parent().attr('id'));
		var thisquestion = parseInt(question_cnt,10);
		var nextquestion = parseInt(question_cnt,10) + 1;
		if (thisquestion < 20) {
			if (($(this).attr('class')).indexOf("1") > -1) {introvert_cnt++;} 
			else if (($(this).attr('class')).indexOf("2") > -1) {extrovert_cnt++;}
			else if (($(this).attr('class')).indexOf("3") > -1) {intuition_cnt++;} 
			else if (($(this).attr('class')).indexOf("4") > -1) {sensing_cnt++;}
			else if (($(this).attr('class')).indexOf("5") > -1) {thinking_cnt++;}
			else if (($(this).attr('class')).indexOf("6") > -1) {feeling_cnt++;}
			else if (($(this).attr('class')).indexOf("7") > -1) {judging_cnt++;} 
			else if (($(this).attr('class')).indexOf("8") > -1) {perceiving_cnt++;}
			getIndicator ();
			$("#" + nextquestion).fadeIn();
			$("#" + thisquestion).hide();
		} 
		else {
			results = q1+q2+q3+q4;
			$("#"+results).fadeIn();
			$(".result_page").fadeIn();
			$("#" + thisquestion).hide();
			$(".questions").hide();
		}
	});
		
	function getIndicator () {
		question_counter++;
		$(".question_header").find("h1").remove();
		$(".question_header").append("<h1>" + "Question " + question_counter + " of 20" + "</h1>");
		calcRank ();
		popQuestionfooter ();
	}
	
	function calcRank () {
		if (introvert_cnt < extrovert_cnt) {introvert = "Extroverted";q1="E";} 
		else if (introvert_cnt > extrovert_cnt) {introvert = "Introverted";q1="I";} 
		else {introvert = "?";}
		
		if (intuition_cnt < sensing_cnt) {intuition = "Sensing";q2="S";} 
		else if (intuition_cnt > sensing_cnt) {intuition = "iNtiutive";q2="N";} 
		else {intuition = "?";}
		
		if (feeling_cnt < thinking_cnt) {feeling = "Thinking";q3="T";} 
		else if (feeling_cnt > thinking_cnt) {feeling = "Feeling";q3="F";} 
		else {feeling = "?";}
		
		if (judging_cnt < perceiving_cnt) {judging = "Perceiving";q4="P";} 
		else if (judging_cnt > perceiving_cnt) {judging = "Judging";q4="J";} 
		else {judging = "?";}
		
	}
	
	function popQuestionfooter () {
		var c1="";
		var c2="";
		var c3="";
		var c4="";
		if (introvert!=="") {c1 = introvert;} 
		if (intuition!=="") {c2 =" | " + intuition;}
		if (feeling!=="") {c3 = " | " + feeling;}
		if (judging!=="") {c4 = " | " + judging;}
		indicator = c1 + c2 + c3 + c4;
		$(".question_footer").find("p").remove();
		$(".question_footer").append("<p>" + indicator + "</p>");
	}
	
	function resetVariables() {
		question_counter = 1;
		introvert_cnt = 0;
		extrovert_cnt = 0;
		intuition_cnt = 0;
		sensing_cnt = 0;
		feeling_cnt = 0;
		thinking_cnt = 0;
		judging_cnt = 0;
		perceiving_cnt = 0;
		indicator_cnt = "";
		introvert = "";
		intuition = "";
		feeling = "";
		judging = "";
		indicator = "";
		results = "";
		q1 = "";
		q2 = "";
		q3 = "";
		q4 = "";
		$(".question_footer").find("p").remove();
		$(".question_header").find("h1").remove();
		$(".question_header").append("<h1>" + "Question " + question_counter + " of 20" + "</h1>");
		$(".question").hide();
		$(".result").hide();
	}
	
	
});