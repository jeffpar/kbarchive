---
layout: page
title: "Q175590: Cardbus Cards May Not Work with Vesuvius Chip Set"
permalink: /kb/175/Q175590/
---

## Q175590: Cardbus Cards May Not Work with Vesuvius Chip Set

	Article: Q175590
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
	
	CardBus cards may not work on computer with a Vesuvius chip set.
	
	CAUSE
	=====
	
	The Vesuvius PCI IRQ miniport driver (Pcimp.pci) does not support the SetTrigger
	and GetTrigger functions that report and set level-triggered interrupts. In
	order for the CardBus bridge to be configured for a CardBus card's memory and
	I/O windows, CardBus cards require level-triggered interrupts.
	
	RESOLUTION
	==========
	
	
	To work around this problem, disable PCI Bus IRQ Steering in Device Manager. To
	do so, follow these steps.
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  the System icon.
	
	2. Click the Device Manager tab.
	
	3. Double-click the System Devices branch to expand it.
	
	4. Double-click PCI Bus, and then click the IRQ Steering tab.
	
	5. Click the Use IRQ Settings check box to clear it, click OK, and then click
	  OK.
	
	6. Restart your computer.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q174733 OPTi FireStar Chip Set Not Recognized by Windows 95
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words: chipset
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
