---
layout: page
title: "Q82119: Problems Running Windows 3.1 Tutorial with EGA Monitor"
permalink: /kb/082/Q82119/
---

## Q82119: Problems Running Windows 3.1 Tutorial with EGA Monitor

	Article: Q82119
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following are problems related to running the Microsoft Windows
	version 3.1 tutorial with an EGA monitor:
	
	- Although Windows can be set up for an EGA resolution, the tutorial only
	  supports a VGA or better monitor. If you attempt to run the tutorial by
	  choosing Windows Tutorial from the Help menu on any monitor with a resolution
	  lower than VGA, Windows displays the following message:
	
	  A VGA (or better) monitor is required to run the tutorial.
	  Press the ENTER key to exit.
	
	- If you set up Windows for a VGA or higher resolution, the Setup program asks
	  you at the end of the setup process if you want to run or skip the tutorial.
	  This option isn't offered if you select EGA resolution.
	
	- One of the new features of Windows 3.1 is the ability to automate the setup
	  procedure by using the SETUP /H switch. One of the entries under the
	  [Options] section in the *.SHH file is "tutorial" (without the quotation
	  marks). This entry causes the tutorial to be launched at the end of the setup
	  process. If this entry is added while setting up on an EGA system, the
	  tutorial does not run and no error messages is displayed.
	
	Additional query words: 3.10 3.1 tutor display 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
