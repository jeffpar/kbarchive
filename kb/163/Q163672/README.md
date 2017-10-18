---
layout: page
title: "Q163672: Windows NT 4.0 Setup Fails on ThinkPad 535"
permalink: kb/163/Q163672/
---

## Q163672: Windows NT 4.0 Setup Fails on ThinkPad 535

	Article: Q163672
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT 4.0 Setup on an IBM ThinkPad 535, a blue screen trap
	occurs.
	
	CAUSE
	=====
	
	When Pcmcia.sys initializes a PCI PCMCIA controller, its I/O port may be
	relocated to bad I/O resources that may conflict with other I/O ports owned by
	drivers not yet loaded.
	
	This problem was first discovered on an IBM ThinkPad. The new I/O port had a
	conflict with the IDE controller.
	
	RESOLUTION
	==========
	
	Install the updated Pcmcia.sys driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
