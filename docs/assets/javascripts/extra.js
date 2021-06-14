(function () {
  function initializeMermaid() {
    var schema = document.body.getAttribute("data-md-color-scheme");
    var isDarkMode = schema == "slate";
    mermaid.initialize({
      'theme': isDarkMode ? 'dark' : 'base',
      'themeVariables': {
      },
    });
  }

  window.addEventListener('load', function () {
    initializeMermaid();
    var svgs = d3.selectAll(".mermaid svg");
    svgs.each(function() {
      var svg = d3.select(this);
      svg.html("<g>" + svg.html() + "</g>");
      var inner = svg.select("g");
      var zoom = d3.zoom().filter(function (event) {
        return event.shiftKey;
      }).on("zoom", function(event) {
        inner.attr("transform", event.transform);
      });
      svg.call(zoom);
    });

    var options = document.getElementsByClassName("md-option");
    for (var elem of options) {
      elem.addEventListener('change', () => {
        initializeMermaid();
      });
    }
  });
})();
