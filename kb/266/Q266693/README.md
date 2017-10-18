---
layout: page
title: "Q266693: XFOR: Can't Add Exchange Server SMTP Addr. in Directory Sync."
permalink: kb/266/Q266693/
---

## Q266693: XFOR: Can't Add Exchange Server SMTP Addr. in Directory Sync.

	Article: Q266693
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may not be able to include the Simple Mail Transfer Protocol (SMTP) proxy
	addresses of Exchange Server Mailboxes in the directory synchronization process
	to the Alias field of the Novell GroupWise directory.
	
	CAUSE
	=====
	
	This problem can occur because this capability was not included in the original
	design of the Microsoft Exchange Connector for Novell GroupWise.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	After you apply this fix, you can map the Exchange Server SMTP proxy to the
	Alias field of the Exchange Connector for Novell GroupWise.
	
	To enable this feature, you need to add the following entries:
	
	- In the Gwamap.tbl file:
	
	  
	
	  ExtName        128 External-Name
	
	- In the Mexamap.tbl file:
	
	  
	
	  SMTPADDR    128 proxyAddresses(SMTP:)
	
	- In the Mapmex.tbl file:
	
	  
	
	  ExtName = SMTPADDR
	
	- In the Exchconn.ini file, under the [LME-GWISE] section:
	
	  
	
	  SMTPAliasType = <gateway_alias_type>
	
	  where <gateway_alias_type> is the name of the gateway alias in the
	  GroupWise directory.
	
	Each of these entries must contain spaces to separate the fields and not tab
	stops, because tab stops make the entry unreadable.
	
	These entries populate the gateway Alias field with the Exchange Server mailbox's
	SMTP proxy address.
	
	Additional query words: dirsync GroupWise Connector
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
