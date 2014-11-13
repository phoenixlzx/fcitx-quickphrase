/*
* Convert fcitx QuickPhrase.mb to RIME Dict
* Phoenix Nemo <i@phoenixlzx.com> | MIT License
*/

var fs = require('fs');

fs.readFile('QuickPhrase.mb', 'utf8', function(err, data) {
	if (err) throw err;
	
	var lines = data.split('\n');
	var dicts = '';
	lines.forEach(function(line) {
		dicts += line.slice(0, line.indexOf(' ')) + '\t' + line.slice(line.indexOf(' ') + 1) + '\n'
	});
	
	fs.writeFile('emoji.dict.yaml', dicts, function(err) {
		if (err) throw err;
		console.log('done.');
	});
});