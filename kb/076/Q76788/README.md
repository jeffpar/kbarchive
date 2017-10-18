---
layout: page
title: "Q76788: QAPLUS 4.21 Produces Errors with EMM386.EXE"
permalink: kb/076/Q76788/
---

## Q76788: QAPLUS 4.21 Produces Errors with EMM386.EXE

	Article: Q76788
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	QAPLUS version 4.21 DMA tests do not operate correctly when EMM386.EXE is
	loaded. Errors vary based upon machine type, but when running the DMA tests the
	system may reboot, stop responding (hang), or never complete the DMA tests. This
	is specific to an interaction between EMM386.EXE and QAPLUS. Removing EMM386.EXE
	from the CONFIG.SYS file alleviates the error condition.
	
	MORE INFORMATION
	================
	
	If EMM386 is loaded under MS-DOS version 5.0 (parameters unimportant) and
	Windows 3.0 is running, a QAPLUS DMA test will reboot the system or it will lock
	it up (preventing a CTRL+ALT+DEL reboot).
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
