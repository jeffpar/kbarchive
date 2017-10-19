---
layout: page
title: "Q253261: XFOR: Large Temporary Proxy Address Tables May Be Corrupted"
permalink: /kb/253/Q253261/
---

## Q253261: XFOR: Large Temporary Proxy Address Tables May Be Corrupted

	Article: Q253261
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
	
	The temporary proxy address tables that are used by the Microsoft Exchange
	Connector for IBM Office Vision/VM (PROFS), the Microsoft Exchange Connector for
	SNADS, and the Microsoft Exchange Connector for Lotus Notes may become corrupted
	and the CTCleanup procedure for the connector component may be unable to clean
	up the tables.
	
	CAUSE
	=====
	
	This issue can occur if duplicate addresses are added to the proxy table that
	cause tables to grow and become corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	NOTE: After you apply this fix, multiple events may appear in the event log
	indicating that the file version of a dynamic-link library (DLL) file installed
	on the server is not current. For additional information about this problem and
	how to resolve it, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q158336 XADM: Modifying Version Values for Proxy Address Generator
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
