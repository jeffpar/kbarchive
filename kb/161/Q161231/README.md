---
layout: page
title: "Q161231: Automap: Known Communication Settings for Some GPS Receivers"
permalink: kb/161/Q161231/
---

## Q161231: Automap: Known Communication Settings for Some GPS Receivers

	Article: Q161231
	Product(s): Microsoft Automap
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbtshoot kbusage kbHardware
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets Plus for Windows, version 5.0 
	- Microsoft Automap Trip Planner for Windows, version 5.0 
	- Microsoft Expedia Streets 98 
	- Microsoft Expedia Streets 98 Deluxe, version 1.0 
	- Microsoft Expedia Trip Planner 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the GPS Add-on for Microsoft Automap Streets Plus/Deluxe or Microsoft
	Automap Trip Planner, it is important to configure your GPS receiver correctly.
	This helps Automap to recognize your receiver.
	
	MORE INFORMATION
	================
	
	Before your GPS receiver can communicate with Automap, you need to correctly set
	the communications settings on the device. The following article tells how to
	accomplish this for a number of Automap-compatible GPS receivers.
	
	Garmin GPS 45
	-------------
	
	To set the receiver for use with Automap, do the following:
	
	1. Press the "Page" button until the menu appears.
	
	2. Select the "I/O Setup" option, and then press ENTER.
	
	3. On the next screen, select the "None/NMEA" or "NMEA/NMEA" option, and "NMEA
	  0183 2.0" as the output format.
	
	4. Press the "Page" button to return to the Map screen.
	
	Trimble Scoutmaster
	-------------------
	
	1. On the main screen, select the "Setup" option.
	
	2. Press the diamond button for Options, then select "Set dataport."
	
	3. Select "Reset defaults," then select the "Trimble" option.
	
	Magellan DLX-10
	---------------
	
	1. Press the "AUX" button and choose the "NMEA" menu.
	
	2. For best results, choose the "0183D" option.
	
	NMEA compatible device
	----------------------
	
	Set your GPS receiver so that it is communicating at:
	
	  4800 baud
	  8 bits
	  Parity = none
	  1 stop bit
	
	Communication should be in either NMEA 0183 V1.5 or V2.0 format.
	
	The following NMEA message combinations have been tested and are known to produce
	a fix in Automap (even if the receiver will not auto-detect in the GPS control
	panel; you must manually detect the device in this case).
	
	BWC, APA, GLL, VTG (NMEA 0183 V1.5)
	RMC, RMB (NMEA 0183 V1.5)
	BWC, XTE, GLL, VTG (NMEA 0183 V1.5)
	APB, GGA, VTG, BWC, GLL (NMEA 0183 V2.0)
	
	For further information concerning GPS settings and terminology please consult
	your hardware manual or manufacturer.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: auto auto-map automap reference kbmm multimedia multi-media multi media map
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbtshoot kbusage kbHardware 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbAutomapSearch kbExpediaSearch kbExpediaStreets98 kbExpediaStreets98del kbAutomapStreetsPlus500 kbAutomapTripPlanner500
	Version           : 5.0
	
	=============================================================================
	
