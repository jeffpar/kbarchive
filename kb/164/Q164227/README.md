---
layout: page
title: "Q164227: Second PC Card Not Recognized When Inserted in Dock"
permalink: /kb/164/Q164227/
---

## Q164227: Second PC Card Not Recognized When Inserted in Dock

{% raw %}

	Article: Q164227
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
	when a PC Card is inserted into a slot in the docking station while another slot
	in the docking station is occupied by a PC Card, the newly inserted PC Card may
	not be recognized.
	
	CAUSE
	=====
	
	This symptom has been observed with certain docking stations that use the TI
	1130 PCI-to-CardBus bridge, and occurs only when the PC Card is inserted into a
	CardBus slot connected through this bridge (that is, in the docking station).
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	
	MORE INFORMATION
	================
	
	This symptom may occur regardless of whether the PCI-to-CardBus bridge in the
	docking station is configured as a "positive decode" or a "subtractive decode"
	bridge.
	
	
	If you are experiencing this symptom, contact your computer manufacturer for a
	possible remedy.
	
	Additional query words: 95 Texas Instruments TI1130
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
