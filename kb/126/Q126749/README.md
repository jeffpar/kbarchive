---
layout: page
title: "Q126749: Err Msg: System in Protected Mode. System Halted"
permalink: /kb/126/Q126749/
---

## Q126749: Err Msg: System in Protected Mode. System Halted

	Article: Q126749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows or Windows for Workgroups, you receive the
	following error message:
	
	  System in protected mode. System halted
	
	CAUSE
	=====
	
	A required entry for the Mylex Disk Array controller card (DAC960) may be
	missing from the CONFIG.SYS file. The DAC960 requires the DACDRVR.SYS driver
	file to be loaded in the CONFIG.SYS file.
	
	RESOLUTION
	==========
	
	Specify the DACDRVR.SYS driver file in the CONFIG.SYS file, or contact Mylex to
	receive an updated DACDRVR.SYS driver file.
	
	MORE INFORMATION
	================
	
	The BIOS on the DAC960 can be used only in real-mode operating systems and is
	incompatible with some memory managers. To use the DAC960 with Windows or
	Windows for Workgroups or with a memory manager, the DACDRVR.SYS driver file
	must be loaded in the CONFIG.SYS file. According to Mylex, the DACDRVR.SYS
	driver file should be the first device loaded in the CONFIG.SYS file.
	
	For additional information, please contact Mylex Technical Support at (800)
	776-9539.
	
	The Mylex products discussed here are manufactured by a vendor independent of
	Microsoft. We make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
