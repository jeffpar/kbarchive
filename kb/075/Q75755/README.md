---
layout: page
title: "Q75755: Starting Windows Terminal in Full-Screen Mode"
permalink: kb/075/Q75755/
---

## Q75755: Starting Windows Terminal in Full-Screen Mode

	Article: Q75755
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the WIN.INI switch MAXIMIZED=1 under the [TERMINAL] setting in your
	WIN.INI file permits Terminal to start in full-screen mode.
	
	MORE INFORMATION
	================
	
	To use this switch, follow these steps:
	
	1. Locate the [TERMINAL] section in the WIN.INI file.
	
	2. Add the line
	
	  MAXIMIZED=1
	
	  to this section, and then save the WIN.INI file.
	
	3. To allow the updated WIN.INI file to be re-read, either restart Windows or
	  force the file to be read by using a Control Panel utility such as Colors.
	
	NOTE: Contrary to a PC Magazine article published on September 10, 1991, the
	MAXIMIZED setting only affects Terminal. It does not affect other applications,
	including Help, in Windows 3.1.
	
	REFERENCES
	==========
	
	"PC Magazine," September 10, 1991, page 449
	
	Additional query words: full screen 3.0 3.00 3.0a 3.00a 3.1 3.10 articles books WIN31 wincomm 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
