$(document).ready(function() {
  // Display the current day at the top of the calendar
  var currentDay = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDay);

  // Add event listeners to the save buttons
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, eventText);
  });

  // Load saved events from local storage
  function loadEvents() {
    $(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var savedEvent = localStorage.getItem(timeBlockId);
      if (savedEvent) {
        $(this).find(".description").val(savedEvent);
      }
    });
  }
  loadEvents();

  // Update time block colors based on the current time
  function updateTimeBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  updateTimeBlocks();
});