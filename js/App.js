
$(document).ready(function(){
  $("#Birthday").submit(function(event){
    event.preventDefault();
    var Birthday=$("input#Date").val();
    var Gender=$("select#Gender").val();


    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var MaleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var FemaleNames = ['Akosia', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    var d = new Date(Birthday);
    var dayName = days[d.getDay()];
    var Name="";

    if (Gender == "Male") {
      switch (dayName) {
        case 'Sunday':
        Name = MaleNames[0];
          break;
      case 'Monday':
        Name = MaleNames[1];
        break;
      case 'Tuesday':
        Name = MaleNames[2];
        break;
      case 'Wednesday':
        Name = MaleNames[3];
        break;
      case 'Thursday':
        Name = MaleNames[4];
        break;
      case 'Friday':
        Name = MaleNames[5];
        break;
     case 'Saturday':
        Name = MaleNames[6];
        break;
        default:
      }
    }
    else {
      switch (dayName) {
        case 'Sunday':
        Name = FemaleNames[0];
          break;
      case 'Monday':
        Name = FemaleNames[1];
        break;
      case 'Tuesday':
        Name = FemaleNames[2];
        break;
      case 'Wednesday':
        Name = FemaleNames[3];
        break;
      case 'Thursday':
        Name = FemaleNames[4];
        break;
      case 'Friday':
        Name = FemaleNames[5];
        break;
     case 'Saturday':
        Name = FemaleNames[6];
        break;
        default:
      }
    }

    document.getElementById("name").innerHTML = "Your Name in Ghana is  <strong>"+Name+"</strong> "+" Because you were born on "+dayName;

  });
});
