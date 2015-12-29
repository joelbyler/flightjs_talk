describe("ExampleComponent", function() {
  beforeEach(function() {
    loadFixtures("example.html");
  });

  it("basic initialization", function() {
    ExampleComponent.attachTo('.example-form');

    expect($(".example-summary").val()).toEqual("");
  });

  it("include name to json summary", function() {
    var test_name = 'joe'
    $('#example_name').val(test_name);

    ExampleComponent.attachTo('.example-form');

    expect($(".example-summary").html()).toMatch(test_name);
  });
});
