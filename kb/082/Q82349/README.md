---
layout: page
title: "Q82349: CodeView Hangs if VM Opened During Debugging"
permalink: /kb/082/Q82349/
---

## Q82349: CodeView Hangs if VM Opened During Debugging

	Article: Q82349
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open an MS-DOS virtual machine (VM) while debugging under version 3.07 or
	4.0 of Microsoft CodeView for Windows, the keyboard locks up when you close the
	application being debugged. This occurs under most configurations. Attempting to
	exit CodeView using the mouse causes Microsoft Windows to stop (hang or crash).
	
	WORKAROUND
	==========
	
	There are two workarounds to this problem:
	
	- If you exit CodeView for Windows before closing the application, the system
	  should not hang.
	
	  -or-
	
	- Do not open an MS-DOS command line in a window while running under CodeView.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView for Windows, versions
	3.07 and 4.0. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
