---
layout: page
title: "Q166400: Inserting SRAM Card into Docking Station May Hang Computer"
permalink: kb/166/Q166400/
---

## Q166400: Inserting SRAM Card into Docking Station May Hang Computer

	Article: Q166400
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
	
	When the following conditions are all true, your computer may stop responding
	(hang):
	
	- Windows 95 OEM Service Release 2 (OSR2) or 2.1 is installed
	
	- The computer docking station uses a TI 1131 CardBus controller
	
	- A SRAM card is inserted into a slot in the docking station
	
	- A SRAM card is the first card inserted after booting
	
	CAUSE
	=====
	
	This behavior occurs because of the manner in which the PCCARD driver in OSR2
	interacts with the page registers on the TI 1131 CardBus controller.
	
	RESOLUTION
	==========
	
	
	To work around this issue, insert another PC Card device into one of the docking
	station's slots before inserting the SRAM card.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This behavior has not been reported to occur with docking stations that use the
	TI 1130 CardBus controller.
	
	
	Additional query words: dock PCMCIA
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
