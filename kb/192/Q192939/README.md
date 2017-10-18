---
layout: page
title: "Q192939: XFOR: Event 4123; Message Not Delivered"
permalink: kb/192/Q192939/
---

## Q192939: XFOR: Event 4123; Message Not Delivered

	Article: Q192939
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message sent from Exchange through the Internet Mail Service contains the
	property PR_AUTO_FORWARDED but the value is set to False or 0. The Internet Mail
	Service has the "Disable Auto Replies to the Internet" option selected. This
	message generates the following event 4123 and the message is dropped.
	
	  Event: 4123
	  Source: MSExchangeIMC
	  Description: A message passing through the Internet Mail Service has
	  been intentionally dropped. This is most likely an admin notification
	  (message describing mail failure), an out of office notification (OOF),
	  or an automatic reply from a user's mailbox. Dropping of OOF messages
	  and automatic replies is configurable in the admin pages. The gateway
	  must always drop notifications to the administrator, since they often
	  cause mail loops.
	
	CAUSE
	=====
	
	A third-party gateway may add the PR_AUTO_FORWARDED property per documentation
	in the Microsoft Developer Network (MSDN). The message is delivered into the
	Exchange system. If the message is replied to by a user on Exchange and sent to
	an address that will be delivered through the Internet Mail Service, the system
	acts on the message based on the property's existence and not its value.
	
	The WorldTalk gateway may add the PR_AUTO_FORWARDED property to messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2387.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
