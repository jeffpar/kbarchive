---
layout: page
title: "Q253196: XFOR: cc:Mail DB8 SMTP PAB Entries Are Not Migrated to Exchange"
permalink: kb/253/Q253196/
---

## Q253196: XFOR: cc:Mail DB8 SMTP PAB Entries Are Not Migrated to Exchange

	Article: Q253196
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After Lotus cc:Mail database version 8 (DB8) users that have personal address
	book (PAB) entries are migrated by using the Exchange Server Migration Wizard
	and the .pab file is imported, the PAB entries that contain Internet or SMTP
	e-mail addresses in the Address field are not migrated.
	
	NOTE: The PAB entries that have SMTP addresses in the Address field of the Lotus
	cc:Mail PAB entry have an address in the following format:
	
	  user@domain.com
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade the Lotus cc:Mail Export program to version
	8.30.03 or later.
	
	
	MORE INFORMATION
	================
	
	The Lotus cc:Mail Export program is used by the Exchange Server Migration Wizard
	to export user data from the Lotus cc:Mail post office.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
