---
layout: page
title: "Q164976: XADM: Encrypted Msgs Can't Be Forwarded w/ Inbox Rule"
permalink: kb/164/Q164976/
---

## Q164976: XADM: Encrypted Msgs Can't Be Forwarded w/ Inbox Rule

	Article: Q164976
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages that are encrypted using Advanced Security do not get forwarded
	automatically, even though you have an inbox rule set up to forward the message
	to another recipient or to a public folder.
	
	CAUSE
	=====
	
	This is by design. Messages that are encrypted with Microsoft Exchange Server
	Advanced Security have a flag set on them that prevents them from being
	auto-forwarded; therefore, the inbox rule process ignores any incoming encrypted
	messages and does not forward them.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Manually forward any encrypted messages to the desired recipients and/or
	  public folders.
	
	MORE INFORMATION
	================
	
	Messages that are only digitally signed (not encrypted) will get forwarded
	automatically by inbox rules if the rule applies to the message.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
