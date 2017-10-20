---
layout: page
title: "Q224438: XADM: Some Information Store Counters Not Updated Properly"
permalink: /kb/224/Q224438/
---

## Q224438: XADM: Some Information Store Counters Not Updated Properly

{% raw %}

	Article: Q224438
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following Performance Monitor counters associated with the MSExchangeIS
	object may not be updated properly for Internet Message Access Protocol version
	4 (IMAP4), Post Office Protocol version 3 (POP3), or Network News Transfer
	Protocol (NNTP) connections:
	
	- Active Anonymous User Count
	- Active Connection Count
	- Active User Count
	
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
	| Gapi32.dll | 5.5.2544.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2544.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2544.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the fix, the counters are updated properly, although they are
	still only updated every 10 minutes. Therefore, when an event occurs that meets
	the criteria of a particular counter, it may take up to 10 minutes for the
	counter to be updated in Performance Monitor.
	
	Note that the Connection Count counter shows the number of client processes that
	are currently connected to the information store. When a client connects to the
	IMAP4, POP3, or NNTP port, or when a client connected to one of these ports
	sends an invalid IMAP4, POP3, or NNTP command, the client does not connect to
	the information store. The client only connects to the information store when it
	sends a valid command.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
