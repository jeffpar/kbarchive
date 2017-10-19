---
layout: page
title: "Q216264: XADM: Non-Delivery Receipts Fail Due to Error 0xfffff9bf"
permalink: /kb/216/Q216264/
---

## Q216264: XADM: Non-Delivery Receipts Fail Due to Error 0xfffff9bf

	Article: Q216264
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
	
	When a user requests a delivery receipt on behalf of a mailbox on another server
	to which they have been granted delegate rights, the delivery report is not
	received and the following error is visible in the Windows NT Event Viewer
	Application log without enabling additional logging on the Microsoft Exchange
	Information Store:
	
	  Event ID: 2006
	  Source: MSExchangeIS Private
	  Category: Transport Sending
	  Description: The generation of a delivery report or a non-delivery report
	  has failed due to error 0xfffff9bf.
	
	CAUSE
	=====
	
	Delivery receipt requests were not being properly routed to the Message Transfer
	Agent (MTA) to be delivered to the mailbox requesting the delivery receipt.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2541.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2541.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2541.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	This fix is based upon the Windows NT logon of individual mailboxes and only
	works if separate Windows NT account are used in conjunction with the mailbox
	and the mailbox granted delegate rights.
	
	The symptoms listed above is one condition where a 2006 Event may be logged.
	There may be other conditions where a 2006 Event ID may be logged. If, after you
	obtain this fix, the 2006 Events continue, please contact Microsoft Product
	Support Services to help diagnose the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
