const tBody = document.querySelector('tbody');

let requestURL = './json/list.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  const dataList = request.response;
  showList(dataList);
}

function showList(jsonObj) {
  const lists = jsonObj['data'];

  for (let i = 0; i < lists.length; i++) {
    const tableTr = document.createElement('tr');
    const tableTh = document.createElement('th');
    const tableTd1 = document.createElement('td');
    const tableTd2 = document.createElement('td');

    tBody.appendChild(tableTr);
    tableTr.appendChild(tableTh).classList.add('w20');
    tableTh.innerHTML = '<a href="' + lists[i].uri + '"><img src="' + lists[i].image + '" class="w200"></a>';
    tableTr.appendChild(tableTd1);
    tableTd1.innerHTML = '<a href="' + lists[i].uri + '">' + lists[i].title + '</a>';
    tableTr.appendChild(tableTd2);
    tableTd2.innerHTML = lists[i].detail.user + ' <span class="badge">' + lists[i].detail.count + '</span><br>' + lists[i].detail.dttm.slice(0, 10);
  }
}
