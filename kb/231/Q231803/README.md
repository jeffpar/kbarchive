---
layout: page
title: "Q231803: XADM: CC Recipient Lost in P2 When BCC Used on cc:Mail Message"
permalink: /kb/231/Q231803/
---

## Q231803: XADM: CC Recipient Lost in P2 When BCC Used on cc:Mail Message

	Article: Q231803
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store removes the last SMTP address
	from the P2 body in a message traveling out by means of the Internet Mail
	Service.
	
	CAUSE
	=====
	
	The information store removes the last SMTP address from the P2 body when the
	following conditions are true:
	
	- The message originates in a system outside of Exchange such as Lotus cc:Mail
	  system.
	
	-and-
	
	- The message is routed by the Exchange Server system and sent out the Internet
	  Mail Service.
	
	The address that is removed is the last address in the Cc list when the Bcc field
	also contains addresses. The content in the P1 message body that ensures the
	messages delivery remains intact, and all of the addresses receive a copy of the
	message. SMTP users are unable to Reply All to the message and send to the one
	Cc address that was removed from the P2 body. The users on the cc:Mail system or
	the Exchange Server system receive all the addresses. Only SMTP addresses on the
	other side of the Internet Mail Service experience the loss of the one address.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-----------------------+
	| File name  | Version  | 
	+-----------------------+
	| Store.exe  | 5.5.2598 | 
	+-----------------------+
	| Mdbmsg.dll | 5.5.2598 | 
	+-----------------------+
	| Gapi32.dll | 5.5.2598 | 
	+-----------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
