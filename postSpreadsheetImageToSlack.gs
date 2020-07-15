var SPREADSHEET_SHEET_NAME = 'DailyReport';
var SPREADSHEET_BOOK_ID = 'xxxx';

var SLACK_API_URL = 'https://slack.com/api/files.upload';
var SLACK_TOKEN = 'xxxx';

function postSpreadsheetImageToSlack() {
	var payload = {
		'token': SLACK_TOKEN,
		'channels': 'analytics',
		'file': getSpreadsheetImage(),
		'filename': 'analytics_report'
	};

	var params = {
		'method': 'post',
		'payload': payload
	};

	UrlFetchApp.fetch(SLACK_API_URL, params);
}

function getSpreadsheetImage() {
	var book  = SpreadsheetApp.openById(SPREADSHEET_BOOK_ID);
	var sheet = book.getSheetByName(SPREADSHEET_SHEET_NAME);
	var image = sheet.getCharts()[0].getBlob().getAs('image/png').setName('chart.png');
	return image
}
