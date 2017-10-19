---
layout: page
title: "Q247182: XFOR: Exchange Notes Connector Dirsync Deletes Custom Recipients"
permalink: /kb/247/Q247182/
---

## Q247182: XFOR: Exchange Notes Connector Dirsync Deletes Custom Recipients

	Article: Q247182
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you start a full reload of the Lotus Notes to Microsoft Exchange Server
	directory synchronization (dirsync), all of the custom recipients that are
	propagated to the Exchange Server site by Linkage Directory Exchange (LDE) are
	deleted.
	
	CAUSE
	=====
	
	This problem can occur because the Dxamex process incorrectly assumes that these
	custom recipients belong to it.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5
	Service Pack 3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
