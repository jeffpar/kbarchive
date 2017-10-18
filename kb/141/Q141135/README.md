---
layout: page
title: "Q141135: XCON: MSExchangeMSMI NDR Error EventID 2568"
permalink: kb/141/Q141135/
---

## Q141135: XCON: MSExchangeMSMI NDR Error EventID 2568

	Article: Q141135
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS Mail Connector Interchange (MSMI) logs a failure to process a Non-
	Delivery Report (NDR) from Microsoft Exchange in the Windows NT event log when
	it tries to send the NDR to an MS Mail user.
	
	MORE INFORMATION
	================
	
	The NDR is coming back from an adjacent 1984 X.400 MTA and Microsoft Exchange is
	acting as a messaging switch between MS Mail and the 1984 X.400 system. The NDR
	is passed from Microsoft Exchange with an unknown content, therefore, the MSMI
	cannot deliver the NDR to the MS Mail user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: MSExchangeMSMI Session Error EventID 2376
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
