---
layout: page
title: "Q82820: Monitor Ports PIF Option Explained"
permalink: kb/082/Q82820/
---

## Q82820: Monitor Ports PIF Option Explained

	Article: Q82820
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows operating system version 3.1, when an option under Monitor
	Ports in the PIF (program information file) Editor is selected, Windows verifies
	that the ports assigned to the display adapter are the same as those used by the
	application. Selecting one of these options slows down the display and should
	not be done unless there is a good reason. For the most part, only EGA systems
	require the use of these settings.
	
	MORE INFORMATION
	================
	
	Under Monitor Ports, there are three check boxes: Text, Low Graphics, and High
	Graphics. Monitor Ports is off when all three check boxes are clear.
	
	One of the Monitor Ports options should be used when switching away from an
	application causes the display to become corrupted. These options are generally
	used under the following conditions:
	
	1. With some very old text-based applications, you may need to select the Text
	  check box.
	
	2. To run Lotus 1-2-3 version 1.0 in CGA mode, you must select the Low Graphics
	  check box.
	
	3. For many applications on EGA systems, you must select the High Graphics check
	  box.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
