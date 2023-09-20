document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("processNames");

  button.addEventListener("click", function () {
    var names = [
      "Yaakov",
      "John",
      "Jen",
      "Jason",
      "Paul",
      "Frank",
      "Larry",
      "Paula",
      "Laura",
      "Jim",
    ];

    names.forEach(function (name) {
      const isGoodbye = startsWithJ(name);
      printGreeting(name, isGoodbye);
    });
  });
});
