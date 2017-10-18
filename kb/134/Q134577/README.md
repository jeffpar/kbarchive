---
layout: page
title: "Q134577: Taskbar Not Updated Correctly with Maxtime Loaded"
permalink: kb/134/Q134577/
---

## Q134577: Taskbar Not Updated Correctly with Maxtime Loaded

	Article: Q134577
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
	
	The Windows 95 taskbar is not updated correctly on Toshiba laptop computers
	running Maxtime. For example, minimized programs may not appear on the taskbar.
	
	CAUSE
	=====
	
	Toshiba's Maxtime program, which is installed by default on some Toshiba laptop
	computers, prevents the taskbar from being updated.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Win.ini file. Remove
	Maxtime.exe from the "run=" line, and then save and close the Win.ini file. When
	you restart Windows 95, the taskbar will be updated correctly.
	
	MORE INFORMATION
	================
	
	Maxtime is manufactured by Toshiba, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: apm power management
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
