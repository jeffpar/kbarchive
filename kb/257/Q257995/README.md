---
layout: page
title: "Q257995: XCON: Dynamic RAS Connector Server Does Not Work with 9315, 9405"
permalink: kb/257/Q257995/
---

## Q257995: XCON: Dynamic RAS Connector Server Does Not Work with 9315, 9405

	Article: Q257995
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) service may stop responding on an Exchange
	Server computer that one or more Dynamic Remote Access Service (RAS) Connectors
	is installed on. The following events may be logged in the application event
	log:
	
	  9315 MTA
	  A resource limit has been reached when attempting to open a RAS
	  association. The number of entries configured is 2.
	
	  9405 MTA
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Double acquire of semaphore 2210.
	
	CAUSE
	=====
	
	This problem can occur because, for a number of possible reasons, you need to
	increase certain MTA RAS registry parameters. You may need to increase these
	registry parameters if a high number of Dynamic RAS Connectors are installed on
	the Exchange Server computer, or if you run Performance Optimizer with certain
	settings or through manual intervention.
	
	RESOLUTION
	==========
	
	The default value for the RAS LAN-MTA DMOD Threads value is 2. The default value
	for the "Concurrent connections to RAS LAN-MTAs" value is 0xa (10 decimal). To
	resolve this problem, note these registry values and, if necessary, increase
	them to the values provided in the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the RAS LAN-MTA DMOD Threads value under the following key in the
	  registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	3. If necessary, increase this value from 2 to 4; on the Edit menu, click
	  String, type "4" (without the quotation marks), and then click OK.
	
	4. Locate the "Concurrent connections to RAS LAN-MTAs" value under the following
	  key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	5. If necessary, increase this value from 2 to 10 (decimal); on the Edit menu,
	  click String, type "10" (without the quotation marks) (decimal), and then
	  click OK.
	
	6. Quit Registry Editor.
	
	7. Restart the MTA service after you make these changes so that they take
	  effect.
	
	WORKAROUND
	==========
	
	To work around this problem, restart the MTA service. Even if you do not make
	the registry changes in the "Resolution" section of this article, if you restart
	the MTA service you alleviate this problem temporarily. If you want a more
	permanent solution, make the registry changes in the "Resolution" section of
	this article.
	
	Additional query words: error Q253310
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
