---
layout: page
title: "Q249113: XFOR: Connector for Lotus Notes Extracts Filter Rule Incorrectly"
permalink: /kb/249/Q249113/
---

## Q249113: XFOR: Connector for Lotus Notes Extracts Filter Rule Incorrectly

	Article: Q249113
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you set up the filter rule in the [LME-NOTES-DXANOTES] section as follows:
	
	  FILTER_X = X,EQ,[<formatted string>]
	
	The Microsoft Exchange Connector for Lotus Notes may extract the filter rule
	incorrectly, and during directory synchronization (dirsync) the incorrect users
	are synchronized to the Exchange Server directory if the [<formatted
	string>] variable contains "," (without the quotation marks), for example:
	
	  filter_person = CompanyName, EQ, Ministry of Economic Development, Trade and
	  Tourism
	
	The Exchange Connector for Lotus Notes synchronizes all of the entries to the
	Exchange Server directory as if the user's CompanyName is "Ministry of Economic
	Development" instead of "Ministry of Economic Development, Trade and Tourism."
	
	CAUSE
	=====
	
	The Exchange Connector for Lotus Notes uses "," (without the quotation marks) as
	a delimiter when it parses the filter rule.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Exchange Server version 5.5
	Service Pack 3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
