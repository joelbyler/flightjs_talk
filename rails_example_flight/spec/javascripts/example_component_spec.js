describe("ExampleComponent", function() {
  beforeEach(function() {
    loadFixtures("example.html");
  });

  it("basic initialization", function() {
    ExampleComponent.attachTo('.example-form');

    expect($(".example-summary").val()).toEqual("");
  });

  it("include name in json summary", function() {
    $('#example_name').val('joe');

    ExampleComponent.attachTo('.example-form');

    expect($(".example-summary").html()).toMatch('joe');
  });
});
