---
layout: page
title: "Q190366: XFOR: Cannot Reply to Messages Through a Cisco PIX Firewall"
permalink: /kb/190/Q190366/
---

## Q190366: XFOR: Cannot Reply to Messages Through a Cisco PIX Firewall

	Article: Q190366
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message from one Microsoft Exchange Server computer to another
	through the Internet Mail Service, and then attempt to reply to the message, the
	reply may not be sent successfully. This problem occurs when the two servers are
	connected through a Cisco PIX Firewall on which the Mail Guard feature is
	enabled.
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Mail Guard feature on the Cisco PIX
	Firewall. For additional information, contact Cisco.
	
	For information about how to contact Cisco, query in the Knowledge Base for one
	of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	MORE INFORMATION
	================
	
	Mail Guard is a feature that allows messages to be transferred directly to an
	internal e-mail host, eliminating the need for an e-mail relay host. Mail Guard
	allows connections to an internal e-mail host through Transport Control Protocol
	(TCP) port 25 only. It logs all Simple Mail Transfer Protocol (SMTP) activity
	and allows only the minimum SMTP server commands found in Request for Comments
	(RFC) 821, Section 4.5.1.
	
	PIX Firewalls are manufactured by Cisco, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
