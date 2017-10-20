---
layout: page
title: "Q159919: XADM: Public Folder Hierarchy Replicates Through Messages"
permalink: /kb/159/Q159919/
---

## Q159919: XADM: Public Folder Hierarchy Replicates Through Messages

{% raw %}

	Article: Q159919
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Public Folder hierarchy, as you can see in the
	Exchange Server Administrator program, is always replicated to other servers in
	the organization, even if public folder replication is disabled.
	
	Unlike other directory information, the hierarchy is always replicated through
	the exchange of messages handled by the message transfer agent (MTA). This is
	also true when replicating within the same site.
	
	MORE INFORMATION
	================
	
	It is not possible to completely prevent public folder replication messages from
	going through the MTA queues. The hierarchy is always replicated, even if you
	select Never as the public folder replication schedule.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
