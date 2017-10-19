---
layout: page
title: "Q227142: XFOR: cc:Mail Connector May not Deliver Messages w/Attachments"
permalink: /kb/227/Q227142/
---

## Q227142: XFOR: cc:Mail Connector May not Deliver Messages w/Attachments

	Article: Q227142
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
	
	When sending a message from Exchange Server to Lotus cc:Mail with an attachment,
	the Exchange Connector for Lotus cc:Mail may not deliver the message and sends a
	non-delivery report (NDR) with the following reason code:
	
	  Unable to deliver the message due to a communications failure.
	
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
	| Store.exe  | 5.5.2591.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2591.0 | 
	+-------------------------+
	| Gapi32.dll | 5.5.2591.0 | 
	+-------------------------+
	
	
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
	
