---
layout: page
title: "Q139659: MSB Ocean: ErrMsg: CD Audio MCI Driver Not Installed"
permalink: /kb/139/Q139659/
---

## Q139659: MSB Ocean: ErrMsg: CD Audio MCI Driver Not Installed

{% raw %}

	Article: Q139659
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start or run Setup for Magic School Bus Explores the Ocean, you may
	receive the following error message:
	
	  CD Audio MCI driver not installed. Use Drivers Applet in Control Panel to
	  install it.
	
	CAUSE
	=====
	
	This problem can occur for any of the following reasons:
	
	- The [MCI] CD Audio device driver is not installed or is damaged.
	
	- Setup is unable to read the System.ini [MCI] section.
	
	RESOLUTION
	==========
	
	[MCI] CD Audio Device Driver Not Installed or Is Damaged
	--------------------------------------------------------
	
	To determine if the CD Audio is installed on your machine, use the following
	steps:
	
	If you are using Windows 95/98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab, and then double-click Media Control
	  Device.
	
	4. Look for the [MCI] CD Audio driver.
	
	If you are using Windows 3.x:
	
	1. In Program Manager, go to the Main group, and then click Control Panel.
	
	2. In Control Panel, double-click Drivers.
	
	3. In the Drivers dialog box, look for the [MCI] CD Audio driver.
	
	Setup Unable to Interpret System.ini [MCI] Section
	--------------------------------------------------
	
	This error can also occur if the application's Setup program is unable to
	correctly interpret the [MCI] section of the System.ini file. This is normally
	caused by excess blank lines in the section or by entries that are commented out
	with a semicolon (;) or double semicolon (;;). Deleting the semicolons may
	resolve this issue.
	
	If, after following the steps in the "[MCI] CD Audio Device Driver Not Installed
	or Is Damaged" section above, you don't see the driver on the list, use the
	following steps to install the [MCI] CD Audio driver:
	
	If you are using Windows 95/98
	------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add New Hardware.
	
	3. In the Add New Hardware dialog box, click Next.
	
	  NOTE: If you are using Windows 98, click Next, and then click Next.
	
	4. When the Add New Hardware Wizard asks if you want Windows to search for new
	  hardware, click No, and then click Next.
	
	5. Click Sound, Video And Game Controllers, and then click Next.
	
	6. In the Manufacturers box, click Microsoft MCI. In the Models box, click CD
	  Audio Device (Media Control), and then click Next.
	
	7. Click Finish to install the driver.
	
	8. Restart Windows.
	
	If you are using Windows 3.x
	----------------------------
	
	1. In Program Manager, go to Main and click Control Panel. Then, click Drivers.
	
	2. In the Drivers dialog box, click Add.
	
	3. In the list Of Drivers, click MCI CD Audio, and then click OK.
	
	4. Follow the instructions on the screen to add the driver. Windows will ask you
	  to insert disk 5. If disk 5 does not work correctly, try using disk 4.
	
	5. Restart Windows.
	
	To obtain a recent copy of the Windows 3.1 MCI CD Audio driver, see the following
	article in the Microsoft Knowledge Base:
	
	  Q148798 Windows 3.1 [MCI] CD Audio Driver Available
	
	If you found (by following the steps in the section above) that the [MCI] CD
	Audio driver is already installed on your system, the problem may be that the
	driver is damaged. To replace a driver that is damaged, use the following
	steps:
	
	If you are using Windows 95/98
	------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab.
	
	4. Double-click Media Control Devices.
	
	5. Click CD Audio Device (Media Control), and then click Properties.
	
	6. Click Remove.
	
	7. Delete the Mcicda.drv file from the Windows\System folder.
	
	8. Use the instructions provided above to install the CD Audio Device driver in
	  Windows 95/98.
	
	9. Restart Windows.
	
	If you are using Windows 3.x
	----------------------------
	
	1. In Program Manager, go to the Main group and click Control Panel. Then,
	  double-click Drivers.
	
	2. Click MCI CD-Audio, and then click Remove.
	
	3. Exit Windows and delete Mcicda.drv from the Windows\System folder.
	
	4. Restart Windows.
	
	5. In Program Manager, go to the Main group and click Control Panel. Then,
	  double-click Drivers.
	
	6. Click Add.
	
	7. In the list of Drivers, click MCI CD-Audio, and then click OK.
	
	8. Follow the screen instructions to complete the installation.
	
	9. Restart Windows.
	
	MORE INFORMATION
	================
	
	NOTE: For additional information about troubleshooting CD Audio problems in
	Windows 3.x, please see the following articles in the Microsoft Knowledge Base:
	
	  Q99470 Troubleshooting CD Audio Problems in Windows 3.1
	
	  Q139659 MSB Ocean and Aztech Sound: CD Audio MCI Driver Not Installed
	
	
	Additional query words: 1.00 mci cd audio msb msbsea frizz kbmm multi media multimedia multi-media cd-audio error troubleshoot sound hang frizzle liz msbocean msboceans oceans homekids homekid mcicda.exe
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticOcean kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
