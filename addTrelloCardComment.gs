const API_URL = 'https://api.trello.com/1/';
const TRELLO_KEY = 'xxxx';
const TRELLO_TOKEN = 'xxxx';
const TRELLO_USERNAME = 'xxxx';
const BOARD_ID = 'xxxx';
const LIST_ID = 'xxxx';
const CARD_ID = 'xxxx';

function request(url, method='get') {
  return UrlFetchApp.fetch(url, { 'method': method });
}

function getTrelloBoardData() {
  const url = API_URL + 'members/' + TRELLO_USERNAME + '/boards?key=' + TRELLO_KEY + '&token=' + TRELLO_TOKEN + '&fields=name';
  response = request(url);
  Logger.log(response);
}

function getTrelloListData() {
  const url = API_URL + 'boards/' + BOARD_ID + '/lists?key=' + TRELLO_KEY + '&token=' + TRELLO_TOKEN + '&fields=name';
  response = request(url);
  Logger.log(response);
}

function getTrelloCardData() {
  const url = API_URL + 'lists/' + LIST_ID + '/cards?key=' + TRELLO_KEY + '&token=' + TRELLO_TOKEN + '&fields=name';
  response = request(url);
  Logger.log(response);
}

function addTrelloCardComment() {
  const text = 'これはテストです。';
  const url = API_URL + 'cards/' + CARD_ID + '/actions/comments?key=' + TRELLO_KEY + '&token=' + TRELLO_TOKEN + '&text=' + text;
  response = request(url, 'post');
  Logger.log(response);
}
