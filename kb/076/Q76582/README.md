---
layout: page
title: "Q76582: PRB: Reset A20 Bit Set During DPMI Simulate Interrupt Crash"
permalink: kb/076/Q76582/
---

## Q76582: PRB: Reset A20 Bit Set During DPMI Simulate Interrupt Crash

	Article: Q76582
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows-based application that specifies "reset interrupt controller and A20
	line" when calling the MS-DOS protected mode interrupt (DPMI) function "Simulate
	Real Mode Interrupt" can cause Windows to crash.
	
	RESOLUTION
	==========
	
	Applications that use the "Simulate Real Mode Interrupt" function must ensure
	that this bit is not set.
	
	MORE INFORMATION
	================
	
	The "Simulate Real Mode Interrupt" function is documented in the DPMI
	specification.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
