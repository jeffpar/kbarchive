---
layout: page
title: "Q173557: XADM: No Messages Generated when 2 Clients Modify the Same Rule"
permalink: /kb/173/Q173557/
---

## Q173557: XADM: No Messages Generated when 2 Clients Modify the Same Rule

{% raw %}

	Article: Q173557
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When two Microsoft Exchange Clients update the same rule at the same time, the
	last client to commit the change will overwrite the other client's changes. This
	is the last writer wins scenario. There is no conflict message generated, and no
	events are logged.
	
	RESOLUTION
	==========
	
	This behavior is by design. Folder Associate Information (FAI) messages have
	never made allowances for a conflict scenario, the last write will always win.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
