---
layout: page
title: "Q137203: XADM: Controlling Intra-Site Replication"
permalink: /kb/137/Q137203/
---

## Q137203: XADM: Controlling Intra-Site Replication

	Article: Q137203
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Controlling intra-site replication can be done by setting two registry entries
	on each Microsoft Exchange Server. They are Pause After Modify and Pause Between
	DSAs.
	
	MORE INFORMATION
	================
	
	Pause After Modify (defaults to 300 seconds) specifies how long the Directory
	service delays before notifying other Microsoft Exchange Servers in the Site
	that a change has occurred. This is useful when the administrator makes many
	changes because each change does not cause the Directory to push out
	notification, it waits until the pause time has expired.
	
	Pause Between DSAs (defaults to 30 seconds) is the amount of time that a
	Microsoft Exchange Server with a change waits between the notification of each
	other server in the Site. For example: If there are four servers in the Site and
	a change is made on Server 1, Server 1 waits until the Pause After Modify time
	has expired before notifying Server 2. Server 1 then waits for Pause Between
	DSAs seconds and then notifies Server 1. Server 1 again waits for Pause Between
	DSAs seconds and then notify Server 4.
	
	The registry entries are located in:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeDS
	                   \Parameters
	                              \Replicator notify pause after modify (secs)
	                              \Replicator notify pause between DSAs (secs)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
