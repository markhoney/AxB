const allwords = require('an-array-of-english-words');

function wordStubs(length) {
	var words = allwords.filter(w => w.length == length);
	var result = [[]];
	for (var i = 1; i < length; i++) {
		result[i] = words.map(w => w.slice(0, i)).filter((v, i, s) => s.indexOf(v) === i);
	}
	result[length] = words;
	return result;
}

function wordStubObjects(length) {
	var words = allwords.filter(w => w.length == length);
	var result = {};
	for (var word in words) {
		var wordletter = result;
		var wordarray = words[word].split("");
		for (var letter in wordarray) {
			if (!(wordarray[letter] in wordletter)) {
				wordletter[wordarray[letter]] = {};
			}
			//!(wordarray[letter] in wordletter) && (wordletter[wordarray[letter]] = {});
			wordletter = wordletter[wordarray[letter]];
		}
	}
	return result;
}


function checkLengths(lengths) {
	if (lengths.length == 0) {
		lengths = [7, 3];
	} else if (lengths.length == 1) {
		lengths.push(lengths[0]);
	} else {
		lengths = lengths.slice(0, 2);
	}	
	return lengths;
}


function wordLists(lengths) {
	var wordlists = [wordStubs(lengths[0])];
	if (lengths[1] == lengths[0]) {
		wordlists[1] = wordlists[0];
	} else {
		wordlists[1] = wordStubs(lengths[1]);
	}
	return wordlists;
}


var words = [];

function printResult(words) {
	for (var word in words) {
		console.log(words[word].split("").join(" "));
	}
	console.log("");
	console.log("Total:", total);
	console.log("Time:", process.hrtime(start)[0] + 's');
	console.log("");
	console.log("");
}

const reCurseWords = function(depth = 1) {
	for (var a in wordlists[0][lengths[0]]) {
		words[depth - 1] = wordlists[0][lengths[0]][a];
		var valid = true;
		for (var i = 0; i < lengths[0]; i++) {
			var down = "";
			for (var j = 0; j < depth; j++) {
				down += words[j][i];
			}
			if (!wordlists[1][depth].includes(down)) {
				valid = false;
				break;
			}
		}
		if (valid) {
			if (depth < lengths[1]) {
				reCurseWords(depth + 1);
			} else {
				total++;
				printResult(words);
			}
		}
	}
};

console.log(wordStubObjects(7));

/*
const lengths = checkLengths([5, 5]);
const wordlists = wordLists(lengths);
var total = 0;
const start = process.hrtime();	

console.log(lengths[0] + " letter words: " + wordlists[0][lengths[0]].length);
console.log(lengths[1] + " letter words: " + wordlists[1][lengths[1]].length);
console.log("");*/

//reCurseWords();
//console.log("Time:", process.hrtime(start)[0] + 's');
