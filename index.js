var xhr = new XMLHttpRequest();
xhr.open('GET', document.location + '/data.json');
xhr.onload = useData;
xhr.send();

function useData() {
  if (this.status === 200) {
    var data = JSON.parse(this.responseText);
    loadPaellaWithData(data);
  }
  else {
    throw new Error('Error while making request. XHR status: ' + this.status);
  }
}

function loadPaellaWithData(data) {
  paella.load(
    'playerContainer',
    {
      data: data
    }
  );
}
