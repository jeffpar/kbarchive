---
layout: page
title: "Q250342: XFOR: SNADS Connector Causes Host To Abend During Dirsync"
permalink: /kb/250/Q250342/
---

## Q250342: XFOR: SNADS Connector Causes Host To Abend During Dirsync

	Article: Q250342
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
	
	The Microsoft Exchange Connector for SNADS for Exchange Server version 5.5 may
	cause a host system to stop responding or abend during a directory
	synchronization transaction. This occurs on host systems that are running the
	Enterprise Address Book directory software.
	
	CAUSE
	=====
	
	Software for the host component of the Exchange SNADS Connector was incorrectly
	implemented.
	
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
	
	
	The host system only stops responding under the following two conditions:
	
	- When you perform a full reload from Exchange Server to SNADS.
	
	- When more than 3000 transactions (Exchange Server entries) are propagated to
	  the host system.
	
	Additional query words: lsdxa, dirsync, eab, psab, memo
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
