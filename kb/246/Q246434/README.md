---
layout: page
title: "Q246434: XFOR: Internet Msgs from Notes to Exchange Need SMTP Address"
permalink: kb/246/Q246434/
---

## Q246434: XFOR: Internet Msgs from Notes to Exchange Need SMTP Address

	Article: Q246434
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In an environment where Internet mail from Lotus Notes is configured to go to
	Exchange Server, a message from Lotus Notes using a default Request for Comments
	(RFC) 822 format (for example: <username>@<domainname>.com) comes
	across the Exchange Notes Connector as
	NOTES:<username>@<domainname>.com.
	
	Because the message does not have the @<Exchange> information showing that
	it is destined for the Exchange Server organization, the message is returned to
	Lotus Notes rather than transferred to the Internet Mail Service for delivery.
	After the message loops between Exchange Server and Notes three or four times,
	Notes recognizes that the message is stuck, and generates a non-delivery report
	(NDR) for the message to the user.
	
	CAUSE
	=====
	
	Messages sent from Lotus Notes through Exchange Server to the Internet require
	an address format of <SMTP_address>@<Exchange> so that Exchange
	Server knows that the message is destined for the Internet Mail Service. For
	example, the Lotus Notes destination address of
	<username>@<domainname>.com needs to be addressed as
	<username>@<domainname>.com@Exchange (where Exchange is the Notes
	foreign domain name of the Exchange Notes Connector.)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
