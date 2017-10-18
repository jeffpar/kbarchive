---
layout: page
title: "Q253018: XFOR: Exchange Connector for Lotus Notes Appends From Field"
permalink: kb/253/Q253018/
---

## Q253018: XFOR: Exchange Connector for Lotus Notes Appends From Field

	Article: Q253018
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up the Microsoft Exchange Connector for Lotus Notes in an
	environment where Exchange Server sends and receives all internet mail, the
	Microsoft Exchange Connector for Lotus Notes may append the From address with
	"@SMTP@" along with the domain name configured in the "Exchange domain in Notes"
	field on the connector. For example, @SMTP@Exchange if "Exchange" is the domain
	name specified in the field above.
	
	CAUSE
	=====
	
	This issue can occur because earlier versions of the Exchange Connector for
	Lotus Notes needed to append the address to properly resolve the address and
	send the message through the Internet Mail Service to the Internet. Now that the
	Exchange Connector for Lotus Notes can determine an Internet address by the way
	the address is formed, this appendage is no longer necessary.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To enable this new capability, add the following parameter to the
	[LME-NOTES-MEXOUT] section of the Exchconn.ini file:
	
	  INCAPSULATESMTP=NO
	
	The default setting of this parameter is "YES." When this parameter is set to
	YES, the Exchange Connector for Lotus Notes functions as it did before the fix
	was applied.
	
	For additional information about how to resolve this issue in Exchange 2000,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q251955 XFOR: Lotus Notes Connector May Append the From Box
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
