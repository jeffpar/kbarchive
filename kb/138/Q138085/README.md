---
layout: page
title: "Q138085: Appends Fail on Sony SDT 5000 DAT Drive"
permalink: /kb/138/Q138085/
---

## Q138085: Appends Fail on Sony SDT 5000 DAT Drive

	Article: Q138085
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to append a backup onto the end of a tape containing an existing
	backup fails with this message in BACKUP.LOG:
	
	  The tape device reported an error on a request to write data to tape.
	
	  Error reported:
	  Bad data.
	
	Event Error 7 may also be logged in the System Log as shown in the Event Viewer.
	
	CAUSE
	=====
	
	The firmware version of the Sony SDT 5000 tape drive tested for the Hardware
	Compatibility List (HCL) was v3.02. That version is compatible with Windows NT.
	The current firmware version, v3.26, is not.
	
	Firmware revision v3.30 fixes this problem under Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	The SDT 5000 DAT drive is manufactured by Sony, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
