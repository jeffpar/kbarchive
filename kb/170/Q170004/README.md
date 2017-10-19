---
layout: page
title: "Q170004: XCON: Message from PMDF MTA May Be Rejected"
permalink: /kb/170/Q170004/
---

## Q170004: XCON: Message from PMDF MTA May Be Rejected

	Article: Q170004
	Product(s): Microsoft Exchange
	Version(s): WinNT: 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) may reject a message
	forwarded from a PMDF MTA. The non-delivery report (NDR) received by the PMDF's
	client may say:
	
	  Maximum time for delivering the message has expired.
	
	CAUSE
	=====
	
	Some third-party MTAs assume the date from an embedded message. Some versions of
	the PMDF MTA are known to exhibit this behavior. This can create a problem when
	sending to messaging systems, such as Microsoft Exchange Server, that do not
	allow messages older than seven days. This is not user configurable. The correct
	behavior for an MTA when sending embedded messages is to use the creation date
	of the host message. This behavior is by product design.
	
	WORKAROUND
	==========
	
	To workaround this problem, create a new message rather than forwarding an
	existing one.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT: 4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
