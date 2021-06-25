$(function(){

    $('#reset').click(function(){
        chrome.storage.sync.set({'name': ""}, function(){

            var notifOptions = {
                type: "basic",
                iconUrl: "48.png",
                title: "Resetting name",
                message: "Name has been reset to empty."
            };

            chrome.notifications.create('resetNotif'+new Date().getTime(), notifOptions);

        });
    });
});
