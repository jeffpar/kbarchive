---
layout: page
title: "Q157695: XFOR: MTA can't Communicate with Another MTA via French X.25"
permalink: /kb/157/Q157695/
---

## Q157695: XFOR: MTA can't Communicate with Another MTA via French X.25

{% raw %}

	Article: Q157695
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Microsoft Exchange is configured to use a sub address, it can't communicate
	with another Microsoft Exchange Message Transfer Agent (MTA) or any other MTA
	through the French X.25 network (Transpac). When Microsoft Exchange accepts an
	X.25 call, it sends back a Call Accept packet with its own X.121 address.
	
	CAUSE
	=====
	
	The CCITT X.25 1988 recommendations state that there are two formats for this
	packet: Basic and Extended. If the Extended format is used, an Address block is
	optional and Microsoft Exchange will operate successfully. However, the French
	X.25 network uses the Basic format. The problem occurs since the French X.25
	network automatically adds the local DTE address. The only time that this
	problem occurs is when you use a sub address.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange fails to communicate over X.25 in France. The Extended format
	is only used if a specific complementary service is required. The Address block
	is only used if Call Forwarding is active. Since this service is not requested
	and the Address block is non zero, the X.25 network clears the communication
	with an error code of 4A which translates into Longer of Address non zero.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
