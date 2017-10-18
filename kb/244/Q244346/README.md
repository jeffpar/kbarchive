---
layout: page
title: "Q244346: XCON: Routing Restrictions Don't Work with % Addresses RFC 1123"
permalink: kb/244/Q244346/
---

## Q244346: XCON: Routing Restrictions Don't Work with % Addresses RFC 1123

	Article: Q244346
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The source routing that is specified in Request for Comments (RFC) 1123 5.2.16
	allows for addresses to be encapsulated in the recipient part of a Simple Mail
	Transfer Protocol (SMTP) address. This enables a person to send an e-mail
	address to an SMTP host, and the host then parses the address and reroutes the
	message to the intended recipient.
	
	An Internet Mail Service that is set up to receive only messages that are
	destined for the SMTP domain name processes source routing messages completely
	before it sends back a non-delivery report (NDR).
	
	Messages are completely processed, even if routing restrictions are specified and
	a user uses the source routing that is specified in RFC 1123 5.2.16. This may be
	the tactic that is used for a denial of service attack on an Internet Mail
	Service.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	
	
	Additional query words: RFC 1123 5.2.16 , source routing, IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
