function validate(){
    
    var row = 1;
    var flag = 0;
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    
    var gender = document.getElementsByName('gender');
    var gender_value;
    for(var i = 0; i < gender.length; i++){
      if(gender[i].checked){
        gender_value = gender[i].value;
        flag = 1;
      } 
    }

    var fooditems = document.getElementsByClassName('fooditem');
    var str = "";
    for(i=0 ; i<5 ; i++){
      if(fooditems[i].checked === true){
        str += fooditems[i].value + " ";
      }
    }
    var a = ((str.trim()).split(" ")).join(", ");
    var foodItemLength = ((str.trim()).split(" ")).length;

    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;


   

     if(firstName == ""){
       alert("Enter First Name")
     }
    else if(lastName == ""){
      alert("Enter Last Name")
    }
    else if(address == ""){
      alert("Enter Adress")
    }
    else if (!(/^(\d{5}|\d{6})$/.test(pincode))){ 
      alert("Enter Pincode in Proper Format");
    }
    else if(flag == 0){
      alert("Enter Gender");
    }
    else if(foodItemLength < 2){
      alert("Select food items TWO or More");
    }
    else if(state == ""){
      alert("Enter State");
    }
    else if(country == ""){
      alert("Enter Country");
    }
    else {

    var display = document.getElementById('tab');
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerText = firstName;
    cell2.innerText = lastName;
    cell3.innerText = address;
    cell4.innerText = pincode;
    cell5.innerText = gender_value;
    cell6.innerText = a;
    cell7.innerText = state;
    cell8.innerText = country;

    i++;
    var xyz = document.getElementById('form1');
    xyz.reset();
    }
}


    
 
