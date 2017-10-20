---
layout: page
title: "Q236882: XIMS: Addresses Separated by Spaces in IMAP4 Envelope"
permalink: /kb/236/Q236882/
---

## Q236882: XIMS: Addresses Separated by Spaces in IMAP4 Envelope

{% raw %}

	Article: Q236882
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an Internet Message Access Protocol version 4 (IMAP4) client to
	connect to an Exchange Server computer, and then use the FETCH command to obtain
	a message's envelope structure, the addresses from the To and Cc fields may be
	separated by spaces.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2639.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2639.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2639.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2639.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: env_to env_cc
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
