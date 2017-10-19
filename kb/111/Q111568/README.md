---
layout: page
title: "Q111568: Video Display Problems with MS-DOS Prompt and Trident Card"
permalink: /kb/111/Q111568/
---

## Q111568: Video Display Problems with MS-DOS Prompt and Trident Card

	Article: Q111568
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use ALT+TAB to switch from, and then back to, an MS-DOS Prompt session
	under Microsoft Windows for Workgroups, the characters may become garbled. If
	you press ALT+ENTER to put the MS-DOS Prompt session in a window, the screen is
	redrawn correctly.
	
	
	CAUSE
	=====
	
	This problem occurs when you use the Windows for Workgroups 3.11 Super VGA video
	driver with a Trident VGA card that has 1 megabyte of RAM.
	
	This problem occurs with the following Windows for Workgroups video drivers:
	
	- Super VGA (800x600, 16 colors)
	
	- Super VGA (800x600, 256 colors, large fonts)
	
	- Super VGA (800x600, 256 colors, small fonts)
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following drivers:
	
	- The Windows for Workgroups VGA or VGA (3.0) video display driver
	
	- The Super VGA 256-color video driver (SVGA.EXE).
	
	- An updated driver from Trident. As of February 27, 1994, the most recent
	  drivers are available from the Trident bulletin board service are found in
	  the compressed file WIN31B.ZIP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 messed up repeated deleted truncated
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
