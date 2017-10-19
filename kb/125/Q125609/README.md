---
layout: page
title: "Q125609: Asimov: Installing Dell S3 Version 1.32 Driver"
permalink: /kb/125/Q125609/
---

## Q125609: Asimov: Installing Dell S3 Version 1.32 Driver

	Article: Q125609
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you using a Dell S3 86C805 video card, you may have trouble displaying the
	Ultimate Robot.
	
	RESOLUTION
	==========
	
	To correct this problem, update the video display driver. Dell S3 version 1.32
	is included on the Asimov CD. The driver works with Ultimate Robot at the
	640x480 resolution setting with 256 colors; however, version 1.32 is not the
	latest version of the driver, and you may experience problems using this driver
	with other Windows applications.
	
	To obtain the latest version of the Dell S3 video driver, contact Dell Computer
	Corporation. Installation instructions for version 1.32 are in the Ultimate
	Robot README file.
	
	MORE INFORMATION
	================
	
	
	The following information is taken directly from the Ultimate Robot README file:
	
	----------------
	
	3.2 Dell Drivers
	----------------
	
	If you are having trouble getting Ultimate Robot to display properly, you can try
	installing the Dell S3 drivers that have been included on the Asimov CD. To
	switch to the driver on the CD, do the following:
	
	1. Run Windows Setup from the Main group in Windows Program Manager.
	
	2. In the Options menu, choose Change System Settings...
	
	3. Click the down arrow to the right of the Display: edit box, and select "Other
	  display" from the bottom of the list.
	
	4. You will be asked to type in the path to the display driver you wish to use.
	  Type the letter of your CD drive followed by a colon and the following:
	  "\asimov\msstp\dell". If the letter of your CD drive is D, you should type
	  D:\ASIMOV\MSSTP\DELL.
	
	5. A list of possible resolutions will appear. You should highlight the 640x480
	  256 color resolution, and click OK.
	
	6. The Display: edit box should now say Dell S3 1.32 640x480 256 color. Click
	  OK.
	
	7. You may be told that a driver for this display is already on the system. You
	  should choose to use install the new driver by clicking the NEW button.
	
	8. If you are asked to enter the path for a file which is not on the CD, enter
	  the path to you Windows System directory (usually C:\WINDOWS\SYSTEM) or get
	  the file from your Windows Setup disks.
	
	9. You will need to restart Windows for the change to take affect.
	
	You may also have problems with the Dell S3 driver if you are running the
	Robotoid Assembly Toolkit in 1280x1024 or 800x600 resolution in 16 colors.
	Either run Asimov in 256 colors, or switch to a different resolution, such as
	640x480.
	
	Contact your hardware manufacturer for information on acquiring the latest
	version of the driver.
	
	---------------------------------------------------------------------
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbAsimovSearch kbAsimovUltimateRobot
	Version           : :1.0
	
	=============================================================================
	
