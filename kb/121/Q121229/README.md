---
layout: page
title: "Q121229: Norton Antivirus Causes Windows 95 to Hang on Exit"
permalink: kb/121/Q121229/
---

## Q121229: Norton Antivirus Causes Windows 95 to Hang on Exit

	Article: Q121229
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit or shut down Windows 95, your computer stops responding (hangs).
	
	CAUSE
	=====
	
	Norton Antivirus (NAVTSRW.EXE) from Norton Desktop for Windows 3.0 does not
	restore INT 21 when it is terminated. This causes Windows 95 to hang when you
	exit.
	
	WORKAROUND
	==========
	
	At this time, the only workaround is to remove or remark out the NAVTSRW.EXE
	line in the WIN.INI file.
	
	In the [Windows] section of the WIN.INI file, change
	
	  Load=NAVTSRW.EXE
	
	  to:
	
	  ;Load=NAVTSRW.EXE
	
	  or to:
	
	  Load=
	
	MORE INFORMATION
	================
	
	Norton Desktop for Windows is manufactured by Symantec Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: 3rdparty nav ndw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
