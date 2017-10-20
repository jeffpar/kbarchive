---
layout: page
title: "Q170137: XFOR: PCMTA Service Stops When Message Sent with Date 00"
permalink: /kb/170/Q170137/
---

## Q170137: XFOR: PCMTA Service Stops When Message Sent with Date 00

{% raw %}

	Article: Q170137
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message arriving from the Internet Mail Service with a date of 1900 or a
	2-digit date of 00 is bound for a user on MS Mail connected via the Microsoft
	Mail Connector, the PCMTA may stop without error. The message remains in the
	PCMTA queue. If you try to restart the PCMTA, you will receive the following
	error message:
	
	  Could not start the <msmail connector service name> on <server>.
	  Error 1067: The process terminated unexpectedly.
	
	The service will not start until the message is deleted or returned from the
	PCMTA queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
