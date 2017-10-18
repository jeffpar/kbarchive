---
layout: page
title: "Q221929: XFOR: OV/VM (PROFS) Connector Stuck in Endless Loop"
permalink: kb/221/Q221929/
---

## Q221929: XFOR: OV/VM (PROFS) Connector Stuck in Endless Loop

	Article: Q221929
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The OV/VM (PROFS) Connector may fail to correctly parse a message sent from the
	host to an Exchange recipient resulting in an endless loop. This will result in
	a mail backlog on the host system.
	
	CAUSE
	=====
	
	The OV/VM(PROFS) Connector received an unexpected End of File (EOF) condition
	while processing a message, which resulted in the endless loop.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OV/VM (PROFS) Connector
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Lsvmhc.dll | 5.5.2568.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Specifically, the LS-PROFS-VMDIA process goes into an endless loop.
	
	Additional query words: endless loop;PROFS;NJE
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
