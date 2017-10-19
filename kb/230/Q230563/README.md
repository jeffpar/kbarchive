---
layout: page
title: "Q230563: XADM: Information Store Crash in FreePadrlist:padrlist"
permalink: /kb/230/Q230563/
---

## Q230563: XADM: Information Store Crash in FreePadrlist:padrlist

	Article: Q230563
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
	
	The Microsoft Exchange Server information store may end unexpectedly (crash)
	while processing inbound Simple Mail Transfer Protocol (SMTP) messages.
	
	CAUSE
	=====
	
	While processing attachments contained within another message, the running
	thread overwrites its stack by 1 byte. Ultimately, a false (overwritten) address
	is used as a return address, causing Store.exe to violate access.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Store.exe   | 5.5.2611.0 | 
	+--------------------------+
	| Gapi32.dll  | 5.5.2611.0 | 
	+--------------------------+
	| Mdbmsg.dll  | 5.5.2611.0 | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	
	
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
	
