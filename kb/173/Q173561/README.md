---
layout: page
title: "Q173561: XADM: Can Not Limit Message Size Submitted by an Anonymous User"
permalink: /kb/173/Q173561/
---

## Q173561: XADM: Can Not Limit Message Size Submitted by an Anonymous User

{% raw %}

	Article: Q173561
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There is currently no way to limit the size of a message that is submitted or
	posted by an Anonymous User.
	
	MORE INFORMATION
	================
	
	The current design of the Microsoft Exchange Information Store does not limit
	individual message sizes. Individual message limits are controlled by the
	Microsoft Exchange Connector and Message Transfer Agent (MTA) components. The
	only limits that currently exist in the information store are mailbox and folder
	limits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0, 5.0, and 5.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
