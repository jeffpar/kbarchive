---
layout: page
title: "Q86639: Norton Smartcan Beeps When Windows Deletes Files"
permalink: kb/086/Q86639/
---

## Q86639: Norton Smartcan Beeps When Windows Deletes Files

	Article: Q86639
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit Windows or delete a file within Windows, you may hear one or more
	beeps.
	
	CAUSE
	=====
	
	This problem occurs when the Norton Desktop for Windows version 2.0 Smartcan
	utility has been loaded in the AUTOEXEC.BAT file and the Smartcan directory is
	full.
	
	To resolve the problem, do one of the following:
	
	- Disable Smartcan.
	
	- Find the directory where Smartcan is writing, and then manually delete files
	  in that directory.
	
	- Increase the space available to Smartcan.
	
	MORE INFORMATION
	================
	
	To disable the Smartcan utility:
	
	1. Remark out the following line from the AUTOEXEC.BAT file:
	
	        smartcan /on /skiphigh
	
	  Note: To remark out the line, insert "REM" (without the quotation marks) at
	  the beginning of the line. For example:
	
	        rem smartcan /on /skiphigh
	
	2. Restart Windows.
	
	To delete files or increase the space alloted to Smartcan:
	
	Use Norton's Desktop software to locate the directory where Smartcan is placing
	files or to increase the space available to Smartcan.
	
	The product included here, Norton Desktop for Windows, is manufactured by a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	
	REFERENCES
	==========
	
	"Using Norton Desktop for Windows," version 2.0, Chapter 14
	
	Additional query words: 3.10 3.11 beep exit quit sound alarm ndw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
