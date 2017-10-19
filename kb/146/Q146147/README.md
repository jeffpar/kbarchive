---
layout: page
title: "Q146147: XCLN: 8 MB RAM and No Swap File Prevents MAPI EMS Login"
permalink: /kb/146/Q146147/
---

## Q146147: XCLN: 8 MB RAM and No Swap File Prevents MAPI EMS Login

	Article: Q146147
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 17-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 95 systems with 8 MB of RAM or less may be unable to run the
	Microsoft Schedule+ or the Microsoft Exchange clients.
	
	STATUS
	======
	
	This is by design. More than 8 MB of RAM (physical plus swapfile) is required
	for the MAPI and OLE components of Schedule+ and Exchange to function properly.
	
	
	Additional query words: memory sysusage win95
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
