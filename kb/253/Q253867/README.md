---
layout: page
title: "Q253867: XFOR: URL Links Not Active When HTML Message Routed to Notes"
permalink: kb/253/Q253867/
---

## Q253867: XFOR: URL Links Not Active When HTML Message Routed to Notes

	Article: Q253867
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus Notes does not retain hyperlink
	information in messages sent from Exchange Server to Lotus Notes. If a message
	contains hyperlinks or URLs, the Notes user receives the message as text only,
	and the link is not active.
	
	CAUSE
	=====
	
	This issue can occur because the Exchange Connector for Lotus Notes uses a Notes
	dynamic-link library (DLL) to perform Rich Text Format (RTF) to Notes Compound
	Data conversion, and this DLL cannot process hyperlinks.
	
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
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
