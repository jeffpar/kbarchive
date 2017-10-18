---
layout: page
title: "Q170324: CMD PCI-0646U Accessed in Compatibility Mode in OSR2"
permalink: kb/170/Q170324/
---

## Q170324: CMD PCI-0646U Accessed in Compatibility Mode in OSR2

	Article: Q170324
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an IDE controller based on the CMD PCI-0646U chip set in Windows 95
	OEM Service Release 2 or 2.1 (OSR2), the controller is not recognized,
	protected-mode drivers are not loaded, and the controller is accessed in
	Compatibility (BIOS) mode.
	
	CAUSE
	=====
	
	The CMD PCI-0646U chip set uses some control registers in a different manner
	from earlier models of CMD controllers. The Windows PCI driver accesses these
	registers in a way that causes it not to recognize this controller.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 95 chipset
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
