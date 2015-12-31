var HappyFilterComponent = (function() {
  return flight.component(function() {
    this.attributes({
      visible: false,
    });

    this.toggleFilter = function() {
      this.attr.visible = !this.attr.visible;
      this.trigger(document, 'happyFilterChanged', {
        icon: this.$node.data('icon'),
        visible: this.attr.visible
      });
    }

    this.after('initialize', function() {
      this.on('click', this.toggleFilter);
    });
  });
})();

$(document).ready(function () {
  HappyFilterComponent.attachTo('.happy-toggle');
});
