---
layout: page
title: "Q88330: Unrecoverable Application Error with hDC Express"
permalink: /kb/088/Q88330/
---

## Q88330: Unrecoverable Application Error with hDC Express

	Article: Q88330
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive an Unrecoverable Application Error (UAE) when using hDC's
	Express program with Microsoft Windows. This error occurs when you use the
	Express program as the Windows shell and when the Auto-Maximize feature in hDC
	Express is turned on.
	
	MORE INFORMATION
	================
	
	The default setting in the Express Preferences is for Windows Express to
	maximize automatically. This maximizing action may causes UAEs when hDC is used
	as the default Windows shell. To alleviate this problem, use one of the
	following workarounds.
	
	Workaround 1
	------------
	
	Turn off the auto-maximize feature in Windows Express:
	
	1. From the Express window menu, choose Special Preferences.
	
	2. Clear the Maximize Automatically check box.
	
	3. Choose the Permanent button.
	
	  -or-
	
	Workaround 2
	------------
	
	Do not load Windows Express as the shell, instead load it from the "run=" line of
	the WIN.INI file:
	
	1. Edit the WIN.INI file with a text editor such and Notepad.
	
	2. The shell= line in the [boot] section of the SYSTEM.INI file will read:
	
	        shell=<path>express.exe
	
	  Add the <path>express.exe portion of that line to the run= line in the
	  [boot] section.
	
	3. Change the shell=<path>express.exe line to:
	
	        shell=progman.exe
	
	4. Exit and restart Windows.
	
	The product included here, hDC Express, is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3rdparty 3.00 3.0 3.00a 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
