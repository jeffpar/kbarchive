---
layout: page
title: "Q242384: XFOR: DBCS Message From Lotus Notes Is Not Displayed Properly"
permalink: kb/242/Q242384/
---

## Q242384: XFOR: DBCS Message From Lotus Notes Is Not Displayed Properly

	Article: Q242384
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message from a computer running a double-byte character set (DBCS)
	version of Lotus Notes to an Exchange Server computer through the Exchange Notes
	Connector, DBCS characters in the Subject field may not be displayed properly
	when you view the message in an e-mail client. This issue occurs when the
	message is delivered to a recipient on the Exchange Server computer or an
	Internet recipient through the Internet Mail Service.
	
	CAUSE
	=====
	
	This issue occurs when the Exchange Server computer uses the wrong code page to
	convert the message. The server may use the code page associated with the
	Exchange Notes Connector's logon thread, rather than the default code page
	associated with the connector.
	
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
	
	Additional query words: japanese cpid PR_MESSAGE_CODEPAGE
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
