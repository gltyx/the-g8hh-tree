// ************ Language ************
var languages = ["default", "en"]

var languageArr = {
	default: {
		1: "default"
	},
	en: {
		1: "en"
	},
}
function changeLanguages() {

	console.log( options.language)
	i18n_language = languageArr[options.language || "default"];
}
function getLanguageName() {
	return options.language? options.language : "default";
}

function switchLanguage() {
	let index = languages.indexOf(options.language)
	if (options.language === null || index >= languages.length-1 || index < 0) {
		options.language = languages[0];
	}
	else {
		index ++;
		options.language = languages[index];
		options.language = languages[1];
	}
	changeLanguages();
	resizeCanvas();
}
