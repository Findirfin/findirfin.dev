$(document).ready(function() {
  
   // Get the user's operating system, browser, and device type
    const parser = new UAParser();
    const os = parser.getOS().name + ' ' + parser.getOS().version;
    console.log('OS:', os);
    const browser = parser.getBrowser().name + ' ' + parser.getBrowser().version;
    console.log('Browser:', browser);
    const deviceType = parser.getDevice().type || 'Unknown';
    console.log('Device type:', deviceType);
  
    // Get the referrer URL (if any)
    let referrer = document.referrer || 'Direct';
    if (referrer && referrer !== '') {
      const a = document.createElement('a');
      a.href = referrer;
      referrer = a.hostname;
    }
    console.log('Referrer:', referrer);
  
    // Attempt to get the user's IP address using an external API
    $.getJSON("https://api.ipify.org?format=json")
      .done(function(data) {
        const ip = data.ip;
        console.log('IP address:', ip);
  
        // Combine all the user info into a string
        const userInfo = `Operating System: ${os}\nBrowser: ${browser}\nDevice Type: ${deviceType}\nReferrer: ${referrer}\nIP Address: ${ip}`;
  
        // Display the user info in the textarea element
        $('#user-info-display').val(userInfo);
      })
      .fail(function() {
        console.log('Failed to get IP address from API');
  
        // Combine all the user info into a string (without IP address)
        const userInfo = `Operating System: ${os}\nBrowser: ${browser}\nDevice Type: ${deviceType}\nReferrer: ${referrer}\nFailed to get IP address from API`;
  
        // Display the user info in the textarea element
        $('#user-info-display').val(userInfo);
      });
  });
  