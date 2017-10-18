---
layout: page
title: "Q262802: XADM: Server Monitor Clock Synchronize Sets Incorrect Time"
permalink: kb/262/Q262802/
---

## Q262802: XADM: Server Monitor Clock Synchronize Sets Incorrect Time

	Article: Q262802
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The time or date on an Exchange Server-based computer may be off by several
	hours.
	
	CAUSE
	=====
	
	This can occur if the Server Monitor utility is running against a server or
	servers and the Synchronize check box is selected on the Clock tab of the Server
	Monitor properties (on the servers and the monitoring server).
	
	To verify that this as a possible cause:
	
	1. Start the Exchange Administrator utility, and then connect to an Exchange
	  Server-based computer.
	
	2. Expand the site that has the server with the time variance.
	
	3. Expand the Configuration container under the site.
	
	4. Click the Monitors container under the Configuration container.
	
	5. If you have monitors listed in the Administrator window, double-click the
	  monitor, click Properties, and then click the Clock tab. Repeat this step for
	  each monitor.
	
	If Synchronize is selected, the time for the Exchange Server-based computer is
	synchronized with the time for the monitoring workstation.
	
	If the monitoring workstation is not set at the correct local time and is set to
	synchronize, the monitor causes the time on the Exchange Server-based computer
	to change to the time of the workstation.
	
	RESOLUTION
	==========
	
	To prevent the Server Monitor utility from changing the time on the Exchange
	Server-based computer, either click to clear the Synchronize check box on the
	Clock tab in the Server Monitor properties, or verify that all monitoring
	workstations are set to their correct local time.
	
	MORE INFORMATION
	================
	
	The Synchronize option takes into account variances with time zone differences
	and only adjusts the time on the Exchange Server-based computer if there is an
	incorrect time for the monitoring workstation.
	
	For example, if you have a workstation that is in the Eastern Time Zone
	(Greenwich Mean Time minus 5 hours) monitoring an Exchange Server that resides
	in the Pacific Time Zone (Greenwich Mean Time minus 8 hours), the monitor does
	not adjust the time of the Exchange Server-based computer to that of the
	monitoring workstation if the time is correct on the monitoring workstation.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
