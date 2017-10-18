---
layout: page
title: "Q164873: PCI Device Not Configured and Resources Unassigned"
permalink: kb/164/Q164873/
---

## Q164873: PCI Device Not Configured and Resources Unassigned

	Article: Q164873
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardware
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows 95 OEM Service Release 2 (OSR2) is installed on your computer, some
	PCI devices may not be configured properly. Device Manager may display an
	exclamation point in a yellow circle next to the devices, with text stating that
	the driver did not load or the driver is incorrect for the hardware. The
	Resources tab may display an IRQ resource without assigned memory resources.
	
	The same device may be configured correctly in Windows 95 or Windows 95 OEM
	Service Release 1.
	
	CAUSE
	=====
	
	If the PCI device does not request any memory resources in its first Base
	Address register (BAR0), the remaining Base Address registers may not be decoded
	properly. The requested resources may not be assigned, and the device may not
	function.
	
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	This behavior has been reported to occur with the following PCI devices:
	
	- PCI-MXI-2 by National Instruments
	
	- VXIpc-800/700 Series by National Instruments
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
