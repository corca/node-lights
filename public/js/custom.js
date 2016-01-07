function sendCommand(code) {
  $.ajax({
    method: "GET",
    url: "/send/" + code
  });
}
