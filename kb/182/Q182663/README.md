---
layout: page
title: "Q182663: XADM: NDR After Information Store Stops Unexpectedly"
permalink: /kb/182/Q182663/
---

## Q182663: XADM: NDR After Information Store Stops Unexpectedly

{% raw %}

	Article: Q182663
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message and then the information store stops unexpectedly before
	the message has been delivered, you may receive a non-delivery report (NDR).
	
	CAUSE
	=====
	
	When a Microsoft Exchange Server computer is unable to deliver a message because
	of a transient system failure, it may attempt to deliver the message again, or
	you may receive an NDR. If the server determines that the problem is temporary,
	it attempts to deliver the message again. If the server determines that the
	problem is permanent, it does not attempt to deliver the message again and you
	receive an NDR.
	
	The information store contains a list of problems that the server should consider
	temporary. If the specific circumstances under which the information store stops
	unexpectedly are not in this list, the server does not attempt to deliver the
	message again and you receive an NDR.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
