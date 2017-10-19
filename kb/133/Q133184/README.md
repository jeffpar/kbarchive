---
layout: page
title: "Q133184: ATAPI CD-ROM Drive Not Accessible with PCMCIA Devices"
permalink: /kb/133/Q133184/
---

## Q133184: ATAPI CD-ROM Drive Not Accessible with PCMCIA Devices

	Article: Q133184
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade or install Windows NT 3.51 on a laptop computer with two
	enhanced IDE (EIDE) controllers and an ATAPI-compatible CD-ROM drive, the
	following system event appears in the Event Viewer:
	
	  Event: 9
	  Source: ATAPI
	  Type: Error
	  Description: The device \Device\ScsiPort0 - did not respond within the timeout
	  period.
	
	The CD-ROM icon is not available in File Manager.
	
	
	CAUSE
	=====
	
	This problem occurs when the secondary EIDE controller (used for the CD- ROM)
	and a PCMCIA card are configured with the same IRQ.
	
	Some PCMCIA cards (type I, II, or III) are shipped with the IRQ configured for
	IRQ 15. Some EIDE controllers, by default, are also set to IRQ 15.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Verify that the CD-ROM drive operates:
	
	  a. Remove all drivers for the PCMCIA cards.
	
	  b. Turn off your computer and remove all PCMCIA cards.
	
	  c. Restart Windows NT and verify that the CD-ROM drive icon appears in File
	     Manager. If the CD-ROM drive icon does not appear in File Manager, contact
	     your CD-ROM drive manufacturer.
	
	2. If you have already installed the drivers for the PCMCIA cards, change the
	  IRQ to another unused IRQ. If not, install the driver for an unused IRQ.
	
	3. Turn off your computer and insert all PCMCIA cards.
	
	4. Restart Windows NT.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt time-out
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
