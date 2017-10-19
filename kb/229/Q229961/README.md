---
layout: page
title: "Q229961: XFOR:Applying Restrictive Address Space on Internet Mail Service"
permalink: /kb/229/Q229961/
---

## Q229961: XFOR:Applying Restrictive Address Space on Internet Mail Service

	Article: Q229961
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using incorrect address spaces in the Internet Mail Service (Internet Mail
	Connector in Exchange Server 4.0) other than the default wildcard (*) entry can
	cause unexpected routing to occur with multiple Internet Mail Services
	configured. Non-delivery of outbound mail is also possible.
	
	This article explains how to configure the Internet Mail Service properly, and
	why.
	
	MORE INFORMATION
	================
	
	Message routing is performed by the Message Transfer Agent (MTA). The address
	space which best matches the recipient address is selected, based on the
	following preferences:
	
	1. An exact string match: (for example, recipient = "SMTP:userz@microsoft.com"
	  and address space = SMTP:userz@microsoft.com")
	
	2. A wildcard string match: (for example, recipient = "SMTP:userz@microsoft.com"
	  and address space = "SMTP:*@microsoft.com").
	
	  The wildcard string that matches more non-wild characters is given preference.
	
	3. A partial string match: (for example, recipient = "SMTP:userz@microsoft.com"
	  and address space = "SMTP:userz@com").
	
	4. The address type matches and the address string is blank: (for example,
	  recipient = "userz@microsoft.com" and address space = "SMTP:")
	
	The MTA will evaluate the address and decide where to route it, and will do this
	by comparing the entire address of the recipient to the address space entered in
	the Internet Mail Service.
	
	As the MTA does not work like a Domain Name System (DNS) resolver, it does not
	strip off the local portion of the address before matching it against the
	address space string. The whole user address is compared against the whole
	address space string.
	
	A routing table entry of "SMTP:<company>.com" or
	"SMTP:@<company>.com" will not match a user of address
	"SMTP:<user>@<company>.com," whereas an entry of
	"SMTP:*@<company>.com" will match. The MTA will then choose a single
	connector from the set of connectors that support that address space.
	
	As long as the Gateway Address Routing Table (GWART) doesn't change, the same
	address space will always be chosen during rerouting. Rerouting tries different
	connectors within the set of connectors supporting this address space.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
