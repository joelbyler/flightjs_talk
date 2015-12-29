var ListComponent = (function() {
  return flight.component(function() {
    this.defaultAttrs({
      items: []
    });

    this.after('initialize', function() {
      this.templates({
        list: '#list'
      });

      this.$node.append(this.render('list', this.attr));
    });
  }, withHandlebarsView);
})();

$(document).ready(function () {
  $.get('/happy.json', function( items ) {
    ListComponent.attachTo('#list-component', {
        items: items
    });
  });
});
