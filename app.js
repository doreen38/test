$(document).ready(function(){
   $("#myform").validate({
      rules:{
         firstname: {
         required: true,
         }, 
         middlename: {
           required: true,
         },
         lastname: {
           required: true,
         }, 
         dob: {
           required: true,
         },
         phoneNum: {
            required: true,
            maxlength: 11,
            minlength: 11,
         },
         sex: {
            required: true,
         },  
         country: {
            required: true, 
         },   
         state:{
            required: true,
         }, 
         localGv:{
           required: true,
          }
      }
   })
});
$(document).ready(function() {
   $('#tableList').DataTable();
} );










