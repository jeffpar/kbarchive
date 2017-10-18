---
layout: page
title: "Q214711: XADM: Properties Incorrectly Indicate Read Receipt Not Requested"
permalink: kb/214/Q214711/
---

## Q214711: XADM: Properties Incorrectly Indicate Read Receipt Not Requested

	Article: Q214711
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you request a read receipt for a message sent through a Microsoft Exchange
	Server 5.5 computer on which Service Pack 1 or Service Pack 2 has been applied,
	and then you view the properties for the message in an e-mail client, the
	properties correctly indicate that a read receipt was requested. When the
	message is opened, the read receipt is sent successfully. However, if you view
	the properties for the message after the read receipt has been sent, the
	properties may incorrectly indicate that a read receipt was not requested.
	
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
	| Gapi32.dll | 5.5.2505.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2505.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2505.0 | 
	+-------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Packs 1 and 2. This problem was first corrected in Exchange
	Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
