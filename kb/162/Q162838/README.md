---
layout: page
title: "Q162838: Stop 0xA IRQL_NOT_LESS_OR_EQUAL Digifep5.sys During Shutdown"
permalink: /kb/162/Q162838/
---

## Q162838: Stop 0xA IRQL_NOT_LESS_OR_EQUAL Digifep5.sys During Shutdown

{% raw %}

	Article: Q162838
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to shut down your Windows NT 4.0 computer after receiving the message
	"It is now safe to turn off your computer," you get a STOP 0x0000000A
	IRQL_NOT_LESS_OR_EQUAL Digifep5.sys error.
	
	Some systems may exhibit the same problem with the "Restart the computer" option.
	
	CAUSE
	=====
	
	Windows NT unsuccessfully attempts to stop the DIGI service before it is shut
	down.
	
	RESOLUTION
	==========
	
	To work around this problem, try either of the following:
	
	- Before attempting to shut down the computer, stop the DIGI Board service or
	  the Remote Access Service (RAS).
	
	  -or-
	
	- Download the latest driver, 4000821S.exe, from DIGI Web page, and update the
	  current driver. You can download the driver from:
	
	  ftp://ftp.dgii.com/support/drivers/winnt/released/async
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt DIGI services 0000000A
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
