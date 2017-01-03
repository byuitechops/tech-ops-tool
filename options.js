//EXAMPLE OPTIONS PAGE FROM DEVELOPER.CHROME.COM

 // Saves options to chrome.storage
function save_options() {
    var alltoggle = document.getElementById('alltoggle').checked;
  var htmltoggle = document.getElementById('htmltoggle').checked;
  var linktoggle = document.getElementById('linktoggle').checked;
  chrome.storage.sync.set({
      allsetting: alltoggle,
    htmlsetting: htmltoggle,
    linksetting: linktoggle
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

  chrome.storage.sync.get({
      allsetting: true,
    htmlsetting: true,
    linksetting: true
  }, function(items) {
      document.getElementById('alltoggle').checked = items.allsetting;
    document.getElementById('htmltoggle').checked = items.htmlsetting;
    document.getElementById('linktoggle').checked = items.linksetting;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);



// Actual settings, do not delete!
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#alltoggle').addEventListener('change', allHandler);

    // THE "ENABLE ALL" SWITCH TURNS ON/OFF ALL FEATURES
    function allHandler() {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    }

});

