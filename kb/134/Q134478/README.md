---
layout: page
title: "Q134478: Incorrect &quot;Invalid Path&quot; Error Message Returned by XCOPY"
permalink: /kb/134/Q134478/
---

## Q134478: Incorrect &quot;Invalid Path&quot; Error Message Returned by XCOPY

	Article: Q134478
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
	
	If you use the XCOPY command to copy a file to or from a floppy disk, you may
	receive the following error message:
	
	  Invalid path
	
	CAUSE
	=====
	
	The XCOPY command treats any error it encounters when it tries to validate the
	source or destination drive as an Invalid Path error.
	
	RESOLUTION
	==========
	
	Be aware when you use the XCOPY command that the Invalid Path error message can
	indicate problems other than an invalid path.
	
	MORE INFORMATION
	================
	
	The Invalid Path error may also be caused by any of the following conditions:
	
	- The floppy disk drive does not contain a disk.
	
	- The floppy disk drive door is open.
	
	- The floppy disk is not properly formatted.
	
	- The floppy disk is damaged
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
