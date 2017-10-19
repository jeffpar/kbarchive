---
layout: page
title: "Q253029: XFOR: Connector for Lotus Notes Supports Embedded Attachments"
permalink: /kb/253/Q253029/
---

## Q253029: XFOR: Connector for Lotus Notes Supports Embedded Attachments

	Article: Q253029
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus Notes currently does not support
	multiple levels of attachments in embedded messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	All of the attachments in the embedded messages appear in the root message.
	
	The following new Exchconn.ini parameter is available, which limits the level of
	embedded attachments the Exchange Connector for Lotus Notes supports:
	
	  MAXATTACHMENTLEVEL=
	
	The default value of this parameter is 20.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
