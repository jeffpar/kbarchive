---
layout: page
title: "Q146326: XFOR: No Events Logged when the IMC Refuses Inbound Connection"
permalink: /kb/146/Q146326/
---

## Q146326: XFOR: No Events Logged when the IMC Refuses Inbound Connection

{% raw %}

	Article: Q146326
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) does not log an event if it detects an attempt
	to open an inbound connection (log level 1, category SMTP Interface, type
	warning).
	
	CAUSE
	=====
	
	This behavior is by product design. There are currently no events logged when
	the IMC refuses inbound connections when it is configured for outbound- only
	operation.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
