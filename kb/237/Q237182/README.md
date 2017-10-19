---
layout: page
title: "Q237182: XFOR: MSMI Fails with Unknown Exception During Message Delivery"
permalink: /kb/237/Q237182/
---

## Q237182: XFOR: MSMI Fails with Unknown Exception During Message Delivery

	Article: Q237182
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When sending mail between Ms Mail Postoffice and Exchange server, the mail may
	not be delivered. The Microsoft Mail Connector interchange (MSMI) may fail with
	an unknown exception error while the message transfer agent (MTA)continually
	attempts to send a message.
	
	CAUSE
	=====
	
	The MSMI recognizes a problem with a message that the MTA is attempting to
	deliver to the MSMI. The MSMI returns a temporary failure condition to the MTA,
	which causes the MTA to attempt to send the message again. The temporary failure
	is caused by a component running out of buffer space when processing the
	messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MSMI
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Mt.exe    | 5.5.2625.0 | 
	+------------------------+
	| Mtmsg.dll | 5.5.2625.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5, 5.5 SP1, and 5.5 SP2. This problem was first corrected in Exchange
	Server 5.5 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
