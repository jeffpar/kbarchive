---
layout: page
title: "Q33673: Windows PIF Settings for Microsoft Works for MS-DOS"
permalink: kb/033/Q33673/
---

## Q33673: Windows PIF Settings for Microsoft Works for MS-DOS

	Article: Q33673
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are the recommended Windows/286 and Windows 3.0 PIF file settings
	for Microsoft Works for MS-DOS (be sure to include your actual path and
	directory for Program Name and Initial Directory):
	
	  Field                        Setting
	  -----                        -------
	
	  Program Name:                C:\WORKS\WORKS.EXE
	  Program Title:               Microsoft Works
	  Program Parameters:          (none)
	  Initial Directory:           C:\WORKS
	  KB Required                  320
	  KB Desired                   640
	  Directly Modifies            Screen
	  Program Switch               Text
	  Screen Exchange              Graphics/Text
	  Close Window on exit         Checked (see below)
	
	MORE INFORMATION
	================
	
	When an MS-DOS application is closed that is run from a PIF file without the
	"Close Window on exit" option checked, an inactive application window remains
	open until it is also closed. To close an inactive application, press
	ALT+SPACEBAR and choose "Close" from the pull-down menu.
	
	Additional query words: PIF WIN286 dos 2.00 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
