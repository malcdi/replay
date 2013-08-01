populate_data(sentences);

$('#form_input').keyup(function(e){
	console.log("Our regular expression is: " + $("#form_input").val());
	var re = new RegExp($("#form_input").val());
	matchSentences(sentences, re);
})

function populate_data(text){
	for(var i = 0; i < text.length; i++){
		text[i]["displayedText"] = text[i].text;
		$('#sentence_div').append("<p id=\"para" + i + "\">" + text[i].displayedText + "</p>");
	}
}

function matchSentences(text, regexp){
	for(var i = 0; i < text.length; i++){
		var tmpTxt = text[i].text;
		matchLength = tmpTxt.match(regexp) == null ? -1 : tmpTxt.match(regexp)[0].length;
		startInd = tmpTxt.search(regexp);
		console.log(matchLength + " and " + startInd);
		var newTxt = tmpTxt;
		if(startInd >= 0){
		 newTxt = tmpTxt.substring(0, startInd) + "<font color=\"red\">" + tmpTxt.match(regexp)[0] + "</font>" + tmpTxt.substring(startInd + matchLength);
		}
		text[i]["displayedText"] = newTxt;
		$("#para" + i + "").html(text[i]["displayedText"]);
	}
}