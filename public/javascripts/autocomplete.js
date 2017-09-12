$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    var cache = {};
    $( "#tags" ).autocomplete({
      source: function (request, response) {
           $.ajax({
               url: "/apis/autocomplete/" + request.term,
               dataType:'json',
               type: "GET",
               success: function (data) {
                   console.log(data);
                   response(data);
               }
           });
      }
  });
  } );