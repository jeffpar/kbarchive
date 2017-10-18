---
layout: page
title: "Q166026: XADM: Malformed Message Causes AV in Information Store"
permalink: kb/166/Q166026/
---

## Q166026: XADM: Malformed Message Causes AV in Information Store

	Article: Q166026
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server versions 4.0 or 5.0 information store may stop
	responding and you receive a Dr Watson error message. An access violation
	C0000005 error is logged in the Drwtsn32.log.
	
	CAUSE
	=====
	
	The error occurs because of a malformed message when a POP3 client tries to
	retrieve the message.
	
	WORKAROUND
	==========
	
	Log on to the mailbox using the Microsoft Exchange or Outlook Client, delete the
	message that is causing the crash, if possible, and then restart the information
	store.
	
	MORE INFORMATION
	================
	
	This is an extract of a message that will cause this problem:
	
	  Content-Type: TEXT/PLAIN; charset=US-ASCII
	  sender abcdef@xyz.abc.com )
	
	The second line causes the problem to occur. If you manually remove this line in
	the message, it processes correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	
	Additional query words: crash
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
