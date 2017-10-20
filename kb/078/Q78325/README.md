---
layout: page
title: "Q78325: Ring Protection Under Windows 3.1"
permalink: /kb/078/Q78325/
---

## Q78325: Ring Protection Under Windows 3.1

{% raw %}

	Article: Q78325
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The privilege level at which applications and dynamic-link libraries (DLLs) run
	has changed from ring 1 in versions of Microsoft Windows prior to Windows 3.1 to
	ring 3 in Windows 3.1. This change makes Windows more consistent with the
	protection scheme used in other operating systems, and enables future versions
	of Windows to take better advantage of the page protection mechanism of the 386
	processor.
	
	MORE INFORMATION
	================
	
	The architecture of the 386 processor defines four privilege levels to protect
	system code and data from being overwritten inadvertently or maliciously by code
	of lesser privilege. The processor's current privilege level (CPL) is contained
	in the low-order two bits of the selector in the CS register. The privilege
	level of 0 (zero) is the most privileged; the privilege level of 3 is the least
	privileged. When code is running at a given privilege level, it is said to be
	running in that "ring" [for example, code running at privilege level 0 (zero) is
	said to run in ring 0].
	
	When Windows is running in enhanced mode, the enhanced mode layer (the virtual
	machine manager and all virtual devices) runs in ring 0. Code run in
	virtual-8086 (V86) mode, like MS-DOS and the BIOS, runs in ring 3. The remaining
	code (applications and DLLs, including kernel, user, GDI, and all Windows device
	drivers) runs in ring 1 under Windows 3.0, and in ring 3 under Windows 3.1.
	
	In discussing the implications of this change, it is important to realize that
	all of the code that was running at ring 1 has been moved to ring 3. No
	distinction is made between any Windows applications and DLLs, not even the
	Windows kernel DLL or device drivers. This means that there is no net change in
	the privilege of this software. In other words, under both Windows 3.0 and 3.1,
	there are functionally only two privilege levels in use: ring 0 code, and
	everything else. The fact that both rings 1 and 3 are used in Windows 3.0 is
	insignificant because the code in these rings is generally in isolated address
	spaces.
	
	Therefore, for Windows 3.1, the only real implication of the change is that the
	privilege level is numerically different. If an application specifically tests
	to see if it is running in ring 1 (by checking the bits in the code selector),
	that test will fail under Windows 3.1. Similarly, if an application directly
	modifies the local descriptor table (LDT), this modification can create an
	invalid selector in Windows 3.1. Other than that, this privilege change does not
	affect what applications can do.
	
	One of the main reasons for the change is to pave the way for future enhancements
	to protection in Windows. One of the 386 processor's protection features is
	called page protection. This mechanism allows the operating system to flag
	memory pages (4K in size) as either a "User" or a "Supervisor" page. Code that
	runs at ring 0, 1, or 2 may access either user or supervisor pages. However,
	code running at ring 3 cannot access supervisor pages, and can write only to
	pages that are marked as read/write. This powerful protection mechanism may be
	used to further enhance protection under Windows. This feature is not
	implemented in Windows 3.1.
	
	Additional query words: 3.10 DDKVXD protection ring1 ring3
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
