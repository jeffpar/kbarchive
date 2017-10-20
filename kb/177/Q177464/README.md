---
layout: page
title: "Q177464: XADM: Information Store Stops in EcCreateP1 When Starting MTA"
permalink: /kb/177/Q177464/
---

## Q177464: XADM: Information Store Stops in EcCreateP1 When Starting MTA

{% raw %}

	Article: Q177464
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange information store stops responding when the Microsoft
	Exchange message transfer agent (MTA) is started and reports an access
	violation. The DRWTSN32 log shows that the stoppage occurred in the function
	EcCreateP1.
	
	CAUSE
	=====
	
	The function that creates the P1 envelope for the message when delivering to the
	MTA (and the gateways) does not check for a null value when the content
	identifier property tag exists on a message. This causes the information store
	to fault when this condition occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: spooler
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
