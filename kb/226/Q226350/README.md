---
layout: page
title: "Q226350: XCLN: Can't Open Additional Mailboxes with Outlook DPA"
permalink: /kb/226/Q226350/
---

## Q226350: XCLN: Can't Open Additional Mailboxes with Outlook DPA

	Article: Q226350
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
	
	When Outlook is configured to open additional mailboxes on startup, it does not
	work if Distributed Password Authentication (DPA) is used as authentication
	method, and you get the following error message:
	
	  Unable to expand the folder. The set of folders could not be opened. The
	  information store could not be opened.
	
	The above problem does not occur when Windows NT LAN Manager (NTLM) is used as
	authentication method.
	
	CAUSE
	=====
	
	This behavior is caused by a logic error in the code. The main difference
	between Windows NT and Membership security is that with Membership, one Windows
	NT account, the "broker," is mapped to all the Exchange Server mailboxes.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MDB
	
	+---------------------------+
	| File Name    | Version    | 
	+---------------------------+
	| Emsmdb32.dll | 5.5.2585.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
