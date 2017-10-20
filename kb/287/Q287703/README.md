---
layout: page
title: "Q287703: XFOR: Edb Log Files Grow When Calendar Connector Is Started"
permalink: /kb/287/Q287703/
---

## Q287703: XFOR: Edb Log Files Grow When Calendar Connector Is Started

{% raw %}

	Article: Q287703
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server, used with:
	   - Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Exchange Calendar Connector is started or running, the number
	of edb.log files on the downstream server with the free/busy replica may grow at
	a rapid rate. This behavior can eventually cause the downstream Exchange Server
	computer to stop because of a lack of disk space.
	
	CAUSE
	=====
	
	This behavior can occur when a Calendar Connector schedule is set to Always, and
	the Calendar Connector schedule is connected to a partner system with a large
	number of users on which the schedule is also set to Always.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the schedule to Scheduled or Never. The more calendar
	queries that the connector processes, the more accurate the free/busy public
	folder data for the custom recipients becomes. Each Exchange user's query of the
	custom recipient also updates that custom recipient's information in the
	free/busy public folder.
	
	WORKAROUND
	==========
	
	If the downstream Exchange Server computer is Exchange 2000 Enterprise
	Edition-based, the free/busy public folder can be moved to a different storage
	group, and circular logging can be set on this storage group. If the downstream
	Exchange Server is version 5.5 or earlier, circular logging can be set on all
	servers that host a replica of the free/busy public folder.
	
	MORE INFORMATION
	================
	
	When the schedule is set to Always, the Calendar Connector will, in effect,
	query the partner system for the number of days specified in the "Number of days
	of free/busy information to request from foreign calendars" setting, which
	defaults to 60 days every 15 minutes. In effect, the connector reloads the
	free/busy public folder with 60 days of free/busy information for each custom
	recipient brought in by the corresponding messaging connector every 15 minutes.
	Public folder replication then becomes aware of these changes and replicates
	them around and between sites.
	
	Additional query words: calcon.exe log filies
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
