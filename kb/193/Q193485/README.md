---
layout: page
title: "Q193485: XADM: Exchange Server 5.5 120-Day Evaluation Copy Expiring"
permalink: /kb/193/Q193485/
---

## Q193485: XADM: Exchange Server 5.5 120-Day Evaluation Copy Expiring

	Article: Q193485
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The 120-day evaluation copy of Microsoft Exchange Server 5.5 does not send or
	receive messages if it is installed after Sept 1, 1998. Messages remain in the
	user's Outbox and the following Event ID 1182 is logged in the application event
	log:
	
	 Stop Error in Event App Log, Event ID 1182
	 Thank you for your participation in the Microsoft Exchange Server beta
	 program.
	 Your license to use this beta version of the Microsoft Exchange Server
	 software has expired. Contact Microsoft Corporation.
	
	CAUSE
	=====
	
	The Exchange 5.5 120-day Evaluation Copy verifies that the expiration date is
	between 1996 and 1998. If the expiration date falls outside this date range, the
	evaluation copy expires.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Store.exe
	+-------------------------+
	| File Name | Version     | 
	+-------------------------+
	| Store.exe | 5.05.1960.8 | 
	+-------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Evaluation Copy. This problem was first corrected in Exchange Server
	5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	The 120-day evaluation copy is located on the following Web site:
	
	  http://www.microsoft.com/servers/
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
