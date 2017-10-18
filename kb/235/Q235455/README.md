---
layout: page
title: "Q235455: XCON: Modification in X.400 Blind Copy Implementation"
permalink: kb/235/Q235455/
---

## Q235455: XCON: Modification in X.400 Blind Copy Implementation

	Article: Q235455
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
	
	When an Exchange Server computer sends a message with blind copy (Bcc)
	recipients through an X.400 connector, the primary and copy recipients cannot
	see the Bcc recipients if they are all on an Exchange Server computer. However,
	if the recipients' mailbox is not on an Exchange Server computer, but on a
	third-party X.400 message transfer agent (MTA), they may be able to see the Bcc
	recipients.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2642.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2642.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2642.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2642.0 | 
	+-------------------------+
	
	Component: Information Store
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The current implementation of the Bcc functionality in Exchange Server is
	modified by sending two different messages: one without Bcc recipients and one
	for the Bcc recipients. This guarantees that primary and copy recipients cannot
	see the Bcc recipients, no matter what remote third-party MTA is used.
	
	Additional query words: X.400 X400
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
