---
layout: page
title: "Q67702: Windows 3.0 PIF Settings for Quicken Version 3.0"
permalink: kb/067/Q67702/
---

## Q67702: Windows 3.0 PIF Settings for Quicken Version 3.0

	Article: Q67702
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the recommended Windows 3.0 PIF file settings for Intuit's
	Quicken version 3.0. Be sure to include your actual path and directory name for
	the program name and initial directory:
	
	  Field                   Setting
	  -----                   -------
	
	  Program filename:       C:\DOSAPPS\QUICKEN3\Q.EXE
	  Window title:           Quicken 3.0
	  Optional parameters:    none
	  Start-up directory:     C:\DOSAPPS\QUICKEN3
	  K required:             128
	  K desired:              640
	  Display usage:          Full screen (optional)
	  Execution               (optional)
	  Close Window On Exit:   Checked (see below)
	
	The Advanced section is optional and may be left with the default Windows
	settings.
	
	MORE INFORMATION
	================
	
	This application can run successfully in a window or full screen. You should
	avoid loading any TSR (terminate-and-stay-resident) programs such as "Billmind"
	before starting Windows. TSR programs are known to cause problems when loaded
	before Windows. See page 442 of the "Microsoft Windows User's Guide" for
	information on running TSRs under Windows.
	
	If an MS-DOS application is started and closed from a PIF file without the Close
	Window On Exit option checked, an inactive application window will remain open.
	To close an inactive application window, press ALT+SPACEBAR and choose Close
	from the window control pull-down menu (-).
	
	Quicken is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.00a 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
