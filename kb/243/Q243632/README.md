---
layout: page
title: "Q243632: XCON: Maximum X.400 Connectors on an Exchange Server Computer"
permalink: kb/243/Q243632/
---

## Q243632: XCON: Maximum X.400 Connectors on an Exchange Server Computer

	Article: Q243632
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
	
	The maximum number of X.400 Connectors that can be installed on a single
	Exchange Server computer varies depending on practical limits for each server,
	such as hardware, network bandwidth, and so on. This article offers some
	suggestions for installing a large number of X.400 Connectors on a bridgehead
	server.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- Be sure to use Exchange Server version 5.5 and the latest service pack. There
	  are some significant message transfer agent (MTA) performance and diagnostics
	  enhancements in Exchange Server 5.5, and each service pack improves upon
	  these.
	
	- Set the TCP/IP control blocks value according to the number of X.400
	  Connectors installed on the server. You may need to manually adjust this
	  value if more than two X.400 Connectors are installed on an Exchange Server
	  computer. It is found at the following registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\TCP/IP
	  control blocks
	
	  By default, this value is set to 20 (decimal). However, if there are more than
	  two X.400 Connectors on the server, allocate enough control blocks (10 X the
	  number of X.400 connectors) to allow for the maximum number of associations
	  over each connector (this maximum number is 10, 9 associations for low and
	  normal priority mail and 1 association is reserved for urgent priority
	  mail).
	
	  The actual maximum entry in the registry for is 1,250 decimal, but this is
	  taken from a pool of control blocks for the TCP/IP, TP4, and X.25 transport
	  stacks. These registry values correspond to TCP/IP control blocks, TP4
	  control blocks, and Eicon X.25 connections, respectively. By default, all of
	  these values are set to 20 decimal, so the TCP/IP control blocks value can be
	  increased up to 1,210 decimal without a problem. This permits a maximum of
	  121 X.400 Connectors on a single server, each using the maximum number of
	  allowable associations. This number is only the theoretical value. The
	  capacities of the bridgehead server may limit the actual number of X.400
	  Connectors to a value less than this.
	
	  It is unlikely that each X.400 Connector would process enough mail to require
	  the maximum number of associations for each connector. Furthermore, if the
	  X.25 transport stack is not in use, this value can be reduced to a value of
	  zero, thus increasing the available control blocks for the TP4 or TCP/IP
	  stack by 20. TP4 control blocks can be set below the default value of 20,
	  however, doing so does not allocate any more control blocks for TCP/IP.
	
	  If you set the maximum number of (pooled) control blocks allowed too high, you
	  will get the following error message:
	
	  Could not start the Microsoft Message Transfer Agent service on
	  <servername>. Error 2140: an internal Windows NT error occurred.
	
	  You will also see event ID 4300 in the application log:
	
	  Event ID: 4300
	  Source: MSExchangeMTA
	  Type: ERROR
	  Category: Configuration
	
	  Unable to initialize due to a bad configuration. Contact Microsoft Technical
	  Support. Error code=<variable> [1 POP4 MAIN BASE 1] (16)
	
	  For example, using the above guidelines, if you have 30 X.400 Connectors
	  installed and functioning on an Exchange Server computer, set TCP/IP control
	  blocks to 300 decimal for maximum performance. If this setting is too low for
	  the number of X.400 Connectors installed on the server (for example, 70
	  decimal), and all the associations are in use, event ID 9156 may appear in
	  the application event log:
	
	  Event ID: 9156
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Resource
	  Description: A resource limit has been reached while attempting to open an
	  association. There are no free control blocks available for network type 1.
	  The configured count is 70. [BASE IL MAIN BASE 1 282] (10)
	
	- Consider splitting a large number of X.400 Connectors across several servers
	  (30-50 for each server) to reduce the impact of a single-point-of-failure
	  caused by either network or hardware issues.
	
	- Performance Monitor logs help gauge how the server is performing as more
	  connectors are added. It is a good idea to have a baseline of normal usage
	  for the processor, disk, page file, and so on to judge how many connectors a
	  server can handle.
	
	
	For additional information regarding how the Exchange Server 5.5 MTA handles
	control blocks, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q194589 XCON: Event ID 57 from the Exchange Message Transfer Agent
	
	For proactive as well as reactive MTA troubleshooting and monitoring, see the
	"MTA Troubleshooting Guide" on TechNet or at the following Web site:
	
	  http://technet.microsoft.com
	
	Additional query words: 9156, 57
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
