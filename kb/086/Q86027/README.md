---
layout: page
title: "Q86027: Err Msg: Cannot Start Windows in Standard Mode (Low Memory)"
permalink: kb/086/Q86027/
---

## Q86027: Err Msg: Cannot Start Windows in Standard Mode (Low Memory)

	Article: Q86027
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows may display the following error messages when available XMS
	memory is below the requirement for standard mode and a UMB provider (for
	example, EMM386.EXE) is loaded in the CONFIG.SYS file:
	
	  Cannot Start Windows in Standard Mode
	
	  Make sure you are not running other protected-mode software or try starting
	  Windows in 386 Enhanced mode by typing WIN /3.
	
	After typing "win /3" (without the quotation marks), the following message is
	displayed:
	
	  Insufficient extended memory available to run Windows
	
	  Quit one or more applications to increase available memory or restart your
	  computer.
	
	CAUSE
	=====
	
	Standard mode Windows 3.1 is VCPI-compliant. VCPI is an industry protocol to
	allow 386-based memory managers such as EMM386 to coexist with 286- protected
	mode MS-DOS extenders. However, under low-memory situations where available XMS
	is less than the Windows 3.1 standard mode requirement, UMB providers (for
	example, EMM386) cause Windows to generate the above error message.
	
	Specifically with MS-DOS or the Windows 3.1 EMM386, the error message only
	appears with the NOEMS switch (and DOS=UMB). When EMM386 is loaded with either
	the RAM switch (to also provide expanded memory) or with no switch (to only
	provide expanded memory), Windows 3.1 will execute in standard mode.
	
	To avoid this (low memory) error message, Windows will need more available XMS
	memory. If drivers for an external disk cache and/or RAMDrive are loaded, either
	reduce the extended memory allocated to these drivers or remove them entirely.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
