---
layout: page
title: "Q114418: Adaptec Drivers Include BIOS Detection Code"
permalink: /kb/114/Q114418/
---

## Q114418: Adaptec Drivers Include BIOS Detection Code

{% raw %}

	Article: Q114418
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Workstation and Windows NT Server version 3.5 contain code
	that Adaptec AHA154x SCSI controllers use to detect BIOS conflicts with other
	network or video adapters.
	
	MORE INFORMATION
	================
	
	BIOS conflicts are sometimes interpreted as driver problems. The driver uses the
	Adaptec code to report to the system where its BIOS appears in memory, and the
	system uses this information to detect conflicts with other cards.
	
	When a conflict is detected, it may appear as though the driver caused the
	conflict because your computer performed normally before the conflict was
	detected or still does in MS-DOS. This is deceiving because many problems caused
	by BIOS conflicts are subtle and not noticed for months of operation. Following
	are some of the more noticeable symptoms:
	
	- A warm reboot causes the AHA154x to "go away."
	
	- The floppy drive doesn't work reliably, even on systems that use an internal
	  non-Adaptec floppy controller.
	
	- The video driver's colors are incorrect.
	
	- Network transfer causes data corruption.
	
	Detected BIOS conflicts are described in the event log, and conflicting cards are
	identified. Use the vendor's manual to adjust BIOS locations and eliminate
	conflicts.
	
	
	The AHA154x line of SCSI controllers manufactured by Adaptec, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
