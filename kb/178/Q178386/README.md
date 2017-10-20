---
layout: page
title: "Q178386: XWEB: RecvTextA Interface for Channel Service Is Broken"
permalink: /kb/178/Q178386/
---

## Q178386: XWEB: RecvTextA Interface for Channel Service Is Broken

{% raw %}

	Article: Q178386
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs with the Chat Service. The RecvTextA interface for channel
	services is broken for IRC/IRCX connections. It still works with MIC. For
	example, you have a Channel Service that watches for profanity in messages. A
	RecvTextA call is made for every message sent by an MIC user, but it is not
	generated if the user sending the message is using either IRC or IRCX.
	
	CAUSE
	=====
	
	The Channel services RecVTextA() call is not called from the IRC client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation in Microsoft Internet Chat
	Server version 2.0 that can affect Microsoft Exchange Server version 5.5.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
