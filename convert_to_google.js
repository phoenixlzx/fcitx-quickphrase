/*
* Convert fcitx QuickPhrase to Google Pinyin Dict file.
* Phoenix Nemo <i@phoenixlzx.com> | License MIT
**/

var freq = '3';

var fs = require('fs');

fs.readFile('./QuickPhrase.mb', 'utf8', function(err, data) {  
	
	data = data.split('\n');
	
	var google_dict = '';
	
	data.forEach(function(emojiline) {
	
		// console.log(emojiline.split(/\s(.+)?/));
		var emoji = emojiline.split(/\s(.+)?/);
		
		if (emoji[0]) {
			
			// http://www.google.com/intl/zh-CN/ime/pinyin/dictapi.html
			google_dict += emoji[1] + '\t' + freq + '\t' + emoji[0] + '\n';
			
		}
		
	});
	
	fs.writeFile('./Google_Emoji_Dict.dic', google_dict, function(err) {
		
		if (err) throw err;
				 
		console.log('Convert success.');
		
	});
	
});