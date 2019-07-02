# crypto-ticker

Raspberry Pi Setup:

1. Install Raspian on the SD card
    
2. Install the display drivers
    
3. Download the code from here and unzip the files into a sensible location on your Pi e.g. /home/piticker
    
4. Assemble your case and connect the display to the raspberry Pi using the 40 pin connector, connect the HDMI and power it up. 

5. Open terminal on the raspberry Pi and type the following command to launch the Chromium browser with the web app in fullscreen mode.

    chromium-browser --app=<e.g. home/piticker/index.html> --start-fullscreen
    
6. Optional - You can modify the Pi's boot files to auto launch the web app on boot. Guide on doing this can be found here: https://blog.gordonturner.com/2017/07/22/raspberry-pi-full-screen-browser-raspbian-july-2017/
