---
layout: page
title: "Q246270: XADM: Error Installing Service Pack 1 on Exchange 5.5 with OWA"
permalink: kb/246/Q246270/
---

## Q246270: XADM: Error Installing Service Pack 1 on Exchange 5.5 with OWA

	Article: Q246270
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Service Pack 1 (SP1), Service Pack 2 (SP2), or
	Service Pack 3 (SP3) for Microsoft Exchange Server 5.5, you may receive the
	following error message if you have Outlook Web Access (OWA) already installed:
	
	  Access Denied
	  Microsoft Windows NT
	  ID no: 0xc0020005
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove Outlook Web Access (OWA), and then reinstall
	OWA and reapply the service pack. Follow these steps:
	
	1. Remove the OWA component.
	
	2. If you have custom Active Server Page (ASP) pages installed for use with OWA,
	  copy them to a backup location.
	
	3. Delete the \Exchsrvr\Webdata folder.
	
	4. Reinstall OWA, and then reapply the service pack.
	
	5. Copy any custom ASP pages back into the \Exchsrvr\Webdata folder.
	
	Additional query words: upgrade world
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
