---
layout: page
title: "Q82483: Err Msg: Virtual Machine Error 19 (Lotus 1-2-3)"
permalink: /kb/082/Q82483/
---

## Q82483: Err Msg: Virtual Machine Error 19 (Lotus 1-2-3)

	Article: Q82483
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Lotus 1-2-3 release 3.1 in standard mode with a limulator installed,
	Lotus fails with the message:
	
	  Virtual Machine (VM) error 19
	
	It may be necessary to clear the "Close Windows on Exit" check box in the program
	information file (PIF) to see this message.
	
	CAUSE
	=====
	
	Applications that include their own MS-DOS extenders often have problems running
	with Microsoft Windows version 3.1 in standard mode with a limulator. Lotus
	1-2-3 version 3.1 is such an application.
	
	An MS-DOS extender allows applications to access more than one megabyte (MB) of
	memory on IBM-compatible machines.
	
	On example of a limulator is EMM386.EXE included with Windows 3.1.
	
	RESOLUTION
	==========
	
	To properly run applications that have their own MS-DOS extenders, do one of the
	following:
	
	- Remove the limulator.
	
	  -or-
	
	- Run the application in enhanced mode.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.10 3.1 lim ems 3.11 one two three 1 2 3
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
