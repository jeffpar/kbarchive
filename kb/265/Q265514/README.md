---
layout: page
title: "Q265514: XCLN: English Version of Fix for Store Provider Memory Leak"
permalink: kb/265/Q265514/
---

## Q265514: XCLN: English Version of Fix for Store Provider Memory Leak

	Article: Q265514
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	
	For additional information about this fix for earlier versions of Outlook, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q237174 XIMS: IMAPISession::OpenMsgStore Leaks Approximately 40-60 Bytes Per
	  Call
	
	SYMPTOMS
	========
	
	Repeated calls to IMAPISession::OpenMsgStore cause a memory leak even after a
	corresponding close function.
	
	CAUSE
	=====
	
	An internal object is being constructed that, in turn, creates a critical
	section. When the object is destroyed, the corresponding critical section is not
	destroyed, resulting in a memory leak.
	
	RESOLUTION
	==========
	
	The store provider .dll file has been corrected to release the memory that is
	allocated by the critical section
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: memory leak exc55 esc55SP4fix
	
	======================================================================
	Keywords          : exc55 kbExchange550sp4Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
