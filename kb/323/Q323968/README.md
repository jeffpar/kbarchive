---
layout: page
title: "Q323968: HOW TO: Configure a GPS Device for Use with Pocket Streets"
permalink: /kb/323/Q323968/
---

## Q323968: HOW TO: Configure a GPS Device for Use with Pocket Streets

	Article: Q323968
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - How to Configure a GPS Device for Use with Pocket Streets
	
	   - Part 1: Install Pocket Streets
	- Part 2: Download and Install the Pocket Streets 2002 English Update
	- Part 3: Copy a Map to Your Mobile Device
	- Part 4: Connect and Configure the GPS Device
	
	- How to Test Your GPS Device
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article describes how to configure a Global Positioning System (GPS) device
	for use with Microsoft Pocket Streets.
	
	How to Configure a GPS Device for Use with Pocket Streets
	---------------------------------------------------------
	
	To configure your GPS device for use with Pocket Streets, follow the steps in
	this four-part procedure, in the order in which they are presented.
	
	Part 1: Install Pocket Streets:
	
	You can install Pocket Streets on the following mobile devices: Pocket PCs,
	palm-sized PCs that run Microsoft Windows CE 2.11 or later, and hand-held PCs
	that run Windows CE 2.0 or later. ActiveSync 3.1 or later is required for
	installation.
	
	Make sure that ActiveSync 3.1 or later is also installed on your desktop computer
	and that your mobile device is synchronized before you install Pocket Streets.
	
	To install Pocket Streets on your mobile device, do one of the following, as
	appropriate to your situation:
	
	- If Microsoft Streets & Trips is not installed on your desktop computer,
	  follow these steps
	
	  1. Verify that your desktop computer meets the minimum system requirements
	     for Streets & Trips.
	
	     For information about the system requirements, see the "References" section
	     later in this article.
	
	  2. Insert the Streets & Trips CD into your CD-ROM or DVD-ROM drive, and
	     then run Setup to install Streets & Trips.
	
	  3. Follow the on-screen instructions to install Pocket Streets.
	
	- If Microsoft Streets & Trips is installed on your desktop computer,
	  follow these steps:
	
	  1. Insert the Streets & Trips CD into your CD-ROM or DVD-ROM drive. Hold
	     down SHIFT to prevent Streets & Trips Setup from starting
	     automatically.
	
	  2. Start Windows Explorer and locate the <drive>:\PStreets folder,
	     where <drive> is the CD-ROM or DVD-ROM drive that contains the
	     Streets & Trips CD.
	
	  3. Open the PStreets folder, and then double-click Setup.exe.
	
	  4. Follow the on-screen instructions to install Pocket Streets.
	
	For more information about installing Pocket Streets, see the "References"
	section later in this article.
	
	Part 2: Download and Install the Pocket Streets 2002 English Update:
	
	To download and install the Pocket Streets 2002 English Update, visit the
	following Microsoft Web site:
	
	  Microsoft.com Download Center - Pocket Streets 2002 English Update
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=32104
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=32104)
	
	Part 3: Copy a Map to Your Mobile Device:
	
	1. In Streets & Trips, create a map of the area in which you are currently
	  located.
	
	2. Connect your mobile device to your desktop computer (if it is not already
	  connected).
	
	3. Double-click Microsoft ActiveSync on your desktop computer.
	
	4. In ActiveSync, click Explore. The Mobile Device folder for your device opens
	  in Windows Explorer.
	
	5. In Windows Explorer, locate the map file (.mps) that you created in part 3,
	  step 1.
	
	6. Drag the map file to My Documents in the Mobile Device folder for your
	  connected device.
	
	  The map is copied to your mobile device for use with Pocket Streets.
	
	Part 4: Connect and Configure the GPS Device:
	
	NOTE: The steps in the following procedure may vary, depending on your particular
	hardware.
	
	1. Connect a serial cable to your GPS device.
	
	2. If the GPS cable and the serial cable for the mobile device both use female
	  connectors, attach a gender changer.
	
	3. Insert the null modem connection.
	
	4. Connect the serial connector for the null modem to the serial port of the
	  mobile device.
	
	5. When the devices are connected, use your mobile device to open the map that
	  you created and copied to My Documents in the Mobile Device folder.
	
	6. On the Tools menu, point to GPS, and then click Configure GPS Receiver.
	
	7. Click the appropriate COM port, and then click OK.
	
	8. On the Tools menu, point to GPS, and then click Track Position.
	
	  Your current position on the map appears. It may take several minutes for the
	  GPS device to initialize, calculate, and display your current position. By
	  default, the GPS position is updated every 15 seconds. This update interval
	  cannot be changed.
	
	How to Test Your GPS Device
	---------------------------
	
	If you cannot connect your mobile device to your GPS device by using the
	procedure in part 4 of this article, test your GPS in terminal mode. To do so:
	
	1. Connect the GPS device to your mobile device, and then either start it in
	  simulation mode or verify that three or more satellites are recognized.
	
	  To connect your GPS device to your mobile device, follow steps 1 through 4 in
	  part 4 of this article.
	
	2. Click Pocket PC, and then click Settings.
	
	3. Click Connections, and then click Modem.
	
	4. Click New Connection.
	
	5. In the "Select a Modem" list, click a modem. For example, click Hayes
	  Compatible.
	
	6. In the "Baud rate" list, click 4800.
	
	7. Click Advanced, and then verify that the "Use terminal before connection"
	  check box is selected and that the connection settings are configured as
	  follows:
	
	  Data bits: 8
	  Parity: None
	  Stop bits: 1
	  Flow control: Hardware
	
	8. Click OK, and then click Next.
	
	9. Type a phone number, and then click Next.
	
	10. Click to clear the "Cancel call" and "Wait for dial tone" check boxes.
	
	11. Click Finish.
	
	12. Open the new connection that you just created. A terminal window appears
	  that displays data similar to the following:
	
	$GPRMB,A,,,,,,,,,,,,V*71
	
	 $GPGGA,225224,3400.000,N,06854.375,E,1,07,2.0,638.3,M,-37.5,M,,*6D
	
	 $GPGSA,A,3,06,10,17,,22,23,,26,30,,,,4.3,2.0,3.0*33
	
	 $GPGSV,3,1,09,06,86,096,51,10,18,043,40,17,49,307,47,21,04,225,00*74
	
	 $GPGSV,3,2,09,22,14,310,39,23,40,223,46,24,04,081,00,26,37,119,45*7B
	
	 $GPGSV,3,3,09,30,24,202,42,,,,,,,,,,,,*43 $PGRME,15.0,M,22.5,M,15.0,M*1B
	
	 $PGRMM,WGS 84*06
	
	If the data that appears in the terminal window is illegible or appears garbled,
	investigate possible communications issues between the GPS device and the mobile
	device. For more information about how to troubleshoot this issue, contact your
	GPS manufacturer.
	
	If after approximately one minute, you receive a message that either no carrier
	was found or no dial tone was found, the mobile device is not receiving the data
	from the GPS device on that COM port. To troubleshoot this issue, use a
	different COM port.
	
	REFERENCES
	==========
	
	For additional information about the system requirements for Streets and Trips,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q304374 Streets 2002: System Requirements
	
	For additional information about how to install Pocket Streets, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q319689 Streets & Trips 2002: "Cannot Find Pocket Streets" Error Message
	  When You Try to Install Pocket Streets 2002
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbExpediaStreets2002
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
