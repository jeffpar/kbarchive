---
layout: page
title: "Q186172: XCON: POP3 RETR and LIST Command Behavior Reversed"
permalink: /kb/186/Q186172/
---

## Q186172: XCON: POP3 RETR and LIST Command Behavior Reversed

{% raw %}

	Article: Q186172
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under Exchange 5.0, when a user issues the LIST command, messages are displayed
	in chronological order with the oldest messages displayed first (and the most
	current messages displayed last). Under Exchange 5.5, the sorting of messages is
	reversed (the most current messages are displayed first rather than last). The
	RETR command also displays messages in a reversed order.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Exchange
	Server service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
