---
layout: page
title: "Q164223: PC Cards May Not Be Recognized in Docking Station"
permalink: /kb/164/Q164223/
---

## Q164223: PC Cards May Not Be Recognized in Docking Station

	Article: Q164223
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
	
	On certain laptop computers running Windows 95 OEM Service Release 2 (OSR2),
	when a PC Card is inserted into a slot in the docking station, the card may not
	be recognized.
	
	CAUSE
	=====
	
	This symptom has been observed with certain docking stations that use the TI
	1130 PCI-to-CardBus bridge, and occurs only when the PC Card is inserted in a
	CardBus slot connected through this bridge (that is, in the docking station).
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	If you are experiencing this behavior, contact your computer manufacturer for a
	possible remedy.
	
	If the TI 1130 PCI-to-CardBus bridge is configured as a "positive decode" bridge,
	CardBus cards will be recognized but non-CardBus PC Cards (type R2 PCMCIA cards)
	may not be recognized.
	
	If the TI 1130 PCI-to-CardBus bridge is configured as a "subtractive decode"
	bridge, non-CardBus PC Cards (type R2 PCMCIA cards) will be recognized but
	CardBus cards will not be.
	
	Additional query words: 95 Texas Instruments TI1130
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
