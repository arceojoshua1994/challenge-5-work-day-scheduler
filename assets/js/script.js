$(document).ready(function() {
  function updateEventColors() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
      var timeBlockHour = parseInt($(this).data("hour"));

      if (timeBlockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  function loadEvents() {
    $(".time-block").each(function() {
      var timeBlockId = $(this).data("hour");
      var savedEvent = localStorage.getItem(timeBlockId);
      if (savedEvent) {
        $(this).find(".description").val(savedEvent);
      }
    });
  }

  function initScheduler() {
    // Display the current day at the top of the calendar
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

    // Add event listeners to the save buttons using event delegation
    $(".container-lg").on("click", ".saveBtn", function() {
      var timeBlock = $(this).closest(".time-block");
      var timeBlockId = timeBlock.data("hour");
      var eventText = timeBlock.find(".description").val();
      localStorage.setItem(timeBlockId, eventText);
    });

    // Load saved events from local storage
    loadEvents();

    // Update time block colors based on the current time
    updateEventColors();
  }

  initScheduler();
});
