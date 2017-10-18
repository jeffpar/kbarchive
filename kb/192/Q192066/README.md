---
layout: page
title: "Q192066: XADM: Event Service with Internet Explorer 4.01 Hangs NT Shell"
permalink: kb/192/Q192066/
---

## Q192066: XADM: Event Service with Internet Explorer 4.01 Hangs NT Shell

	Article: Q192066
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you right-click the Internet Explorer icon on the desktop, select
	Properties, and click OK, the Windows NT logon shell (Explorer.exe) hangs. This
	happens when you have Internet Explorer 4.01 and Exchange Server build 1960 (or
	later) installed on a clean Windows NT Server 4.0 with Service Pack 3.
	
	CAUSE
	=====
	
	Explorer.exe sends a windows broadcast message to all top-level windows awaiting
	response. In the Exchange Server event service, the broadcast message is missed
	by one of the COM threads and another thread is performing "if (Peek..." instead
	of "while(Peek," missing the message completely, which results in Internet
	Explorer hanging.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q136885 INFO: OLE Threads Must Dispatch Messages
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
