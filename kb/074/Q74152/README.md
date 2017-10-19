---
layout: page
title: "Q74152: EMM386.EXE Slows Down System Performance"
permalink: /kb/074/Q74152/
---

## Q74152: EMM386.EXE Slows Down System Performance

	Article: Q74152
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because EMM386.EXE puts the central processing unit (CPU) in protected mode and
	hooks all general protection (GP) faults, a slowdown of up to 10 percent of
	system performance is expected behavior when running EMM386.EXE.
	
	MORE INFORMATION
	================
	
	Any interrupt called that jumps to the interrupt table at the base of
	conventional memory when EMM386.EXE is loaded will cause a GP fault. EMM386.EXE
	will then hook these GP faults, determine if the interrupt is safe to call, then
	jump to the address pointed to by the interrupt vector that caused the GP fault.
	This will cause a decrease in system performance.
	
	The performance decrease should be no more than 10 percent. If the decrease is
	greater, it is probably due to other factors.
	
	For more information on general protection faults, see "The 80386 Book,"
	published by Microsoft Press.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 slow gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
