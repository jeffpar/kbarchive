---
layout: page
title: "Q166596: XADM: Starting Information Store Generates Dr. Watson Error"
permalink: /kb/166/Q166596/
---

## Q166596: XADM: Starting Information Store Generates Dr. Watson Error

	Article: Q166596
	Product(s): Microsoft Exchange
	Version(s): 5.0 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Information Store (IS), the
	system may generate a Dr. Watson error and the following event is reported in
	the Windows NT Event Viewer Application log:
	
	  EventID: 4097
	  Source:DrWatson
	  Type:Information
	  Category:None
	  Description:
	  The application, store.DBG, generated an application error. The error
	  occurred on <date> @  <time>.   The exception generated was 000000ba at
	  address 77f4effc.
	
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem was corrected in the latest Microsoft Exchange 5.0 Server U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 5.0 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
