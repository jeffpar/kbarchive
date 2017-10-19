---
layout: page
title: "Q228743: XFOR: NDR Msg from Downstream cc:Mail PO Doesn't Name Recipient"
permalink: /kb/228/Q228743/
---

## Q228743: XFOR: NDR Msg from Downstream cc:Mail PO Doesn't Name Recipient

	Article: Q228743
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Exchange Server users send a mail message to invalid downstream Lotus
	cc:Mail recipients, they receive the following non-delivery report (NDR):
	
	  From: Administrator at cclinkp82
	  Sent: Thursday, April 08, 1999 9:18 AM
	  To: Administrator
	  Subject: Message not deliverable
	
	CAUSE
	=====
	
	Current Microsoft Exchange Connector for Lotus cc:Mail code does not parse "Not
	deliverable to" information from the Lotus cc:Mail post office.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Microsoft Exchange Connector for Lotus cc:Mail
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ccmc.exe  | 5.5.2592.0 | 
	+------------------------+
	| Ccmsg.dll | 5.5.2592.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
