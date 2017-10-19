---
layout: page
title: "Q93668: Missing Separator Corrupts Digital Clock Display"
permalink: /kb/093/Q93668/
---

## Q93668: Missing Separator Corrupts Digital Clock Display

	Article: Q93668
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Clock display may be corrupted if no separator is
	specified or has been deleted from the Time Format dialog box accessed from the
	International icon in Control Panel. Replacing the separator in this dialog box
	corrects this problem.
	
	MORE INFORMATION
	================
	
	The following are two examples of what may occur if the separator is deleted or
	missing:
	
	1. The hour will be displayed followed by a left square bracket ([), then the
	  minutes followed by another left square bracket. The seconds and the "AM" or
	  "PM" symbols will not be displayed.
	
	2. The Clock will display the hour followed by a graphic symbol, such as a
	  square. The hour will be the only time displayed. The minutes, seconds, and
	  "AM" or "PM" symbols will not be displayed.
	
	RESOLUTION
	==========
	
	1. From Control Panel, choose the International icon.
	
	2. Select the Change button in the Time Format section.
	
	3. Insert a colon in the Separator box.
	
	4. Start the Clock.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
