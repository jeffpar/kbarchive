---
layout: page
title: "Q257348: XCON: 2026 and 3016 Warnings During Periods of High Server Use"
permalink: kb/257/Q257348/
---

## Q257348: XCON: 2026 and 3016 Warnings During Periods of High Server Use

	Article: Q257348
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	During periods of high server use, the following error messages may be logged in
	the application event log:
	
	  Source: MSExchangeMTA
	  2026 - An internal MTA error occurred. Contact Microsoft Product
	  Support Services. Unable to write to the message tracking log, error
	  1%.
	
	  Source: MSExchangeIMC
	  3016 - An error occurred while logging a message tracking record. This
	  will not affect message delivery. Verify that message tracking is
	  configured correctly.
	
	Mail flow is not affected by these messages.
	
	CAUSE
	=====
	
	This problem can occur when the system attendant writes to the message tracking
	log (located in the Tracking.log folder under Exchsrvr). When the message
	transfer agent (MTA), Internet Mail Service, or other service sends these
	messages to the system attendant, the system attendant holds the messages in a
	buffer and only writes to the log if a number of messages that is specified in
	the registry (the LogFlushFreq registry value) is reached. The system attendant
	spends less time waiting for disk input/output to finish if you increase this
	buffer, which reduces or eliminates the 2026 and 3016 event IDs.
	
	The default value of the LogFlushFreq registry value is 0x10 hexadecimal (16
	decimal).
	
	RESOLUTION
	==========
	
	To resolve this problem, increase this buffer by changing the LogFlushFreq
	registry value:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the LogFlushFreq value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MsExchangeSA\Parameters
	
	3. On the Edit menu, click DWORD, type "100" (without the quotation marks), and
	  then click OK.
	
	4. Quit Registry Editor.
	
	Stop and restart all of the Exchange Server services so that this change takes
	effect.
	
	Additional query words: "tracking logs"
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
