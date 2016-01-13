function sendCommand(code) {
  console.log(
    $.ajax({
      method: "GET",
      url: "/send/" + code
    })
  );
}
