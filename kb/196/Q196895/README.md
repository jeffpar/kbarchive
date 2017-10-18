---
layout: page
title: "Q196895: XADM: Mailbox Receives Duplicate Messages after Server is Moved"
permalink: kb/196/Q196895/
---

## Q196895: XADM: Mailbox Receives Duplicate Messages after Server is Moved

	Article: Q196895
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Move Server Wizard to move a Microsoft Exchange Server computer
	to a different site, and then you send a message to both a distribution list
	(DL) and a mailbox that is a member of the DL, the mailbox may receive the
	message twice.
	
	CAUSE
	=====
	
	The information store does not properly prevent duplicate messages after a
	server has been moved using the Move Server Wizard.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2418.0
	  Mdbmsg.dll   5.5.2418.0
	  Store.exe    5.5.2418.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Move Server Wizard component
	of Microsoft Exchange Server version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
