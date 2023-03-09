// get elements by id
var saveBtn = $('.saveBtn');
var currentDay = $('#currentDay');
var savedItem = $('#savedItem');

// object for today's date
var todayDate = dayjs();
var dayWeek = todayDate.format('dddd');

// call to jquery
$(function () {
  saveBtn.on("click", function(){
    // calls on save btn and grabs parent id
    var time = $(this).parent().attr("id");
    // grabs user input
    var value = $(this).siblings(".description").val();
    // sets user input and time in local storage
    localStorage.setItem(time, value);
  });

  // function that adds/removes css class based on currentHour
  function updateHour(){
    // grab hour from dayjs
    var currentHour = dayjs().hour();
    // array that tests whether currentHour matches hour in array
    var hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    // run through array and apply css class that matches hour
    hourArr.forEach(hour => {
      if(hour === currentHour){
        // hour in array === currentHour ; set present 
        $(".description").addClass("present")
        $(".description").removeClass("past")
        $(".description").removeClass("future")
      } else if (hour < currentHour){
        // if hour in array < currentHour ; set past  
        $(".description").removeClass("present")
        $(".description").addClass("past")
        $(".description").removeClass("future")
      } else {
        // if hour in array > currentHour ; set future 
        $(".description").removeClass("present")
        $(".description").removeClass("past")
        $(".description").addClass("future")
      }
    });
  }

  // calls function to update css
  updateHour()

  // retrieves data from local storage
  $("$9 .description").val(localStorage.getItem('9'));
  $("$10 .description").val(localStorage.getItem('10'));
  $("$11 .description").val(localStorage.getItem('11'));
  $("$12 .description").val(localStorage.getItem('12'));
  $("$13 .description").val(localStorage.getItem('13'));
  $("$14 .description").val(localStorage.getItem('14'));
  $("$15 .description").val(localStorage.getItem('15'));
  $("$16 .description").val(localStorage.getItem('16'));
  $("$17 .description").val(localStorage.getItem('17'));

  // displays date and weekday in header
  $('#currentDay').text(dayWeek + ',' + todayDate.format("MMM D, YYYY"));
});
