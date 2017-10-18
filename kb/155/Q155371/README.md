---
layout: page
title: "Q155371: Windows NT 4.0 Does Not Support HP ScanJet Interface Card"
permalink: kb/155/Q155371/
---

## Q155371: Windows NT 4.0 Does Not Support HP ScanJet Interface Card

	Article: Q155371
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 does not support the Hewlett-Packard (HP) ScanJet when it is
	connected to an HP ScanJet interface card.
	
	Windows NT 4.0 does support the HP ScanJet when it is connected to a supported
	SCSI controller.
	
	MORE INFORMATION
	================
	
	There are two versions of the HP ScanJet interface cards (SCSI Controller):
	
	- The older version of the controller is referred to as the "NCR SDMS 53C400A"
	  and it supports the use of only IRQ 5. Which is not reconfigurable. All other
	  installed hardware must be using an IRQ other than 5 or the scanner will not
	  function.
	
	- The newer version of the controller is referred to as the "Symbios Logic
	  400a" and it supports a wider variety of IRQ's. It is not limited to the use
	  of IRQ 5, but the IRQ it does use must not conflict with any other hardware
	  device installed in the system or else it will not function appropriately.
	
	
	For information about how to contact the manufacturers listed above, query in the
	Knowledge Base for one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
