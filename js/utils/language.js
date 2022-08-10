// ************ Language ************
var languages = ["en", "zh"]

var languageArr = {
	en: {
		1: "en"
	},
	zh: {
		1: "zh"
	},
}
function changeLanguages() {
	loadProperties(options.language)
}
function getLanguageName() {
	return options.language? options.language : "en";
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
function loadProperties(lang) {
	console.log(lang)
	jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
        name: 'lang', //资源文件名称
        path:'js/i18n/', //资源文件路径
        language: lang,
        cache: false,
		encoding: 'UTF-8',
        mode:'map', //用Map的方式使用资源文件中的值
        callback: function() {//加载成功后设置显示内容
          for(var i in $.i18n.map){
			  console.log($.i18n.map[i])
            $('[data-lang="'+i+'"]').text($.i18n.map[i]);
          }
          document.title = $.i18n.map['title'];
        }
      });
}  