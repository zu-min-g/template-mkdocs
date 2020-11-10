mermaid.initialize({
  'theme': 'dark',
  'themeVariables': {
  },
});

window.addEventListener('load', function () {
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
});
