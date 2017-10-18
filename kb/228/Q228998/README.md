---
layout: page
title: "Q228998: XADM: Trailing Space in Domain Name Allows Incorrect Mail Route"
permalink: kb/228/Q228998/
---

## Q228998: XADM: Trailing Space in Domain Name Allows Incorrect Mail Route

	Article: Q228998
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
	
	Internet Mail Service will route the mail incorrectly if there is a trailing
	space after the domain name.
	
	CAUSE
	=====
	
	Internet Mail Service doesn't compare the domain name correctly against the list
	of domain names specified for routing to the specific host.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2594.0 | 
	+---------------------------+
	| Imcmsg.dll   | 5.5.2594.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
