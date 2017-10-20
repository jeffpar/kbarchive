---
layout: page
title: "Q271575: XCON: Internet Mail Service Uses the IMCEA  Encapsulation Prefix"
permalink: /kb/271/Q271575/
---

## Q271575: XCON: Internet Mail Service Uses the IMCEA  Encapsulation Prefix

{% raw %}

	Article: Q271575
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the IMCEA encapsulation prefix string.
	
	MORE INFORMATION
	================
	
	The Internet Mail Service uses an IMCEA encapsulation prefix string to identify
	address types other than Simple Mail Transfer Protocol (SMTP) that are sent over
	the Internet Mail Service.
	
	NOTE: The encapsulation prefix is case-sensitive, and must be uppercase to
	function properly.
	
	Some mail servers may not preserve the case of the encapsulation prefix string,
	and therefore violate Request for Comment (RFC) 821, Section two (The SMTP
	Model) which states:
	
	  SMTP implementations must take care to preserve the case of user names as
	  they appear in mailbox arguments.
	
	The encapsulation prefix string is contained in a mailbox argument, as defined by
	RFC 821.
	
	If an SMTP server that is transmitting these encapsulated addresses does not
	preserve the case, the Internet Mail Service does not recognize the messages as
	encapsulated, and therefore generates non-delivery reports (NDRs) for them. This
	behavior causes folder replication over the Internet Mail Service to fail, and
	any messages for connected sites that are sent over the Internet Mail Service
	are not received.
	
	Additional query words: imceaex imc ims
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
