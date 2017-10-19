---
layout: page
title: "Q265096: &quot;Stop 41&quot; Error Message Occurs and Event 2000 Is Logged"
permalink: /kb/265/Q265096/
---

## Q265096: &quot;Stop 41&quot; Error Message Occurs and Event 2000 Is Logged

	Article: Q265096
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Server, you may receive the following error message:
	
	  Stop 00000041 (0x00001000 0x00007924 0x00000420 0x00038f53)
	
	NOTE: The parameters may vary.
	
	In addition, event ID 2000 messages with error codes of C000009A are reported in
	the system event log, with the following message:
	
	  STATUS_INSUFFICIENT_RESOURCES ((NTSTATUS)0xC000009AL).
	
	CAUSE
	=====
	
	Both the event message and the error message occur because the non-paged pool
	memory resource is depleted. (Windows NT 4.0 contains a maximum of 128 MB of
	non-paged pool memory, and Windows 2000 has a maximum of 256 MB.) The non-paged
	pool leak is caused by the Emulex Fiber SCSI controller driver (Elxsli2.sys).
	
	MORE INFORMATION
	================
	
	Emulex is in the process of addressing this issue.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
