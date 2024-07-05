
/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45 */

function timeConversion(s) {
    // Write your code here

   // var inputTime = s.split("");
    var [hours, minutes, secondsPeriod] = s.split(":");
     var seconds = secondsPeriod.slice(0,2);
    var period = secondsPeriod.slice(2);
    console.log(period);
    console.log(hours);

    if(hours != 12 && period === "PM"){
       hours = parseInt(hours) + 12;

    } else if(hours == 12 && period === "PM"){
        hours = 12;
    }
    else if(hours == 12 && period === "AM"){
        hours = "00" ;
    }
    console.log(hours,minutes, seconds);
    return (hours, minutes, seconds);
    // template literal to create a formatted string.
    //return `${hours}:${minutes}:${seconds}`;
    

}

timeConversion("12:45:54PM");