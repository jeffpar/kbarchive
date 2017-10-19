---
layout: page
title: "Q81807: Windows: Cursor Is Lost in MS-DOS when in 43-Line Mode"
permalink: /kb/081/Q81807/
---

## Q81807: Windows: Cursor Is Lost in MS-DOS when in 43-Line Mode

	Article: Q81807
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows version 3.1 in standard mode using the EGA video
	drivers, the cursor may disappear at an MS-DOS command line if the video mode is
	switched to 43 lines.
	
	RESOLUTION
	==========
	
	If the cursor is lost from an MS-DOS command line under Windows, the following
	MODE statement should restore it.
	
	  MODE CO80
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
