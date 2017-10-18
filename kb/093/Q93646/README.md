---
layout: page
title: "Q93646: HP Laserjet 4 Driver May Cause GP Fault in Windows 3.1"
permalink: kb/093/Q93646/
---

## Q93646: HP Laserjet 4 Driver May Cause GP Fault in Windows 3.1

	Article: Q93646
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience a general protection (GP) fault when printing from Windows
	Calendar to a Hewlett-Packard (HP) LaserJet 4 or an IBM 4039. The error message
	displayed may be similar to the following:
	
	  CALENDAR caused a General Protection Fault in module CALENDAR.EXE at
	  0002:0CFA.
	
	CAUSE
	=====
	
	This problem occurs if your page setup is incorrect or if your printer driver is
	set to 600 dpi.
	
	WORKAROUND
	==========
	
	To fix this error, use the appropriate method below:
	
	- Prior to printing, change the Calendar Page Setup to use left and right
	  margins of at least 1 inch.
	
	- If your printer driver is set to 600 dpi, change it to 300 dpi.
	
	KBCategory: kbprint kbtool kberrmsg
	KBSubcategory: win30 win31 wfw wfwg gpf
	
	Additional query words: 3.10 WinLaser iv iiii lexmark win95 win95x
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
