function sendCommand(code) {
    $.ajax({
      type: 'POST',
      data: JSON.stringify({codes:code}),
      url: '/',
      contentType: 'application/json',
      dataType: 'json'
    });
}
