# crypto-ticker

Raspberry Pi Setup:

    Install Raspian on the SD card - Official guide/download can be found here
    Install the display drivers - If you are using the display from the parts list the official guide/download can be found here
    Download the code from here and unzip the files into a sensible location on your Pi e.g. /home/piticker
    Assemble your case and connect the display to the raspberry Pi using the 40 pin connector, connect the HDMI and power it up. At this point you should have a functioning Raspberry Pi, woo!
    Connect the Pi to a WiFi network.
    Open terminal on the raspberry Pi and type the following command to launch the Chromium browser with the web app in fullscreen mode.
    chromium-browser --app=<e.g. home/piticker/index.html> --start-fullscreen
    Optional - You can modify the Pi's boot files to auto launch the web app on boot. Guide on doing this can be found here
