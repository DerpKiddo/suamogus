function showContextMenu(event) {
      event.preventDefault(); // Prevent the default context menu from showing up
      var contextMenu = document.getElementById("contextMenu");
      contextMenu.style.left = event.clientX + "px";
      contextMenu.style.top = event.clientY + "px";
      contextMenu.style.display = "block";
    }

    function hideContextMenu() {
      var contextMenu = document.getElementById("contextMenu");
      contextMenu.style.display = "none";
    }

function tabCloak() {
  var newTitle = prompt('Tab Cloak\n\nEnter new Tab Title:');
  var newIcon;
  switch (prompt('Choose new tab icon:\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL')) {
    case '1':
      newIcon = 'https://www.google.com/favicon.ico';
      break;
    case '2':
      newIcon = 'https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png';
      break;
    case '3':
      newIcon = prompt('Enter Custom Tab Icon URL:');
      break;
  }

  localStorage.setItem('tabTitle', newTitle);
  localStorage.setItem('tabIcon', newIcon);

  document.title = newTitle;
  var icon = document.querySelector('link[rel="icon"]');
  icon.setAttribute('href', newIcon);
alert('Please refresh the page for changes to take effect.');
}

function openWindow() {
    let url = window.location.href;
    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999");
    w.document.write('<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + url + '"></iframe>');
  }

    // Add event listeners to show/hide the context menu
    document.addEventListener("contextmenu", showContextMenu);
    document.addEventListener("click", hideContextMenu);