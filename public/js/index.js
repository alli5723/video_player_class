function showDataOnPage(dataString) {
  console.log(dataString.items[2]);

  const views1 = 5843905;

  document.getElementById('app').innerHTML = `
  <h1>Video Player Class</h1>
  <iframe width="100%" height="315"
  src="https://www.youtube.com/embed/${dataString.items[0].id}?autoplay=1">
  </iframe>
  <div style="padding: 10px;">
    ${views1.toLocaleString()}
  </div>

  </div>
  <div style="width: 100%; display: table;">
      <div style="display: table-row">
          <div style="width: 50%; display: table-cell;"> 
            <iframe width="100%" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
            </iframe>
          </div>
          <div style="display: table-cell;">
            <iframe width="100%" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
            </iframe>
          </div>
      </div>

      <div style="display: table-row">
          <div style="width: 50%; display: table-cell;"> 
            <iframe width="100%" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
            </iframe>
          </div>
          <div style="display: table-cell;">
            <iframe width="100%" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
            </iframe>
          </div>
      </div>
  </div>
  `;
}

fetch('/api/file.json')
  .then((rawResponse) => rawResponse.json())
  .then((response) => {
    console.log(response);
    showDataOnPage(response);
  });
