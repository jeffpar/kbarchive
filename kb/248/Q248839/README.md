---
layout: page
title: "Q248839: XCON: MTA Drops Message and Fails to Send NDR During Move User O"
permalink: kb/248/Q248839/
---

## Q248839: XCON: MTA Drops Message and Fails to Send NDR During Move User O

	Article: Q248839
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the move of a mailbox from one Exchange Server computer to another,
	messages may not be delivered to the primary recipient and no non-delivery
	report (NDR) is sent to the message originator. This behavior occurs when the
	following conditions exist:
	
	- The user whose mailbox is moved has an alternate recipient.
	
	- The deliver option to send to both the alternate recipient and the primary is
	  selected.
	
	- The delivery attempt occurs during the actual move user operation.
	
	CAUSE
	=====
	
	The message is delivered to the alternate recipient, but deferred to the primary
	recipient. At the end of the move operation, another attempt is made to deliver
	the mail. When the delivery fails because the correct user address is not in the
	message transfer agent (MTA) cache, no NDR is generated. With the fixed version
	of MTA, an NDR is generated and delivered to the message originator.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	As a workaround, you can remove the alternate recipient before you move a
	mailbox, and after the move, re-assign the alternate recipient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information regarding delivery issues during a move user
	operation, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q172364 XCON: Move User Operation may Cause Mail to Stall or NDR
	
	Additional query words: lost missing multiple copies
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
