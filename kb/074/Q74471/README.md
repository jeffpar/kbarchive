---
layout: page
title: "Q74471: Using Selectors from _Allocate_LDT_Selector Service"
permalink: kb/074/Q74471/
---

## Q74471: Using Selectors from _Allocate_LDT_Selector Service

	Article: Q74471
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
	
	In the Microsoft Windows environment, a selector created by the
	_Allocate_LDT_Selector service is returned in the AX register, the high- order
	word of EAX is usually 0 (zero).
	
	If the service is successful, the returned selector is valid for the LDT in the
	target virtual machine (VM) specified in the VM parameter. If a driver or
	application uses the returned selector in a different VM, while the selector may
	or may not be valid in the LDT, it will not point to the same memory.
	
	To access the same memory from multiple VMs, use the _Allocate_GDT_Selector
	service. If the application uses LDT selectors, be very careful to use them only
	in the VM for which they were built.
	
	The _Allocate_GDT_Selector and _Allocate_LDT_Selector services are documented in
	the "Microsoft Windows Device Driver Kit: Virtual Device Adaptation Guide."
	
	Additional query words: 3.00 3.10 DDKVXD
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
