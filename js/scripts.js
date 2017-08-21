//BACK END LOGIC
function Destination(location, startDate, endDate, landmarks, notes) {
this.location = location;
   this.startDate = startDate;
   this.endDate = endDate;
   this.landmarks = landmarks;
    this.notes = notes;
};
console.log('constructor');
function resetFields() {
    $("input#location").val("");
    $("input#start-date").val("");
    $("input#end-date").val("");
    $("input#landmarks").val("");
    $("textarea#notes").val("");

};
console.log('resetfields');

//FRONT END LOGIC
$(document).ready(function () {
    console.log('document');
    $("button#add-landmark").click(function(){
        $(".extra-landmark").append('<div class="extra-landmark" >'+'<label for="landmarks">' + '<input type="text" size="35px" class="form-control " id="landmarks" >' + '</label>' + '<br />');
    });
    console.log('addlandmark');
    $("form#new-destination").submit(function (event) {
        event.preventDefault();

        var inputtedLocation = $("input#location").val();
        var inputtedStartDate = $("input#start-date").val();
        var inputtedEndDate = $("input#end-date").val();
         var inputtedLandmark = $("input#landmarks").val();
        var inputtedNotes = $("textarea#notes").val();
    

        var newDestination = new Destination(
            inputtedLocation,
            inputtedStartDate,
            inputtedEndDate,
            inputtedLandmark,
            inputtedNotes,
        );
console.log('newdestination');
        $("ul#destinations").append("<li><span class='new-location'>" + newDestination.location + "</span></li>");
        
        resetFields();

        $(".new-location").last().click(function () {
            $("#show-destination").show();
            $("#show-destination h2").text(newDestination.location);
            $(".the-location").text(newDestination.location);
            $(".start-date").text(newDestination.startDate);
            $(".end-date").text(newDestination.endDate);
             $(".landmarks").text(newDestination.landmarks);
                $(".notes").text(newDestination.notes);
            });
           
        });
     });
