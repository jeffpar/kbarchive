---
layout: page
title: "Q141896: Encarta96 ErrMsg: Enc9632.exe Is Not a Valid Win32 Application"
permalink: kb/141/Q141896/
---

## Q141896: Encarta96 ErrMsg: Enc9632.exe Is Not a Valid Win32 Application

	Article: Q141896
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta 96 Encyclopedia, you may receive an error message similar
	to the following:
	
	  Enc9632.exe is not a valid win32 application
	
	  OK
	
	When you click OK, the system returns to the program you were previously running
	before you attempted to start Encarta 96.
	
	This problem occurs if you are using the Trident Microsystems Super VGA video
	driver for Windows 95.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, if you are using an 8900C series Trident video card,
	change the video display driver to the Standard Super VGA video driver.
	
	For more information about the type of video card installed in your computer and
	the correct video display driver to install, consult your video card
	manufacturer.
	
	To change a video display driver in Windows 95, do the following:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Click Change Display Type.
	
	5. Click the Change button next to the Adapter Type.
	
	6. To change the display driver, use one of the following steps:
	
	   - To choose a display driver listed by Windows 95 as compatible with your
	     display adapter, click Show Compatible Devices. Select a driver from the
	     list.
	
	   - To choose a different display driver, click Show All Devices. Select
	     Standard display types from the Manufacturer list and select Super VGA
	     from the Models list.
	
	   - To install a manufacturer-supplied driver, click Show All Devices, and in
	     the Select Device dialog box, click Have Disk. Install the driver from the
	     floppy disk.
	
	7. Click OK, and then click Close. Then, click Close again.
	
	8. When prompted to restart your computer, click Yes.
	
	MORE INFORMATION
	================
	
	The behavior described above occurs with the Trident Super VGA driver for
	Windows 95. Switching to Standard Super VGA resolves the problem.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131806 Windows 95/98: How to Install or Change a Display Driver
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: Encarta96 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : 1996
	
	=============================================================================
	
