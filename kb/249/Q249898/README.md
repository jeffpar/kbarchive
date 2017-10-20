---
layout: page
title: "Q249898: XADM: MTA Queue Full When Directory Replication Set to Always"
permalink: /kb/249/Q249898/
---

## Q249898: XADM: MTA Queue Full When Directory Replication Set to Always

{% raw %}

	Article: Q249898
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect multiple sites with site connectors and then schedule directory
	replication to occur 'Always', you may find that messages fill the message
	transfer agent (MTA) queue.
	
	In addition, the process utilization on the connected Exchange Server computers
	may reach close to 100 percent, but you receive no error messages and Event
	Viewer shows no relevant events.
	
	CAUSE
	=====
	
	This behavior can occur when the Exchange Server computers already regularly
	receive heavy message loads, and constant directory replication then increases
	the stress on the connectors and servers.
	
	RESOLUTION
	==========
	
	To resolve this behavior, set a staggered replication schedule for the
	connectors on each Exchange Server computer where the queue is full:
	
	1. In the Administrator program, open the Directory Replication object, and then
	  click the Schedule tab.
	
	2. Click Never to set the replication schedule for the connectors, and then
	  click OK.
	
	3. Restart the Exchange Server computer.
	
	4. Monitor the work queue. When the queue falls to zero and process utilization
	  drops, reschedule directory replication so it occurs at staggered times.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
