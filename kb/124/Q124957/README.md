---
layout: page
title: "Q124957: ATAPI Driver Fails to Load For Sony CDU-55E CD-ROM"
permalink: /kb/124/Q124957/
---

## Q124957: ATAPI Driver Fails to Load For Sony CDU-55E CD-ROM

	Article: Q124957
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
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
	
	After you shutdown and restart (warm boot) Windows NT with a Sony CDU-55E ATAPI
	CD-ROM attached to a Sony ATAPIKIT (Future Domain FD-16003 ATAPI controller),
	the following error message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The following is logged in the Event Viewer:
	
	  Event ID: 7026, Source: Service Control Manager, Type: Error
	  Description: The following boot-start driver(s) failed to load:
	  ATAPI
	
	You will not be able to continue installing Windows NT from the CD and will be
	prompted for disk 4.
	
	CAUSE
	=====
	
	This problem occurs only when a warm boot of your computer is performed. If you
	cold boot (fully power down) your computer, the ATAPI driver loads properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	MORE INFORMATION
	================
	
	ATAPIKIT, a Future Domain FD-16003 controller, has two configurable base I/O
	address settings (using jumper J8):
	
	J8 Jumper in = Base I/O address of 170 and IRQ15 jumper selected
	J8 Jumper out = Base I/O address of 160 and IRQ10 jumper selected
	
	Windows NT supports the use of base I/O address 170 and interrupt (IRQ) 15. If
	this setting is not configured, the ATAPI driver does not load at all.
	
	Additional query words: prodnt 1.2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
