---
layout: page
title: "Q223391: XADM: OOF Messages Received Even When OOF Option is Disabled"
permalink: kb/223/Q223391/
---

## Q223391: XADM: OOF Messages Received Even When OOF Option is Disabled

	Article: Q223391
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send mail to a mailbox which may have the Out of Office notification
	enabled or disabled, one or more of the following symptoms may be experienced:
	
	- An Out of Office message is received for every message sent to the mailbox.
	
	- Multiple Out of Office messages are received when sending mail to the
	  mailbox.
	
	- An Out of Office message is received regardless of the current setting of Out
	  of Office notification.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Administrator
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Admin.exe | 5.5.2584 | 
	+----------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	In addition to obtaining the file listed above, the following steps must be
	performed to correct the problem:
	
	1. From within the Microsoft Exchange Server Administrator program, select the
	  mailbox currently experiencing the problems outlined above.
	
	2. On the Tools menu, click Clean Mailbox.
	
	3. Click Custom Message Types, and then type "OOFRULES" (without the quotation
	  marks).
	
	4. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
