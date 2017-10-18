---
layout: page
title: "Q58243: Cannot Run Real Mode Under Enhanced with SHARE"
permalink: kb/058/Q58243/
---

## Q58243: Cannot Run Real Mode Under Enhanced with SHARE

	Article: Q58243
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run SHARE, run Microsoft Windows 3.0 in 386 enhanced mode, start an
	MS-DOS prompt, and run real mode Windows 3.0 in the virtual machine, you receive
	the following error:
	
	  Sharing Violation error reading drive C:
	
	CAUSE
	=====
	
	This behavior is by design. With SHARE running, the different virtual machines
	running act just like different network workstations.
	
	MORE INFORMATION
	================
	
	This problem is exactly the same problem as two workstations on a network trying
	to run the same installed version of Windows from a network server. You must set
	things up properly for this to work. All of the files that Windows opens (*.INI,
	*.DLL, *.EXE, *.DRV) must be marked read-only with the MS-DOS ATTRIB command or
	you will get sharing violations. The ATTRIB syntax for read-only is as follows:
	
	     ATTRIB <filename> +r
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
