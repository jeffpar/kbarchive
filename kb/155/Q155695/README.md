---
layout: page
title: "Q155695: XCON: Replication Over X.400 Backbone Might Fail"
permalink: /kb/155/Q155695/
---

## Q155695: XCON: Replication Over X.400 Backbone Might Fail

	Article: Q155695
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange X.400 Connector is used to connect two or more
	Microsoft Exchange Sites over a corporate X.400 backbone, replication might
	fail.
	
	CAUSE
	=====
	
	This can happen because initial replication places the name of the other
	Microsoft Exchange Server's Directory in the X.400 P1 recipient name. When the
	name of the Microsoft Exchange Site or Organization contains characters that are
	not printable in the Microsoft Exchange Server computer's character set, the
	address becomes invalid in X.400 terms. A Microsoft Exchange Message Transfer
	Agent (MTA) in a backbone which acts as a hub between two or more Microsoft
	Exchange Servers might refuse the message. This is true even if the Site
	Addressing is changed to a correct value.
	
	MORE INFORMATION
	================
	
	An example of an invalid address is:
	
	  C=US;A=TELECOM;P=COMPANY;O=ABC;DDA.TYPE=MSXCHNGE;DDA.VALUE=ABC_XYZ
	
	where the underscore in the DDA.VALUE is not printable in the Microsoft Exchange
	Server computer's character set.
	
	WORKAROUND
	==========
	
	This only happens when you use characters that are not in the printable- string
	character set in Microsoft Exchange Organization and Site names and when an
	X.400 backbone refuses the message. It is not an issue when connecting to
	Microsoft Exchange Servers directly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: conformance
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
