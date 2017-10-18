---
layout: page
title: "Q135215: Cannot Run Beyond Earth: CVID Video Drivers Not Installed"
permalink: kb/135/Q135215/
---

## Q135215: Cannot Run Beyond Earth: CVID Video Drivers Not Installed

	Article: Q135215
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Beyond Earth program in Windows 95, you may receive the
	following error message:
	
	  CVID Video drivers not installed
	
	The program fails to run even though you have the video compression driver
	installed in the computer.
	
	CAUSE
	=====
	
	Just as in Windows version 3.1, the Beyond Earth program requires that the CVID
	driver is installed to run properly in Windows 95. codecs are installed
	differently in Windows 95.
	
	RESOLUTION
	==========
	
	To make the program run properly, use any text editor, such as Notepad, to add
	the following line to the [Drivers] section of the System.ini file:
	
	  vidc.cvid=iccvid.drv
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: discovery beyond planet earth
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
