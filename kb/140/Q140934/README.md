---
layout: page
title: "Q140934: XFOR: IMC: NDR is Held Until Timeout Period Expired"
permalink: /kb/140/Q140934/
---

## Q140934: XFOR: IMC: NDR is Held Until Timeout Period Expired

{% raw %}

	Article: Q140934
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message to multiple SMTP users, you may not receive Non- Delivery
	Receipts (NDRs) until the timeout period for the message transfer has elapsed.
	This only occurs if one of the recipients cannot be reached because their mail
	host is down and another recipient has an incorrect address.
	
	CAUSE
	=====
	
	The Microsoft Exchange Internet Mail Connector (IMC) holds all NDRs until it has
	exhausted all connection attempts so it can deliver only one NDR per message to
	the sender.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The IMC will now return an NDR for the invalid recipient (the one with the
	incorrect address) before the message times out. Under normal operating
	conditions, the NDR for misspelled domains would be generated within a minute or
	two after the first attempt to deliver fails. If the IMC has a heavy load of
	messages to many different domains, it may be longer. The time for generating
	the NDR and submitting to the Microsoft Exchange Information Store (IS) will be
	the same as if you returned a message from the IMC's Queue page.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
