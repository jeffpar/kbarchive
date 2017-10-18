---
layout: page
title: "Q162680: XCON: SMTP Messages Contain Encapsulated X.400 Addresses"
permalink: kb/162/Q162680/
---

## Q162680: XCON: SMTP Messages Contain Encapsulated X.400 Addresses

	Article: Q162680
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading the Microsoft Exchange Server 4.0 to Service Pack 3, messages
	sent to multiple SMTP recipients contain X.400 addresses instead of the normal
	SMTP address.
	
	The following is an example of how the address may look:
	
	  IMCEAX400-
	  c=US+3Ba=+20+3Bp=Microsoft+3Bo=Site+3Bdda+3ASMTP=user+3B@microsoft.com
	
	The following is how the address would normally appear:
	
	  User@microsoft.com
	
	Users trying to reply to the X.400 addresses user will receive an undeliverable
	NDR from their mail host.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: smtp pop3 netscape pegasus eudora rfc
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
