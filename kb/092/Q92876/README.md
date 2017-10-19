---
layout: page
title: "Q92876: NET.EXE Pop-up Interface Hard to Read on Monochrome Monitors"
permalink: /kb/092/Q92876/
---

## Q92876: NET.EXE Pop-up Interface Hard to Read on Monochrome Monitors

	Article: Q92876
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a color display adapter with a monochrome monitor, you may have
	trouble reading the NET.EXE pop-up interface.
	
	MORE INFORMATION
	================
	
	If NET.EXE detects a monochrome display, it adjusts the colors appropriately.
	But if you use a color display adapter with a monochrome monitor, you need to
	use the MS-DOS MODE command to set the display type as follows:
	
	  mode mono
	
	This ensures that the interface is readable.
	
	Additional query words: 3.10 pop up 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
