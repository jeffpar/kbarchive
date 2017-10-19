---
layout: page
title: "Q128802: VGA Cards Not Operational on Secondary PCI Slots"
permalink: /kb/128/Q128802/
---

## Q128802: VGA Cards Not Operational on Secondary PCI Slots

	Article: Q128802
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some computers such as the Intergraph TD Workstation series allow VGA video
	cards to be used in any of the secondary PCI slots. This configuration does not
	work in Windows NT version 3.5.
	
	CAUSE
	=====
	
	This problem occurs when the I/O port allocation assigns an address to a primary
	PCI device which conflicts with the 10 bit decoding performed by a PCI bridge
	chip for the PCI VGA card plugged into a secondary slot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt adapter
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
