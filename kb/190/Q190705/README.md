---
layout: page
title: "Q190705: XADM: How to Set Diagnostic Logging Levels for the Event Service"
permalink: kb/190/Q190705/
---

## Q190705: XADM: How to Set Diagnostic Logging Levels for the Event Service

	Article: Q190705
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	To increase logging for the event service, you must edit the registry. There is
	no way to configure diagnostic logging for the event service in the Microsoft
	Exchange Server Administrator program.
	
	MORE INFORMATION
	================
	
	To set the diagnostic logging level:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Parameters value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeES\Parameters
	
	3. Click to select the Logging Level value.
	
	4. On the Edit menu, click DWORD, and then type the appropriate value. The
	  following number values in the registry correspond to diagnostic logging
	  levels generally used in the Exchange Server Administrator program:
	
	   - 0 is none.
	
	   - 1 is minimum.
	
	   - 3 is medium.
	
	   - 5 is maximum.
	
	5. Click OK.
	
	6. Quit Registry Editor.
	
	Additional query words: xmrp
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
