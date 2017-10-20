---
layout: page
title: "Q166536: XCON: MTA Generates Event ID 2187 on Deferred Delivery Message"
permalink: /kb/166/Q166536/
---

## Q166536: XCON: MTA Generates Event ID 2187 on Deferred Delivery Message

{% raw %}

	Article: Q166536
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message designated for deferred delivery, the message transfer
	agent (MTA) may generate an error message resembling the following:
	
	  MSExchangeMTA
	  Event ID: 2187
	  MSExchangeMTA event ID: 2187
	  An MTA database server error was encountered while attempting to unlock
	  an object which is not locked. Called from MTA. Procedure XX. Object at
	  fault: XXXXXXXX.
	
	CAUSE
	=====
	
	The source object for a deferred delivery message is locked twice and then
	unlocked once. The first unlock leaves the object in an unlocked state. When a
	second unlock attempt is made, the error message appears.
	
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
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
