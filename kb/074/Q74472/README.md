---
layout: page
title: "Q74472: Initializing Virtual Devices and Hooking Interrupts"
permalink: kb/074/Q74472/
---

## Q74472: Initializing Virtual Devices and Hooking Interrupts

	Article: Q74472
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When initializing a device driver in the Microsoft Windows graphical
	environment, perform as much of the initialization as possible in the
	Device_Init phase. Code in the Sys_Critical_Init and Init_Complete sections
	should be minimal.
	
	When the driver processes hooked interrupts, regardless of the initialization
	order value, all devices are called with Sys_Critical_Init before any are called
	for Device_Init. Therefore, regardless of the initialization order, all hooks
	done during Device_Init will occur after all hooks done during
	Sys_Critical_Init.
	
	Additional query words: 3.00 3.10 DDKVXD VxD hook interrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
