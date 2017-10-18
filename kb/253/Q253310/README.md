---
layout: page
title: "Q253310: XCON: MTA on RAS Server Stops Repeatedly with Events 9315, 9405"
permalink: kb/253/Q253310/
---

## Q253310: XCON: MTA on RAS Server Stops Repeatedly with Events 9315, 9405

	Article: Q253310
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you designate an Exchange Server 5.5 computer as a Remote Access Service
	(RAS) bridgehead server for three remote sites, the message transfer agent (MTA)
	may stop unexpectedly. When you restart the MTA, the service may resume its
	normal function only to stop repeatedly.
	
	The application log of Event Viewer displays the following events:
	
	  Event ID: 9315
	  Source: MSExchangeMTA
	  Type: Warning
	  Description: A resource limit has been reached when attempting to open a RAS
	  association. The number of entries configured is 2. [BASE IL MAIN BASE 1 505]
	  (12)
	
	  Event ID: 9405
	  Source: MSExchangeMTA
	  Type: Error
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate. Error: Double acquire of semaphore 2210. [BASE MAIN BASE 1] (16)
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, stop the MTA service, and then follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	 HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ 
	 MSExchangeMTA\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Double-click the RAS LAN-MTA DMOD threads value, and increase the data value
	  from 2 to 4.
	
	4. Double-click the Concurrent Connections to RAS LAN-MTAs value, and increase
	  the data value to 10.
	
	5. Quit Registry Editor.
	
	6. Restart the MTA.
	
	Additional query words: Q257995
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
