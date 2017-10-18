---
layout: page
title: "Q242888: XADM: How to Remove an E-mail Address from Site Addressing"
permalink: kb/242/Q242888/
---

## Q242888: XADM: How to Remove an E-mail Address from Site Addressing

	Article: Q242888
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a third-party product or an Exchange Server connector was improperly removed,
	you may need to remove an e-mail address from Site Addressing in Exchange
	Server. This article provides the procedure in the "More Information" section.
	
	MORE INFORMATION
	================
	
	The following steps assume that the address has already been removed from the
	mailboxes. If this is not the case, you must first remove it, and then perform
	the following steps.
	
	1. In the Microsoft Exchange Server Administrator program, click Site, click
	  Configuration, and then double-click Site Addressing.
	
	2. Click the Site Addressing tab, and click to clear the Proxy Address check box
	  for the address in question.
	
	If this procedure does not remove the address from Site Addressing, use the
	Administrator program in raw mode to remove the address.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Administrator program in raw mode by typing the following at a
	  command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Click Raw Properties on the File menu for Site Addressing.
	
	3. Click the Gateway-Proxy object attribute.
	
	4. Click the e-mail address that you want to delete, and click Remove.
	
	5. Click Apply, and then click OK.
	
	6. Allow this to replicate out.
	
	This procedure effectively removes any e-mail address from the Site Addressing
	tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
