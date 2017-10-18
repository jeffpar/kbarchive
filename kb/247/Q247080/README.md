---
layout: page
title: "Q247080: XADM: NDR After Deleting a User from DL in Other Site"
permalink: kb/247/Q247080/
---

## Q247080: XADM: NDR After Deleting a User from DL in Other Site

	Article: Q247080
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user sends a message to a Microsoft Exchange Server distribution list
	(DL), the user may receive the following non-delivery report (NDR) for one or
	more recipients:
	
	  Your message did not reach some or all of the intended recipients.
	  Subject: TEST
	  Sent: 10/10/99
	  The following recipient(s) could not be reached:
	  /o=Organization/ou=Site/cn=RECIPIENTS/cn=Mailbox
	  The message was undeliverable because the recipient specified in the recipient
	  postal address was not known at this address
	  MSEXCH:MSExchangeMTA:Site:ComputerName
	
	The DL in the global address list shows that the recipient is not a member of the
	DL.
	
	CAUSE
	=====
	
	This may occur if the recipient was a member of a distribution list in another
	site and was recently deleted from this DL. The DL is located on a server in a
	site that is different from the site on which the user is hosted.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
