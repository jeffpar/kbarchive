---
layout: page
title: "Q168656: XCON: Given and Surnames Moved to the Front of FROM: Line"
permalink: kb/168/Q168656/
---

## Q168656: XCON: Given and Surnames Moved to the Front of FROM: Line

	Article: Q168656
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a message from a foreign X.400 messaging system, Microsoft
	Exchange Server looks at the P1 envelope of the message to determine the
	friendly name that will be displayed on the From line of the message.
	
	Some foreign systems to do not pass along the friendly name field (/FFN) and in
	those cases Microsoft Exchange Server displays the literal X.400 O/R address:
	
	  C=us;A=admd;P=prmd;O=orgname;S=surname;G=givenname
	
	It is not easy to determine the originator name in this circumstance.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Exchange Server 5.0 Service Pack 1 addresses this problem by reversing the X400
	O/R address so that the originators name can be easily identified:
	
	  G=givenname;S=surname;O=orgname;P=prmd;A=admd;C=us
	
	The recipient client only needs to look at the first two fields to identify the
	sender.
	
	Additional query words: sender mailbus openmail reverse OR Address syntax sequence
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
