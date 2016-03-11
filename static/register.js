var sub = d3.select("#sub")
var subuse = false;

var subform = ['<legend>Substitute Player</legend>',
	       '<p>This is your substitute player. You may only have one substitute player. The substitute may replace any part of your roster, however, if your team captain is not present, you will need to give the responsibility to one of the players (to make check-in easier).',
	       '<div class="pure-g">',
	       '<div class="pure-u-5-24">',
	       '<label for="fname6">First Name</label>',
	       '<input id="fname6" type="text" name="fname6" placeholder="First Name"><br>',
	       '</div>',
	       '<div class="pure-u-5-24">',
	       '<label for="lname6">Last Name</label>',
	       '<input id="lname6" type="text" name="lname6" placeholder="Last Name"><br>',
	       '</div>',
	       '<div class="pure-u-5-24">',
	       '<label for="id6">Stony Brook ID Number</label>',
	       '<input id="id6" type="text" name="id6" placeholder="9-Digit ID"><br>',
	       '</div>',
	       '</div>',
	       '<div class="pure-g">',
	       '<div class="pure-u-5-24">',
	       '<label for="sname6">Summoner Name</label>',
	       '<input id="sname6" type="text" name="sname6" placeholder="In-Game Name"><br>',
	       '</div>',
	       '<div class="pure-u-5-24">',
	       '<label for="tier6">Rank Tier</label>',
	       '<select id="tier6" name="tier6" class="pure-input-1-2">',
	       '<option>Unranked</option>',
	       '<option>Bronze</option>',
	       '<option>Silver</option>',
	       '<option>Gold</option>',
	       '<option>Platinum</option>',
	       '<option>Diamond</option>',
	       '<option>Master</option>',
	       '<option>Challenger</option>',
	       '</select><br>',
	       '</div>',
	       '<div class="pure-u-5-24">',
	       '<label for="division6">Rank Division</label>',
	       '<select id="division6" name="division6" class="pure-input-1-2">',
	       '<option>Unranked</option>',
	       '<option>I</option>',
	       '<option>II</option>',
	       '<option>III</option>',
	       '<option>IV</option>',
	       '<option>V</option>',
	       '</select><br>',
	       '</div>',
	       '<div class="pure-u-5-24">',
	       '<label for="desktop6">',
	       '<input id="desktop6" type="radio" name="computer6" value="desktop" checked>',
	       'Desktop',
	       '</label>',
	       '<label for="laptop6">',
	       '<input id="laptop6" type="radio" name="computer6" value="laptop">',
	       'Laptop',
	       '</label>',
	       '</div>',
	       '</div><br><br>'].join("");
var subfalse = '<input type="hidden" name="subinuse" value="false" id="subinuse">';
var subtrue = '<input type="hidden" name="subinuse" value="true" id="subinuse">';

var subbutton = d3.select("#subbutton")
    .on("click", function() {
	if (subuse) {
	    sub.html("");
	    subbutton.text("Add Substitute Player");
	    d3.select("#subinusetag")
		.html(subfalse);
	    subuse = false;
	}
	else {
	    sub.html(subform);
	    subbutton.text("Remove Substitute Player");
	    d3.select("#subinusetag")
		.html(subtrue);
	    subuse = true;
	}
    });
	
