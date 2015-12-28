$(document).ready(function () {
  function ExampleComponent() {
    this.attributes({
      name: "#example_name",
      email: "#example_email",
      gender: "input[name=example\\[gender\\]]:checked",
      agree: "#example_agree",
      summary: ".example-summary",
    });

    this.example = function() {
      return JSON.stringify({
        name: this.select('name').val(),
        email: this.select('email').val(),
        gender: this.select('gender').val(),
        agree: this.select('agree').prop("checked")
      }, null, 2);
    }

    this.refreshSummary = function(){
      this.select('summary').text(this.example());
    }

    this.after('initialize', function () {
      this.on('keyup', this.refreshSummary);
      this.on('change', this.refreshSummary);
      this.trigger('change');
    });
  }

  flight.component(ExampleComponent).attachTo('.example-form');
});
