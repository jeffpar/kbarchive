---
layout: page
title: "Q247775: XADM: Exchange Server Unavailable at Regular Intervals"
permalink: /kb/247/Q247775/
---

## Q247775: XADM: Exchange Server Unavailable at Regular Intervals

{% raw %}

	Article: Q247775
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
	
	When you are administering Microsoft Exchange Server 5.5, you may receive
	reports every six hours that users are unable to gain access to their inboxes.
	This lasts for about 15 minutes and occurs on an Exchange Server that has many
	more inboxes than the other servers in the site.
	
	When you examine the MSExchangeDS\Pending Replication Synchronization counter in
	Performance Monitor, you see that the counter records abnormally high numbers
	during the problem time periods.
	
	CAUSE
	=====
	
	This behavior can occur when the server's Directory service is unable to handle
	all of the remote procedure call (RPC) requests it receives.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, change two values in the registry. Follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Max Threads(EXDS+NSP+DSA) value entry under the following registry
	  key:
	
	HKLM\System\CurrentControlSet\Services\MSExchangeDS\Parameters
	
	3. Double-click the value and set it to the equivalent of (50 * number of
	  processors) + 30.
	
	4. Locate the "Replicator Maximum concurrent read threads" value entry under the
	  following registry key:
	
	HKLM\System\CurrentControlSet\Services\MSExchangeDS\Parameters
	
	5. Double-click the value, and then set it to zero (0).
	
	6. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	When you examine the Period-Rep-Sync-Times attribute on the site properties
	dialog box in Raw mode, you see that the schedule is set at every six hours.
	This is the interval at which each server in the site sends out requests to get
	Directory updates from within the site.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
