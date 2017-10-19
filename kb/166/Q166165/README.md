---
layout: page
title: "Q166165: XFOR: ISOCOR MTA May Drop Messages Sent from Exchange Server"
permalink: /kb/166/Q166165/
---

## Q166165: XFOR: ISOCOR MTA May Drop Messages Sent from Exchange Server

	Article: Q166165
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages sent by Microsoft Exchange Server version 4.0 or version 5.0 Service
	Pack 1 (SP1) over an 88 X.400 Connector to an ISOPLEX 1.3 MTA 4.2.4 system may
	be discarded by the ISOPLEX MTA with the following error message:
	
	  ASN1 error in data from EXCHANGE: Error 0 at offset 5.
	
	A non-delivery report (NDR) is not generated.
	
	CAUSE
	=====
	
	Depending on the associations, Exchange Server may use an incorrect value for
	the Presentation Context ID in the APDU encoding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0 SP1. We are currently researching this issue and will post more information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
