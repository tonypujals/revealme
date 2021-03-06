// vendor
var markdown = require('marked-sections');

module.exports = convertMarkdown;

markdown.setOptions({
	levels: 2,
	hierarchy: true,
	promoteHr: false,
	deep: true,
	gfm: true,
	sanitize: true,
	tables: true,
	breaks: false,
	pedantic: false,
	smartLists: true,
	smartypants: true
});

function convertMarkdown(md, singleWrap) {
	return markdown.parse(md, { hierarchy: singleWrap ? false : true });
}
