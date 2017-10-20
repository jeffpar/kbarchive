---
layout: page
title: "Q254606: XADM: How to Enable Additional Information Store Logging"
permalink: /kb/254/Q254606/
---

## Q254606: XADM: How to Enable Additional Information Store Logging

{% raw %}

	Article: Q254606
	Product(s): Microsoft Exchange
	Version(s): 5.5
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
	
	You may need to enable additional Microsoft Windows NT Performance Monitor
	information store logging for troubleshooting purposes.
	
	MORE INFORMATION
	================
	
	To enable additional Performance Monitor information store logging, you need to
	edit the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Library value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\Performance
	
	3. On the Edit menu, click String, change the value from
	  c:\exchsrvr\bin\mdbperf.dll to c:\exchsrvr\bin\mdbperfX.dll, and then click
	  OK.
	
	4. Quit Registry Editor.
	
	After you modify this registry value, you must restart Performance Monitor to see
	the new counters. The new counters are located under the MSExchangeIS object.
	
	Additional query words: enhanced extended performance monitor
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
