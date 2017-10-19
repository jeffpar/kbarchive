---
layout: page
title: "Q107869: CD Golf Error: There Is No Driver Installed on Your System"
permalink: /kb/107/Q107869/
---

## Q107869: CD Golf Error: There Is No Driver Installed on Your System

	Article: Q107869
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-1999
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, multimedia edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows 3.1, when you attempt to do a fly-by in the multimedia edition of
	Golf 1.0, one of the following errors may appear:
	
	  Undetectable error loading specified device driver.
	
	  There is no driver installed on your system. For more information, see
	  "Troubleshooting: Multimedia Questions and Answers" in the Help system.
	
	  The specified device is not open or is not recognized by MCI. For more
	  information, see "Troubleshooting: Multimedia Questions and Answers" in the
	  Help system.
	
	In addition to these errors, you may notice that except for the Club Distances
	command and About Microsoft Golf, you cannot run Help inside Golf.
	
	These errors indicate that one or more of the video drivers Golf needs are not
	installed or are not compatible.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. Double-click Control Panel (generally found in the Main program group) and
	  choose the Drivers icon.
	
	2. Select the following line:
	
	[MCI] Microsoft Videos for Windows
	
	3. Click Remove and click Yes to remove the driver.
	
	4. Click Restart Now.
	
	5. Reinstall the multimedia edition of Golf, making sure to click Yes when asked
	  to install the run-time version of Video For Windows.
	
	MORE INFORMATION
	================
	
	The multimedia edition of Golf ships with a run-time version of Video for
	Windows. Certain drivers are necessary to run the fly-bys and demonstration,
	which are AVI files. The error message will occur if one of these drivers is not
	installed.
	
	During the installation, Multimedia Golf only checks to see if the [MCI] Video
	for Windows driver is installed. The setup is not designed to verify the
	existence any other display driver. The conflict arises when another multimedia
	software was installed prior to Golf, and that software loaded some but not all
	of the display drivers necessary for AVI files.
	
	Additional query words: VFW 1.00 AVI multi-media cd-rom cd rom fly-bys video demo demos
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
