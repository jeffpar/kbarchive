---
layout: page
title: "Q173403: Deleting Non-Existent File Causes Event ID 2000"
permalink: kb/173/Q173403/
---

## Q173403: Deleting Non-Existent File Causes Event ID 2000

	Article: Q173403
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Event ID 2000 appears occasionally in the event log. The event is described by
	the following message:
	
	  The server's call to a system service failed unexpectedly.
	
	The data field (in words) looks like the following example:
	
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c000000f 00000000 00000000
	  0020: 00000000 00000000 05180bc5
	
	CAUSE
	=====
	
	Event ID 2000 is caused by a client trying to delete a non-existent file on a
	NetWare server through Gateway Services for NetWare (GSNW). This doesn't appear
	to cause any problems other than the error message in the Event Log.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: gsnw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
