---
layout: page
title: "Q166563: XADM: System Attendant Stops While Tracking a Message"
permalink: /kb/166/Q166563/
---

## Q166563: XADM: System Attendant Stops While Tracking a Message

{% raw %}

	Article: Q166563
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server system attendant stops while tracking a message.
	
	MORE INFORMATION
	================
	
	The problem happens when the store or message transfer agent (MTA) calls in to
	log a report generation event, such as a non-delivery report (NDR), but does not
	have the Message ID of the message for which the report is intended.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
