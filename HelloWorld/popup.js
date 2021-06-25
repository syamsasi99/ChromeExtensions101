$(function(){

    $(document).ready(function() {
         chrome.storage.sync.get(['name'],function(data){
           if(data.name){
             $('#hello').text('Welcome ' + data.name)
         }
       });
    });

    $('#my_name').keyup(function(){
         $('#hello').text('Welcome ' + $('#my_name').val())
    })

    $('#saveName').click(function(){
       chrome.storage.sync.get(['name'],function(data){
           var newName=$('#my_name').val()
           var previousName=data.name

           chrome.storage.sync.set({'name': newName}, function(){
             if(newName!=previousName){
                   var notifOptions = {
                       type: "basic",
                       iconUrl: "48.png",
                       title: "Success!",
                       message: "Name updated as "+newName
               };
               chrome.notifications.create('update'+new Date().getTime(), notifOptions);
             }
           });
           $('#hello').text('Welcome ' + newName);
           if(previousName){
             $('#previous_name').text('Previous name was ' + previousName);
           }
       });
   });
});
