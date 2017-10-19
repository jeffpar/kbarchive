---
layout: page
title: "Q134511: Err Msg: Software Installed Interferes w/Display Mini-Driver"
permalink: /kb/134/Q134511/
---

## Q134511: Err Msg: Software Installed Interferes w/Display Mini-Driver

	Article: Q134511
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message:
	
	  Software has been installed which interferes with the proper working of the
	  Windows 95 display mini-driver...
	
	CAUSE
	=====
	
	The Setup program for some third-party programs replaces the Windows 95
	Pnpdrvr.drv video driver. The video driver supplied by these programs turns off
	the device bitmap capability needed for Windows 95 display mini- drivers. The
	following programs are known to cause this problem:
	
	- PCAnywhere 2.0 by Symantec
	
	- Carbon Copy 2.5 by Microcom
	
	- Close Up 6.0 by Lambert
	
	RESOLUTION
	==========
	
	Install the Windows 95 standard VGA video driver when you are running any of the
	programs listed above. Or, call the program's manufacturer to inquire about
	obtaining an update to the program that corrects this problem.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
