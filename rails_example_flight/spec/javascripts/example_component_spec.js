describe("ExampleComponent", function() {
  beforeEach(function() {
    loadFixtures("example.html");
  });

  it("basic initialization", function() {
    ExampleComponent.attachTo('.example-form');

    expect($(".example-summary").val()).toEqual("");
  });

  describe("name equals joe", function() {
    beforeEach(function() {
      $('#example_name').val('joe');
      ExampleComponent.attachTo('.example-form');
    });

    it("includes name in json summary", function() {
      expect($(".example-summary").html()).toMatch('joe');
    });

    it("name changes in summary", function() {
      ChangeValue('#example_name','sally');
      expect($(".example-summary").html()).toMatch('sally');
    });
  });
});
