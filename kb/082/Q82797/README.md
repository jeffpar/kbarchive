---
layout: page
title: "Q82797: Windows 3.1 Does Not Require VPICDA.386"
permalink: /kb/082/Q82797/
---

## Q82797: Windows 3.1 Does Not Require VPICDA.386

	Article: Q82797
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows operating system version 3.1 does not require the VPICDA.386
	patch for IRQ 2 problems.
	
	MORE INFORMATION
	================
	
	Windows 3.0 is incompatible with some devices (most notably Novell network
	cards) configured to use IRQ 2. To correct this problem, Windows 3.0 requires
	VPICDA.386.
	
	All changes made for VPICDA have been incorporated into the Windows 3.1 VPICD
	device driver. Therefore, customers using VPICDA should update to the latest
	VPICD device driver (which Setup will do by default).
	
	
	Additional query words: 3.10 IRQ2 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
