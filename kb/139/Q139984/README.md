---
layout: page
title: "Q139984: Windows NT Hangs Running Display Test from Control Panel"
permalink: /kb/139/Q139984/
---

## Q139984: Windows NT Hangs Running Display Test from Control Panel

	Article: Q139984
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Display Test in Control Panel, if you move the mouse while Windows
	NT is testing the display, your computer freezes. This happens only on very fast
	computers, such as 133 MHz Pentiums.
	
	CAUSE
	=====
	
	Your mouse uses level triggered interrupts. Edge triggered interrupts do not
	have this problem. Windows NT does not support shared IRQs on any non- PCI
	devices.
	
	Communication across the adapter bus is accomplished thru voltage changes. A
	signal, such as mouse input, creates a voltage change. That voltage change leads
	to a system interrupt. Some adapters cards in computers (EISA bus systems, for
	instance) can be configured to share interrupts. The trigger can be set at the
	edge (when the voltage change occurs) or slightly later (at the new level
	voltage).
	
	Setting two adapters at the same interrupt - one at edge, one at level - allows
	them, in theory, to use the same interrupt without conflict.
	
	PCI architecture is designed to accommodate this technology.
	
	
	RESOLUTION
	==========
	
	If you suspect this may be the problem, contact your motherboard manufacturer to
	inquire whether your system uses level or edge interrupts.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
