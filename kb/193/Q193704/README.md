---
layout: page
title: "Q193704: XADM: Error Creating Local User Account on Member Server"
permalink: kb/193/Q193704/
---

## Q193704: XADM: Error Creating Local User Account on Member Server

	Article: Q193704
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Server, versions 5.0, 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new local user account in User Manager on a member server that
	has Exchange Server installed, the following error message may appear:
	
	  Microsoft Exchange Extensions cannot be used when administering local
	  accounts.
	  Microsoft Exchange User Manager Extension
	  ID. no. c1037539.
	
	CAUSE
	=====
	
	This message is informational only. Because the Exchange Server extension that
	automatically creates a new user mailbox as you create the new user account in
	User Manager requires a domain account rather than a local account, you are
	prompted with this message. There are no detrimental effects to the new local
	user account, but there will be no automatic creation of an Exchange Server
	mailbox.
	
	WORKAROUND
	==========
	
	To work around this situation, manually create a new user mailbox in the
	Exchange Server Administrator program and associate it with a domain account
	from User Manager.
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange500SP1 kbExchange550SP1
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
