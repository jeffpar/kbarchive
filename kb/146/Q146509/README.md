---
layout: page
title: "Q146509: XCON: MTA May Stop If Site Connector Is Removed"
permalink: kb/146/Q146509/
---

## Q146509: XCON: MTA May Stop If Site Connector Is Removed

	Article: Q146509
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) might stop unexpectedly if a
	message is queued for a Site Connector immediately after the Site Connector is
	removed.
	
	CAUSE
	=====
	
	The MTA is trying to send out over a connector that no longer exists. It
	recovers by attempting to find an alternative route. In this case, the MTA is
	erroneously expecting to have information about the deleted Site Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
