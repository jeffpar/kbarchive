---
layout: page
title: "Q65436: HIMEM.SYS Included with Microsoft C Compiler Version 6.0"
permalink: kb/065/Q65436/
---

## Q65436: HIMEM.SYS Included with Microsoft C Compiler Version 6.0

	Article: Q65436
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The Microsoft C Compiler version 6.0 includes version 2.5 of HIMEM.SYS.
	Because this version implements the XMS 2.0 specification, Windows runs in
	standard and 386 enhanced mode with this driver. However, this
	configuration is not supported by Microsoft and performance may be reduced.
	Windows should be run with version 2.6 of HIMEM.SYS, which is included with
	the Windows package. Microsoft C Compiler 6.0 works with version 2.6 of
	HIMEM.SYS with no decrease in performance.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
