---
layout: page
title: "Q142266: XCON: MS Mail SMTP Addresses Modified During Migration"
permalink: kb/142/Q142266/
---

## Q142266: XCON: MS Mail SMTP Addresses Modified During Migration

	Article: Q142266
	Product(s): Microsoft Exchange
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate from an existing PC Mail Gateway to SMTP to the Microsoft
	Exchange Internet Mail Connector (IMC), your user's SMTP addresses are modified
	instead of keeping the original SMTP address configured in the SMTP Gateway.
	
	CAUSE
	=====
	
	By default, Directory Synchronization creates new SMTP addresses for MS Mail
	users according to the information found on the Site Addressing property page of
	the Site Addressing object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.00
	
	=============================================================================
	
